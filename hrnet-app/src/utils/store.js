import { configureStore }  from '@reduxjs/toolkit'
import modalReducer from './features/modal'
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