import Input from '../Input'
import Fieldset from '../Fieldset'
import { fieldsetInputs } from '../../utils/constantes/fieldsetInputs'
import './CreateEmployeeForm.css'

function CreateEmployeeForm({ formInputs }) {
    return (
        <form action="#" id="create-employee">
            {formInputs.map((input, index) => 
                <Input
                    key={`input-${index}`}
                    htmlFor={input.htmlFor}
                    children={input.children}
                    id={input.id}
                    type={input.type}
                />)}
            <Fieldset fieldsetInputs={fieldsetInputs} />
            <label for="department">Department</label>
            <select name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
        </ form>
    )
}
export default CreateEmployeeForm