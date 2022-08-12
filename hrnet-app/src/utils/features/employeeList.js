import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}


export const addEmployee = createAction('employeeList/addEmployee')
export const setEmployeeList = createAction('employeeList/setEmployeeList')
export const orderEmployeeByTableTitles = createAction('employeeList/orderEmployeeByTableTitles')


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
        
        return
    })
)