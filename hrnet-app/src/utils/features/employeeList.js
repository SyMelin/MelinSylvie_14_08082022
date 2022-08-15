import { createAction, createReducer } from '@reduxjs/toolkit'
import { orderOfTableTitles } from '../../pages/EmployeeListPage'

const initialState = {
    list: [],
    isEmployeeOrdered: false,
}


export const addEmployee = createAction('employeeList/addEmployee')
export const setEmployeeList = createAction('employeeList/setEmployeeList')
export const orderEmployeeByTableTitles = createAction('employeeList/orderEmployeeByTableTitles')
export const sortEmployeeListAscendingOrder = createAction('employeeList/ascendingOrder')
export const sortEmployeeListDescendingOrder = createAction('employeeList/descendingOrder')

export const sortArrayByStringAscendingOrder =  ((array, string) => {
   // console.log(array)
    array.sort((a, b) => {
       // console.log(a[string])
       // console.log(b[string])
        return a[string].localeCompare(b[string]);
    });
    console.log(array)
    return array
})
  
export const sortArrayByStringDescendingOrder = ((array, string) => {
    array.sort((a, b) => {
        return b[string].localeCompare(a[string]);
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
    .addCase(orderEmployeeByTableTitles, (draft) => {
        draft.list = draft.list.map((employee) => orderObjectBasedOnArray(orderOfTableTitles, employee))
        draft.isEmployeeOrdered = true
        return
    })
    
    .addCase(sortEmployeeListAscendingOrder, (draft, action) => {
        draft.list = sortArrayByStringAscendingOrder(draft.list, action.payload)
        return
    })
    .addCase(sortEmployeeListDescendingOrder, (draft, action) => {
        draft.list = sortArrayByStringDescendingOrder(draft.list, action.payload)
        return
    }) 
)