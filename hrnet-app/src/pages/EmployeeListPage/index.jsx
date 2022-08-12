import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { setEmployeeList } from '../../utils/features/employeeList'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

import { employeeListData } from '../../mockedData'

const orderOfTitles = [
    'firstName',
    'lastName',
    'startDate',
    'department',
    'dateOfBirth',
    'street',
    'city',
    'state',
    'zipCode',
]

function EmployeeListPage() {

    const dispatch = useDispatch()

    const sortArrayBasedOnAnotherArray = (arr1, arr2) => {
        arr2.sort((a, b) => {
            return arr1.indexOf(a) - arr1.indexOf(b)
        })
    }
  
    const orderEmployeeBasedOnTableTitles = (base, employee) => {
        const array2 = Object.keys(employee)
        sortArrayBasedOnAnotherArray(base, array2)
        const sortedEmployee = array2.reduce((accumulator, key) => {
            accumulator[key] = employee[key];
        
            return accumulator;
        }, {});
        return sortedEmployee
    }

   // console.log(employeeListData)
    const newEmployeeList = employeeListData.map((employee) => orderEmployeeBasedOnTableTitles(orderOfTitles, employee))
    console.log('new', newEmployeeList)
    dispatch(setEmployeeList(newEmployeeList))

    const employeeList = useSelector(selectEmployeeList).list

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    return (
        <div>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <Table list={employeeList} />
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </div>
    )
}

export default EmployeeListPage