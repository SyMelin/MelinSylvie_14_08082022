import { useDispatch } from 'react-redux'
import { setInputValue } from '../../utils/features/createEmployeeForm'
import SelectOption from '../SelectOption'
import './Select.css'

function Select({ id, children, name, optionsList }) {

    const dispatch = useDispatch()

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{children}</label>
            <select
                key={`${id}Select`}
                name={name}
                id={id}
                required
                onChange={(e) => {dispatch(setInputValue(id, e.target.value))}}
            >
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