import { useDispatch } from 'react-redux'
import { setInputValue } from '../../utils/features/createEmployeeForm'
import SelectOption from '../SelectOption'
import './Select.css'


function Select({ select }) {

    const dispatch = useDispatch()

    return (
        <div className="input-wrapper">
            <label htmlFor={select.id}>{select.children}</label>
            <select
                name={select.name}
                id={select.id}
                required
                onChange={(e) => {dispatch(setInputValue(select.id, e.target.value))}}
            >
                { select.optionsList.map((option, index) => (
                    <SelectOption
                        key={`${select.id}SelectOption-${index}`}
                        optionText={option.name}
                        optionValue={option.value ? option.value : null}
                    />
                ))}
            </select>
        </div>
    )
}

export default Select