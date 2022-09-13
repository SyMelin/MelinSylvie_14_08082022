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
        expect(screen.getByRole('button', {text: 'save',})).toBeTruthy()
    })
    test('Should lead the user to the employee list page when click on link', async () => {
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
    test('Should display error messages under each form field if the form is not filled and we click on the SAVE button', async () => {
        render (<CreateEmployeePage />)
        const formFields = screen.getAllByTestId('formField')
        const saveButton = screen.getByRole('button', { text: 'save',})
        userEvent.click(saveButton)
        await waitFor(() => {
            expect(screen.getAllByTestId('formField-error').length).toEqual(formFields.length)
        })
    })
    test('Should add a new employee to the list if the form is filled correctly and we click on the SAVE button, and open a modal', async () => {
        render (<CreateEmployeePage />)
        const fieldValues = [
            'Jane',
            'Doe',
            '1995-01-01',
            '2022-09-13',
            '3792 W VIOLET ST',
            'FAYETTEVILLE',
            'AR',
            '72704',
            'Sales',
        ]
        const fieldNames =[
            'first-name',
            'last-name',
            'date-of-birth',
            'start-date',
            'street',
            'city',
            'state',
            'zip-code',
            'department',
        ]

        fieldNames.map((field, index) => 
            fireEvent.change(screen.getByTestId(field), {target: {value: fieldValues[index]}})
        )
        const saveButton = screen.getByRole('button', { text: 'save',})
        userEvent.click(saveButton)
        await waitFor(() => {
            expect(screen.getByTestId('modalWrapper')).toBeTruthy()
        })
    })
})