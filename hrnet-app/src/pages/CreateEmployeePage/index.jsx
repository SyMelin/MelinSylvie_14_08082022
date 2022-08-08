import { useEffect } from 'react'
import CustomLink from '../../components/CustomLink'
import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormInputs } from '../../utils/constantes/createEmployeeFormInputs'
import './CreateEmployeePage.css'

function CreateEmployeePage () {

    useEffect(() => {
        document.title = 'HRnet - Create Employee'
    })

    return (
        <div>
            <section class="container">
                <CustomLink
                    path="/employee-list"
                    children='View Current Employees'
                />
                <h2 className="title">Create Employee</h2>
                <CreateEmployeeForm formInputs={createEmployeeFormInputs} />
                <CreateEmployeeButton />
            </section>
            <div id="confirmation" class="modal">Employee Created!</div>
        </div>   
    )
}

export default CreateEmployeePage