import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    formData: {
        firstName: '',
        lastName: '',
    },
    error: {
        firstName: false,
        lastName: false,
    },
    editNameFormIsOpen: false,
}


// Action creators
export const setEditNameFormState = createAction('nameEditing/isOpen')






// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setEditNameFormState, (draft) => {
        
        draft.editNameFormIsOpen = !draft.editNameFormIsOpen
        return
    })
    
)