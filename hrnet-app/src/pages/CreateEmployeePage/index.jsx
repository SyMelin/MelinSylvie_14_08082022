import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList, selectModal } from '../../utils/selectors'
import * as employeeListActions from '../../utils/features/employeeList'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormFields } from '../../utils/constants/createEmployeeFormFields'
import ModalWrapper from '../../components/ModalWrapper'
import { employeeListData } from '../../mockedData'
import './CreateEmployeePage.css'


/**
 * React component: CreateEmployeePage
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function CreateEmployeePage () {

    const dispatch = useDispatch()
    const employeeList = useSelector(selectEmployeeList).list
    const modalIsActive = useSelector(selectModal).modalIsActive

    useEffect(() => {
        document.title = 'HRnet - Create Employee'
    })

    //Here we must get mocked data from a file at the first render of the home page.
    //To be replaced by a get request when real data available
    useEffect(() => {
        if (employeeList.length === 0) {
            dispatch(employeeListActions.setEmployeeList(employeeListData))
          }
    },
    // eslint-disable-next-line
    [])
    
    return (
        <main>
            <section className="container">
                <CustomLink
                    path="/employee-list"
                    children='View Current Employees'
                />
                <h2 className="title">Create Employee</h2>
                <CreateEmployeeForm formFields={createEmployeeFormFields} />
                <CreateEmployeeButton />
            </section>
            { modalIsActive
            ? <ModalWrapper />
            : null
            }
        </main>   
    )
}

export default CreateEmployeePage