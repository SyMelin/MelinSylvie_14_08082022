import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectModal } from '../../utils/selectors'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormInputs } from '../../utils/constantes/createEmployeeFormInputs'
import Modal from '../../components/Modal'
import './CreateEmployeePage.css'

function CreateEmployeePage () {

    const modal = useSelector(selectModal)
    const modalIsOpen = modal.modalIsOpen

    useEffect(() => {
        document.title = 'HRnet - Create Employee'
    })

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