import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import createEmployeeFormReducer from '../features/createEmployeeForm'
import employeeListReducer from '../features/employeeList'
import modalReducer from '@symelin/react-component-library/Modal/modal'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

export function render(ui, options) {
    const store = configureStore({
        reducer: {
            createEmployeeForm: createEmployeeFormReducer,
            employeeList: employeeListReducer,
            modal: modalReducer,
        }
    })

    function Wrapper({ children }) {
        return (
            <MemoryRouter {...options}>
                <Provider store={store}>children</Provider>
            </MemoryRouter>
        )
    }
    rtlRender(ui, { wrapper: Wrapper })
}