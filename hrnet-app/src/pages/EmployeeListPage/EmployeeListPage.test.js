import { Routes, Route } from 'react-router-dom'
import EmployeeListPage from './'
import CreateEmployeePage from '../CreateEmployeePage'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../../utils/test'

describe('EmployeeListPage', () => {
    test('Should render all the components of the page: title, table, link', async () => {
        render (<EmployeeListPage />)
        expect(screen.getByRole('link', {
            text: 'Home',
        })).toBeTruthy()
        expect(
            screen.getByRole('heading', {
                level: 2,
                text: 'Current Employees',
            })
        ).toBeTruthy()
        expect(screen.getByTestId('employee-table__wrapper')).toBeTruthy()
    })
    test('Should lead the user to the "create employee form page" list when click on link', async () => {
        render (
            <Routes>
                <Route exact path="/" element={<CreateEmployeePage />} />
                <Route path="/employee-list" element={<EmployeeListPage />} />
            </Routes>, { initialEntries:['/employee-list']}
        )
        const linkToHome = screen.getByText('Home')
        userEvent.click(linkToHome)
        await waitFor(() => {
            expect(screen.getByText('Create Employee')).toBeTruthy()
        })
    }) 
})