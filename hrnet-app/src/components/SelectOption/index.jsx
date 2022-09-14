import PropTypes from 'prop-types'
import './SelectOption.css'


/**
 * SelectOption properties
 * 
 * @typedef { Object } SelectOptionProps
 * @prop { String } optionText - text of the option to display
 * @prop { String } optionValue - value of the option
 */
/**
 * React component: SelectOption
 * 
 * @type { React.FC<SelectOptionProps> }
 * @returns { React.ReactElement }
 */
function SelectOption({ optionText, optionValue }) {
    return optionValue ?  (
        <option className='select-option' value={optionValue}>{optionText}</option>
        )
        : (
        <option className='select-option'>{optionText}</option>
        )
}

SelectOption.propTypes = {
    /** Text of the option to display */
    optionText: PropTypes.string.isRequired,
    /** Value of the option */
    optionValue: PropTypes.string.isRequired
}

export default SelectOption