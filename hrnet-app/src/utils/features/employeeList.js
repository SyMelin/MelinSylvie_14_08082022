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
        indexOfEmployeeInListMin: 0,
        indexOfEmployeeInListMax: 0,
    } 
}


export const addEmployee = createAction('employeeList/addEmployee')
export const setEmployeeList = createAction('employeeList/setEmployeeList')
export const calculateNbOfTablePages = createAction('employeeList/calculateNbOfTablePages')
export const setIndexOfEmployeeInListMin = createAction('employeeList/setIndexOfEmployeeInListMin')
export const setIndexOfEmployeeInListMax = createAction('employeeList/setIndexOfEmployeeInListMax')
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
    .addCase(calculateNbOfTablePages, (draft) => {
        draft.table.nbOfPages = Math.ceil(draft.list.length / draft.table['length'])
    })
    .addCase(setIndexOfEmployeeInListMin, (draft) => {
        draft.table.indexOfEmployeeInListMin = draft.table.indexOfCurrentPage * draft.table['length']
    })
    .addCase(setIndexOfEmployeeInListMax, (draft) => {
        console.log((1 + draft.table.indexOfCurrentPage) * draft.table['length'] <= (draft.list.length - 1))
        draft.table.indexOfEmployeeInListMax = (1 + draft.table.indexOfCurrentPage) * draft.table['length'] <= (draft.list.length - 1) ? ((1 + draft.table.indexOfCurrentPage) * draft.table['length'] - 1) : (draft.list.length - 1)
        //draft.table.indexOfEmployeeInListMax = draft.table.indexOfCurrentPage * draft.table['length']
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

/*
//export const sortEmployeeListAscendingOrder = createAction('employeeList/ascendingOrder')
//export const sortEmployeeListDescendingOrder = createAction('employeeList/descendingOrder')

 
    .addCase(sortEmployeeListAscendingOrder, (draft, action) => {
        console.log(action.payload)
        //if (action.payload === 'firstName' || action.payload === 'lastName' || action.payload === 'city') {
        //    draft.list = sortArrayByStringAscendingOrder(draft.list, action.payload)
        //} 
        return
    })
    .addCase(sortEmployeeListDescendingOrder, (draft, action) => {
        if (action.payload === 'firstName' || action.payload === 'lastName' || action.payload === 'city') {
            draft.list = sortArrayByStringDescendingOrder(draft.list, action.payload)
        }
        return
    })


*/