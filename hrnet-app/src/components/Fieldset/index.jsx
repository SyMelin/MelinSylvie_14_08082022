import FormField from '../FormField'
import './Fieldset.css'

function Fieldset({ fieldsetFields }) {

    return (
        <fieldset className="address">
            <legend>Address</legend>

            { fieldsetFields.map((field, index) => (
                field.input
                ? <FormField
                    key={`fieldsetFields-formField-${index}-Input`}
                    type='input'
                    innerField={field.input}
                />
                : field.select
                    ? <FormField
                        key={`fieldsetFields-formField-${index}-Select`}
                        type='select'
                        innerField={field.select}
                    />
                    : null
            ))}   
        </fieldset>
    )
}

export default Fieldset