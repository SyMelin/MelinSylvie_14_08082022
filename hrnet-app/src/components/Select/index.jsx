import SelectOption from '../SelectOption'
import './Select.css'

function Select({ id, children, name, optionsList }) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{children}</label>
            <select name={name} id={id} onChange={(e) => console.log(e.target.value)}>
                {optionsList.map((option, index) => (
                    <SelectOption
                        key={`${id}SelectOption-${index}`}
                        optionText={option.name}
                        optionValue={option.value ? option.value : null}
                    />
                ))}
            </select>
        </div>
    )
}

export default Select