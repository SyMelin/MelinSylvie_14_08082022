import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList, selectModal } from '../../utils/selectors'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormFields } from '../../utils/constantes/createEmployeeFormFields'
import { setEmployeeList } from '../../utils/features/employeeList'
import { setFormError } from '../../utils/features/createEmployeeForm'
//import { resetForm } from '../../components/Modal'
import Modal from '../../components/Modal'
import './CreateEmployeePage.css'

import { employeeListData } from '../../mockedData'

export function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}

function CreateEmployeePage () {

    const dispatch = useDispatch()
    const employeeList = useSelector(selectEmployeeList).list
    const modal = useSelector(selectModal)
    const modalIsActive = modal.modalIsActive

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

    const closeModal = () => {
        dispatch(setFormError())
        resetForm()
    }

    const modalContentChildren = <p>Employee Created!</p>
          
    
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
            ? <Modal
                id="confirmation"
                children={modalContentChildren}
                //escapeClose={true}
               // clickClose={false}
                //closeText="Close Modal"
                blockerClass='modal'
                modalClass="modal-content"
                handleCloseModal={closeModal}
                closeButtonClass="modal-closeButton"
               // showCloseButton={true}
                fadeDuration={1000} //test with 1000
                fadeDelay={1.5} //test with 1.5
                />
            : null
            }
        </main>   
    )
}

export default CreateEmployeePage