import { createAction, createReducer } from "@reduxjs/toolkit"
import { selectCreateEmployeeForm } from '../selectors'
import { addEmployee } from "./employeeList"
import { setModalState } from './modal'
import { camelize } from '../../utils/utils'


const initialState = {
    formData: {},
    error: {
        onForm: true,
        onFields: {},
    },
}

// From date 'yyyy-mm-dd' to 'mm/dd/yyyy'
const formatDate = (date) => {
   const array = date.split('-')
   return [array[1], array[2], array[0]].join('/')
}

export const checkFormValidity = createAction('createEmployeeForm/checkValidity')
export const createFormEntry = createAction('createEmployeeForm/formEntry')
export const setFormError = createAction('createEmployeeForm/setFormError')
export const setInputError = createAction('createEmployeeForm/setInputError', (formEntry, validity) => {
    return {
        payload: {
            formEntry: camelize(formEntry),
            validity: validity,
        }
    }
})
export const setInputValue = createAction('createEmployeeForm/setInputValue', (formEntry, value, type) => {
    return {
        payload: {
            formEntry: camelize(formEntry),
            value: value,
            type: type,
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
        draft.error.onForm = !form.checkValidity()
        return
    })
    .addCase(createFormEntry, (draft, action) => {
        draft.formData[action.payload] = ""
    })
    .addCase(setInputValue, (draft, action) => {
        draft.formData[action.payload.formEntry] = action.payload.type === 'date' ? formatDate(action.payload.value) : action.payload.value
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