import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    modalIsActive: false,
    status: 'modalIsClosed',
}


// Action creators
export const setModalState = createAction('modal/isOpen')
export const setModalStatus = createAction('modal/request')


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setModalState, (draft) => {
        draft.modalIsActive = !draft.modalIsActive
        return
    })
    .addCase(setModalStatus, (draft, action) => {
        draft.status = action.payload
        return
    })
)