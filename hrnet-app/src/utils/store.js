import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal'
import editNameFormReducer from './features/editNameForm'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        editNameForm: editNameFormReducer,
    }
})

export default store