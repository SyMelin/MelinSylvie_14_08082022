import PropTypes from 'prop-types'
import FormField from '../FormField'
import Fieldset from '../Fieldset'
import './CreateEmployeeForm.css'


/**
 * CreateEmployeeForm properties
 * 
 * @typedef { Object } CreateEmployeeFormProps
 * @prop { Array.<Object> } formFields - array gathering all the form's fields
 */
/**
 * React component: CreateEmployeeForm
 * 
 * @type { React.FC<CreateEmployeeFormProps> }
 * @returns { React.ReactElement }
 */
function CreateEmployeeForm({ formFields }) {

    return (
        <form
            action="#"
            id="create-employee"
            aria-label="form"
        >
            { formFields.map((field, index) => (
                field.input
                ? <FormField
                    key={`formFields-formField-${index}-Input`}
                    type='input'
                    innerField={field.input}
                />
                : field.select
                    ? <FormField
                        key={`formFields-formField-${index}-Select`}
                        type='select'
                        innerField={field.select}
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

CreateEmployeeForm.propTypes = {
    /** Array gathering all the form's fields */
    formFields: PropTypes.arrayOf(PropTypes.object).isRequired
}

CreateEmployeeForm.defaultProps = {
    formFields: []
}

export default CreateEmployeeForm