import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}


export const addEmployee = createAction('employeeList/addEmployee')


export default createReducer(initialState, builder => builder
    .addCase(addEmployee, (draft, action) => {
        draft.list.push(action.payload)
        return
    })
)