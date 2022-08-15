import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList, selectModal } from '../../utils/selectors'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormInputs } from '../../utils/constantes/createEmployeeFormInputs'
import { setEmployeeList } from '../../utils/features/employeeList'
import Modal from '../../components/Modal'
import './CreateEmployeePage.css'

import { employeeListData } from '../../mockedData'

function CreateEmployeePage () {


    const dispatch = useDispatch()
    const employeeList = useSelector(selectEmployeeList).list
    const modal = useSelector(selectModal)
    const modalIsOpen = modal.modalIsOpen

    useEffect(() => {
        document.title = 'HRnet - Create Employee'
    })

    //Here we must get mocked data from a file at the first render of the home page.
    //To be replaced by a get request when real data available
    useEffect(() => {
        if (employeeList.length === 0) {
            console.log('hello')
            dispatch(setEmployeeList(employeeListData))
          }
    }, [])
          
    
    return (
        <div>
            <section className="container">
                <CustomLink
                    path="/employee-list"
                    children='View Current Employees'
                />
                <h2 className="title">Create Employee</h2>
                <CreateEmployeeForm formInputs={createEmployeeFormInputs} />
                <CreateEmployeeButton />
            </section>
            { modalIsOpen
            ? <Modal
                id="confirmation"
                children="Employee Created!"
                />
            : null
            }
        </div>   
    )
}

export default CreateEmployeePage