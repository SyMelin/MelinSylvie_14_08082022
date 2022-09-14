import PropTypes from 'prop-types'
import FormField from '../FormField'
import './Fieldset.css'


/**
 * Fieldset properties
 * 
 * @typedef { Object } FieldsetProps
 * @prop { Array.<Object> } fieldsetFields - array gathering all the fieldset's fields
 */
/**
 * React component: Fieldset
 * 
 * @type { React.FC<FieldsetProps> }
 * @returns { React.ReactElement }
 */
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


Fieldset.propTypes = {
    /** Array gathering all the fieldset's fields */
    fieldsetFields: PropTypes.arrayOf(PropTypes.object).isRequired
}

Fieldset.defaultProps = {
    fieldsetFields: []
}

export default Fieldset