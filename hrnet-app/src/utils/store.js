import { configureStore }  from '@reduxjs/toolkit'
import { default as modalReducer } from '@symelin/react-component-library/Modal/modal'
import createEmployeeFormReducer from './features/createEmployeeForm'
import employeeListReducer from './features/employeeList'

const store = configureStore ({
    reducer: {
        modal: modalReducer,
        createEmployeeForm: createEmployeeFormReducer,
        employeeList: employeeListReducer
    }
})

export default store