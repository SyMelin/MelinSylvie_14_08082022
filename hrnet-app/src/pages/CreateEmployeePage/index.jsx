import CreateEmployeeForm from '../../components/CreateEmployeeForm'
import CreateEmployeeButton from '../../components/CreateEmployeeButton'
import { createEmployeeFormInputs } from '../../utils/constantes/createEmployeeFormInputs'
import './CreateEmployeePage.css'

function CreateEmployeePage () {
    return (
        <div>
            <section class="container">
                <a className="link" href="employee-list.html">View Current Employees</a>
                <h1 className="title">Create Employee</h1>
                <CreateEmployeeForm formInputs={createEmployeeFormInputs} />
                <CreateEmployeeButton />
            </section>
            <div id="confirmation" class="modal">Employee Created!</div>
        </div>   
    )
}

export default CreateEmployeePage