import Input from '../Input'
import Fieldset from '../Fieldset'
import { fieldsetInputs } from '../../utils/constantes/fieldsetInputs'
import Select from '../Select'
import { departments } from '../../utils/constantes/departmentSelectOptionsList'
import './CreateEmployeeForm.css'

function CreateEmployeeForm({ formInputs }) {

    return (
        <form
            action="#"
            id="create-employee"
        >
            {formInputs.map((input, index) => 
                <Input
                    key={`input-${index}`}
                    input={input}
                />)}
            <Fieldset fieldsetInputs={fieldsetInputs} />
            <Select
                key={`department-select`}
                id="department"
                children="Department"
                name="department"
                optionsList={departments}
            />
        </ form>
    )
}
export default CreateEmployeeForm