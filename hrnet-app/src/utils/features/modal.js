import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    modalIsOpen: false,
    editNameFormIsOpen: false,
    
}

export const setModalState = createAction('modal/isOpen')
export const setEditNameFormState = createAction('nameEditing/isOpen')

export default createReducer(initialState, builder => builder
    .addCase(setModalState, (draft) => {
        draft.modalIsOpen = !draft.modalIsOpen
        return
    })
    .addCase(setEditNameFormState, (draft) => {
        draft.editNameFormIsOpen = !draft.editNameFormIsOpen
        return
    })
)