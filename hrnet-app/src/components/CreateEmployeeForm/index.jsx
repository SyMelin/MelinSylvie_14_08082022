import Input from '../Input'
import Fieldset from '../Fieldset'
//import { fieldsetInputs } from '../../utils/constantes/fieldsetInputs'
import Select from '../Select'
import './CreateEmployeeForm.css'


function CreateEmployeeForm({ formFields }) {

    return (
        <form
            action="#"
            id="create-employee"
        >
            { formFields.map((field, index) => (
                field.input
                ? <Input
                    key={`formFields-input-${index}`}
                    input={field.input}
                />
                : field.select
                    ? <Select
                        key={`formFields-${field.select.id}Select`}
                        select={field.select}
                    />
                    : field.fieldset
                        ? <Fieldset
                            key={`formFields-fieldset-${index}`}
                            fieldsetFields={field.fieldset}
                        />
                        : null
            ))}
        </ form>
    )
}
export default CreateEmployeeForm