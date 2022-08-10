import { createAction, createReducer } from '@reduxjs/toolkit'
import { selectCreateEmployeeForm } from '../selectors'
import { checkFormError } from './createEmployeeForm'
import { setModalState } from './modal'

const initialState = {
    list: [],
}

export const addEmployee = createAction('employeeList/addEmployee')


export function saveEmployee(e) {
    e.preventDefault()
    return (dispatch, getState) => {
        const createEmployeeForm = selectCreateEmployeeForm(getState())
        dispatch(checkFormError())
        if (createEmployeeForm.error.onForm === true) {
            console.log('error', createEmployeeForm.error.onForm )
            return
        } else {
            console.log('error', createEmployeeForm.error.onForm )
            dispatch(addEmployee(createEmployeeForm.formData))
            dispatch(setModalState())
        }
    }
}

export default createReducer(initialState, builder => builder
    .addCase(addEmployee, (draft, action) => {
        draft.list.push(action.payload)
        return
    })
)