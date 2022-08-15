import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { setEmployeeList, orderEmployeeByTableTitles, sortEmployeeListAscendingOrder, sortEmployeeListDescendingOrder } from '../../utils/features/employeeList'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

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
                <div style={{'border': '2px solid black'}}>
                    <button
                        type="button"
                        onClick={() => {
                            console.log(employeeList)
                            dispatch(sortEmployeeListAscendingOrder('firstName'))
                        }}
                    >PreNom Croissant</button>
                    <button
                        type="button"
                        onClick={() => {
                            console.log(employeeList)
                            dispatch(sortEmployeeListDescendingOrder('firstName'))
                        }}
                    >PreNom DeCroissant</button>
                </div>
            </section>    
        </div>
    )
}

export default EmployeeListPage