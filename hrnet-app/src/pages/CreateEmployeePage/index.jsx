import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList, selectModal } from '../../utils/selectors'
import { setEmployeeList } from '../../utils/features/employeeList'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormFields } from '../../utils/constantes/createEmployeeFormFields'
import Modal from '../../components/Modal'
import { employeeListData } from '../../mockedData'
import './CreateEmployeePage.css'



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
            dispatch(setEmployeeList(employeeListData))
          }
    }, [])
    
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
            ? <Modal />
            : null
            }
        </main>   
    )
}

export default CreateEmployeePage