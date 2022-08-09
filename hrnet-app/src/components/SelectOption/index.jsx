import './SelectOption.css'

function SelectOption({ optionText, optionValue }) {
    return optionValue ?  (
        <option className='select-option' value={optionValue}>{optionText}</option>
        )
        : (
        <option className='select-option'>{optionText}</option>
        )
}

export default SelectOption