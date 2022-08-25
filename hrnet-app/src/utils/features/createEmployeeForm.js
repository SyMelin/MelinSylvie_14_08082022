import { createAction, createReducer } from "@reduxjs/toolkit"
import { selectCreateEmployeeForm } from '../selectors'
import { addEmployee } from "./employeeList"
import { setModalState } from './modal'
import { camelize } from '../../utils/utils'


const initialState = {
    formData: {},
   // formFields: {},
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
export const resetFormData = createAction('createEmployeeForm/resetFormData')
export const setFormError = createAction('createEmployeeForm/setFormError')
export const initFieldError = createAction('createEmployeeForm/initFieldError') 
export const setFieldError = createAction('createEmployeeForm/setFieldError', (formEntry, validity) => {
    return {
        payload: {
            formEntry: camelize(formEntry),
            validity: validity,
        }
    }
})
/*
export const initFormField = createAction('createEmployeeForm/initFormField', (formEntry, type) => {
    return {
        payload: {
            formEntry: camelize(formEntry),
            type: type,
        }
    }
})
*/
export const setFieldValue = createAction('createEmployeeForm/setFieldValue', (formEntry, value, type) => {
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
        const isError = !form.checkValidity()
        console.log('isError', isError)
        const errorOnFields = Object.entries(draft.error.onFields).filter(el => el[1] === null || el[1] === true)
        if (errorOnFields.length > 0) {
            errorOnFields.filter(el => el[1] === null).map(arr => draft.error.onFields[arr[0]] = true)
            draft.error.onForm = true
            return
        } else {
            if(isError === true) {
                draft.error.onForm = true
            } else {
                draft.error.onForm = false
            }
        return
        }
    })
    .addCase(createFormEntry, (draft, action) => {
        draft.formData[action.payload] = ""
        return
    })
    .addCase(resetFormData, (draft) => {
        draft.formData = {}
        return
    })
    /*
    .addCase(initFormField, (draft, action) => {
        draft.formFields[action.payload.formEntry] = {
           // type: action.payload.type,
            value: undefined,
            error: null,
        }
        return
    })
    */
    .addCase(setFieldValue, (draft, action) => {
        const value = action.payload.value ===  undefined ? 'undefined' : action.payload.type === 'date' ? formatDate(action.payload.value) : action.payload.value
        draft.formData[action.payload.formEntry] = value
        return
    })
    .addCase(initFieldError, (draft, action) => {
        Object.entries(draft.error.onFields).map(arr => draft.error.onFields[arr[0]] = null)
    })
    .addCase(setFieldError, (draft, action) => {
        const validity = action.payload.validity
        draft.error.onFields[action.payload.formEntry] = validity === null ? validity : !validity
        return
    })
    .addCase(setFormError, (draft) => {
        draft.error.onForm = true
        return
    })
    
)