import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { orderEmployeeByTableTitles } from '../../utils/features/employeeList'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'
import ArrowUpSvg from '../../components/ArrowUpSvg'

//import { employeeListData } from '../../mockedData'

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
        return
    }, [])
   
    const employeeList = useSelector(selectEmployeeList).list

    return (
        <div>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <Table list={employeeList} />
                <CustomLink
                    path='/'
                    children='Home'
                />
                <div>
                    <ArrowUpSvg />
                </div>
            </section>    
        </div>
    )
}

export default EmployeeListPage