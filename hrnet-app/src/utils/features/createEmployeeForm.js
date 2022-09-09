import { createSlice } from '@reduxjs/toolkit'
import { selectCreateEmployeeForm } from '../selectors'
import * as employeeListActions from "./employeeList"
import { setModalState } from '@symelin/react-component-library/Modal/modal'
//import { setModalState } from './modal'
import { camelize } from '../../utils/utils'


const initialState = {
    formData: {},
    error: {
        onForm: true,
        onFields: {},
    },
    reset: 0,
}


// From date 'yyyy-mm-dd' to 'mm/dd/yyyy'
const formatDate = (date) => {
    const array = date.split('-')
    return [array[1], array[2], array[0]].join('/')
 }
 

 export function saveEmployee() {
    console.log('hello')
     return (dispatch, getState) => {
         dispatch(actions.checkFormValidity())
         const createEmployeeForm = selectCreateEmployeeForm(getState())
         if (createEmployeeForm.error.onForm === true) {
             return
         } else {
             dispatch(employeeListActions.addEmployee(createEmployeeForm.formData))
             dispatch(setModalState())
         }  
     }
 }


const { actions, reducer } = createSlice({
    name: 'createEmployeeForm',
    initialState,
    reducers: {
        checkFormValidity: (draft) => {
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
        },
        createFormEntry: (draft, action) => {
            draft.formData[action.payload] = ""
            return
        },
        reset: (draft) => {
            draft.reset = draft.reset + 1
            return
        },
        initFieldError: (draft) => {
            Object.entries(draft.error.onFields).map(arr => draft.error.onFields[arr[0]] = null)
            return
        },
        setFormError: (draft) => {
            draft.error.onForm = true
            return
        },
        setFieldValue: {
            prepare: (formEntry, value, type) => ({
                payload: {
                    formEntry: camelize(formEntry),
                    value: value,
                    type: type,
                }
            }),
            reducer: (draft, action) => {
                const value = action.payload.value ===  undefined ? 'undefined' : action.payload.type === 'date' ? formatDate(action.payload.value) : action.payload.value
                draft.formData[action.payload.formEntry] = value
                return
        }},
        setFieldError: {
            prepare: (formEntry, validity) => ({
                payload: {
                    formEntry: camelize(formEntry),
                    validity: validity,
                }
            }),
            reducer: (draft, action) => {
                const validity = action.payload.validity
                draft.error.onFields[action.payload.formEntry] = validity === null ? validity : !validity
                return
        }},
    }
})

export const {
    checkFormValidity,
    createFormEntry,
    reset,
    initFieldError,
    setFormError,
    setFieldValue,
    setFieldError
} = actions

export default reducer