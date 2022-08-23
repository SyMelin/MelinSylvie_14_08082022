import Input from '../Input'
import Select from '../Select'
import './Fieldset.css'

function Fieldset({ fieldsetFields }) {

    return (
        <fieldset className="address">
            <legend>Address</legend>

            { fieldsetFields.map((field, index) => (
                field.input
                ? <Input
                    key={`fieldsetFields-input-${index}`}
                    input={field.input}
                />
                : field.select
                    ? <Select
                        key={`fieldsetFields-${field.select.id}Select`}
                        select={field.select}
                    />
                    : null
            ))}   
        </fieldset>
    )
}

export default Fieldset