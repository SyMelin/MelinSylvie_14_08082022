import { createAction, createReducer } from "@reduxjs/toolkit"
import { selectCreateEmployeeForm } from '../selectors'
import { addEmployee } from "./employeeList"
import { setModalState } from './modal'

const initialState = {
    formData: {},
    error: {
        onForm: true,
        onFields: {},
    },
}

export const checkFormValidity = createAction('createEmployeeForm/checkValidity')
export const createFormEntry = createAction('createEmployeeForm/formEntry')
export const setInputError = createAction('createEmployeeForm/setInputError', (formEntry, validity) => {
    return {
        payload: {
            formEntry: formEntry,
            validity: validity,
        }
    }
})
export const setFormError = createAction('createEmployeeForm/setFormError')
export const setInputValue = createAction('createEmployeeForm/setInputValue', (formEntry, value) => {
    return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
    }
})


export function saveEmployee() {
     return (dispatch, getState) => {
        dispatch(checkFormValidity())
        const createEmployeeForm = selectCreateEmployeeForm(getState())
        if (createEmployeeForm.error.onForm === true) {
            return
         } else {
            dispatch(addEmployee(createEmployeeForm.formData))
            dispatch(setModalState())
         }
         
     }
 }


export default createReducer(initialState, builder => builder
    .addCase(checkFormValidity, (draft) => {
        const form = document.getElementById('create-employee')
        console.log('formValidity', form.checkValidity())
        draft.error.onForm = !form.checkValidity()
        return
    })
    .addCase(createFormEntry, (draft, action) => {
        draft.formData[action.payload] = ""
    })
    .addCase(setInputValue, (draft, action) => {
        draft.formData[action.payload.formEntry] = action.payload.value
        return
    })
    .addCase(setInputError, (draft, action) => {
        draft.error.onFields[action.payload.formEntry] = !action.payload.validity
        return
    })
    .addCase(setFormError, (draft) => {
        draft.error.onForm = true
        return
    })
    
)