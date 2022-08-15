import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { setEmployeeList, orderEmployeeByTableTitles, sortArrayByStringAscendingOrder } from '../../utils/features/employeeList'
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

   // dispatch(setEmployeeList(employeeListData))
    dispatch(orderEmployeeByTableTitles())

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
                <div style={{'border': '2px solid black'}}>
                    <button
                        type="button"
                        onClick={() => {
                            console.log(employeeList)
                          //  const test = [...employeeList]
                         //   const employeeListSorted = sortArrayByStringAscendingOrder(test, 'firstName')
                          //  dispatch(setEmployeeList(employeeListSorted))// infinite loop rerender
                        }}
                    >PreNom Croissant</button>
                    <button
                        type="button"
                       // onClick={dispatch(sortEmployeeListDescendingOrder('firstName'))}
                    >PreNom DeCroissant</button>
                </div>
            </section>    
        </div>
    )
}

export default EmployeeListPage