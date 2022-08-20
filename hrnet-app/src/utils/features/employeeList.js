import { createAction, createReducer } from '@reduxjs/toolkit'
import { orderOfTableTitles } from '../../pages/EmployeeListPage'
import { camelize } from '../utils'

const initialState = {
    list: [],
    isEmployeeOrdered: false,
    table: {
        length: 10,
        nbOfPages: 1,
        indexOfCurrentPage: 0,
        firstIndexToSlice: 0,
        lastIndexToSlice: 0,
    } 
}


export const addEmployee = createAction('employeeList/addEmployee')
export const setEmployeeList = createAction('employeeList/setEmployeeList')
export const initTable = createAction('employeeList/initTable')
export const moveToPageIndex = createAction('employeeList/moveToPageIndex')
export const orderEmployeeByTableTitles = createAction('employeeList/orderEmployeeByTableTitles')
export const sortEmployeeList = createAction('employeeList/sorting', (string, type, direction) => {
    return {
        payload: {
            string: {
                value: string,
                format: type,
            },
            direction: direction,
        }
    }
})
 

export const sortArrayByAscendingOrder =  ((array, string) => {
    const property =  string.value
    const type = string.type
   // console.log(array)
    array.sort((a, b) => {
       // console.log(a[string])
       // console.log(b[string])
        if (type === 'letterString') {
            return a[property].localeCompare(b[property]);
        } else {
            return (b[property] < a[property]) ? 1 : -1;
        } 
    });
    //console.log(array)
    return array
})
  
export const sortArrayByDescendingOrder = ((array, string) => {
    const property =  string.value
    const type = string.type
    array.sort((a, b) => {
        if (type === 'letterString') {
            return b[string].localeCompare(a[string]);
        } else {
            return (a[property] < b[property]) ? 1 : -1;
        }
    });
    return array
})



const sortArrayBasedOnAnotherArray = (arr1, arr2) => {
    arr2.sort((a, b) => {
        return arr1.indexOf(a) - arr1.indexOf(b);
    })
}

const orderObjectBasedOnArray = (base, employee) => {
    const array2 = Object.keys(employee)
    sortArrayBasedOnAnotherArray(base, array2)
    const sortedObject = array2.reduce((accumulator, key) => {
        accumulator[key] = employee[key];
    
        return accumulator;
    }, {});
    return sortedObject
}


export default createReducer(initialState, builder => builder
    .addCase(addEmployee, (draft, action) => {
        draft.list.push(action.payload)
        return
    })
    .addCase(setEmployeeList, (draft, action) => {
        draft.list = action.payload
        return
    })
    .addCase(initTable, (draft, action) => {
        const tableLength = action.payload
        draft.table['length'] = tableLength
        draft.table.nbOfPages = Math.ceil(draft.list.length / tableLength)
        draft.table.indexOfCurrentPage = 0
        draft.table.firstIndexToSlice = 0
        draft.table.lastIndexToSlice = (1 + draft.table.indexOfCurrentPage) * tableLength <= (draft.list.length - 1) ? ((1 + draft.table.indexOfCurrentPage) * tableLength - 1) : (draft.list.length - 1)
    })
    .addCase(moveToPageIndex, (draft, action) => {
        const index = action.payload
        draft.table.indexOfCurrentPage = index
        draft.table.firstIndexToSlice = index * draft.table['length']
        draft.table.lastIndexToSlice = (1 + index) * draft.table['length'] <= (draft.list.length - 1) ? ((1 + index) * draft.table['length'] - 1) : (draft.list.length - 1)
    })
    .addCase(orderEmployeeByTableTitles, (draft) => {
        draft.list = draft.list.map((employee) => orderObjectBasedOnArray(orderOfTableTitles, employee))
        draft.isEmployeeOrdered = true
        return
    })
    .addCase(sortEmployeeList, (draft, action) => {
        const direction = action.payload.direction
        const string = action.payload.string
            switch (direction) {
                case 'up':
                    draft.list = sortArrayByAscendingOrder(draft.list, string);
                break;

                case 'down':
                    draft.list = sortArrayByDescendingOrder(draft.list, string);
                break;
                default:
                break;
            }
        }
    )
)