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

export default SelectOption