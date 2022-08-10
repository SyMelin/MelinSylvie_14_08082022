import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    formData: {},
    error: {
        onForm: true,
        onFields: {},
    },
}


export const createFormEntry = createAction('createEmployeeForm/formEntry')
export const setInputError = createAction('createEmployeeForm/setInputError')
export const setFormError = createAction('createEmployeeForm/setFormError')
export const checkFormError = createAction('createEmployeeForm/checkFormError')
export const setInputValue = createAction('createEmployeeForm/setInputValue', (formEntry, value) => {
    return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
    }
})


export default createReducer(initialState, builder => builder
    .addCase(createFormEntry, (draft, action) => {
        draft.formData[action.payload] = ""
    })
    .addCase(setInputValue, (draft, action) => {
        draft.formData[action.payload.formEntry] = action.payload.value
        return
    })
    .addCase(setInputError, (draft, action) => {
        const formEntry = action.payload
        if (draft.formData[formEntry] === "") {
            draft.error.onFields[action.payload] = true
        } else {
            draft.error.onFields[action.payload] = false
        }
        return
    })
    .addCase(setFormError, (draft) => {
        draft.error.onForm = true
    })
    .addCase(checkFormError, (draft) => {
        if (Object.values(draft.formData).filter(el => el ==='').length > 0) {
            draft.error.onForm = true
        } else if (Object.values(draft.error.onFields).filter(el => el === true).length > 0) {
            draft.error.onForm = true
        } else {
            draft.error.onForm = false
        }
        return
    })
)