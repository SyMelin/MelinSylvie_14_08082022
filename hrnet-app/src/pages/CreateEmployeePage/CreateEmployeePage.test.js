import { Routes, Route } from 'react-router-dom'
import CreateEmployeePage from './'
import EmployeeListPage from '../EmployeeListPage'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils/test'

describe('CreateEmployeePage', () => {
    test('Should render all the components of the page: link, title, form, button', async () => {
        render (<CreateEmployeePage />)
        expect(screen.getByRole('link', {
            text: 'View Current Employees',
        })).toBeTruthy()
        expect(
            screen.getByRole('heading', {
                level: 2,
                text: 'Create Employee',
            })
        ).toBeTruthy()
        expect(screen.getByRole('form')).toBeTruthy()
        expect(screen.getByRole('button', {
            text: 'save',
        })).toBeTruthy()
    })
    test('Should lead the user to the employee list when click on link', async () => {
        render (
            <Routes>
                <Route exact path="/" element={<CreateEmployeePage />} />
                <Route path="/employee-list" element={<EmployeeListPage />} />
            </Routes>, { initialEntries:['/']}
        )
        const linkToEmployeeList = screen.getByText('View Current Employees')
        userEvent.click(linkToEmployeeList)
        await waitFor(() => {
            expect(screen.getByText('Current Employees')).toBeTruthy()
        })
    }) 
})