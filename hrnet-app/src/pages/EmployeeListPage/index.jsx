import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { initTable, orderEmployeeByTableTitles, setListToDisplay } from '../../utils/features/employeeList'
import TableFeatureLengthSelect from '../../components/TableFeatureLengthSelect'
import TableFeatureFilter from '../../components/TableFeatureFilter'
import TableFeatureInfo from '../../components/TableFeatureInfo'
import TableFeaturePaginate from '../../components/TableFeaturePaginate'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

//import {employeeListData} from '../../mockedData'


export const orderOfTableTitles = [
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
    const isEmployeeOrdered = useSelector(selectEmployeeList).isEmployeeOrdered

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    useEffect (() => {
        if (!isEmployeeOrdered) {
            dispatch(orderEmployeeByTableTitles())
        }
        const tableLength = document.getElementById('employeeTable-lengthSelect').value
        dispatch(setListToDisplay())
        dispatch(initTable(tableLength))
    }, [])
   
    return (
        <main>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <div className="table-wrapper" id="employee-table__wrapper">
                    <div className="table-features">
                        <TableFeatureLengthSelect />
                        <TableFeatureFilter />
                    </div>
                    <Table />
                    <div className="table-features">
                        <TableFeatureInfo />
                        <TableFeaturePaginate />
                    </div>
                </div>
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </main>
    )
}

export default EmployeeListPage