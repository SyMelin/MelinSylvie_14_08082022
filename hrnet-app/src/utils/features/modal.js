import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    modalIsOpen: false,
}


// Action creators
export const setModalState = createAction('nameEditing/isOpen')


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setModalState, (draft) => {
        
        draft.modalIsOpen = !draft.modalIsOpen
        return
    })
    
)