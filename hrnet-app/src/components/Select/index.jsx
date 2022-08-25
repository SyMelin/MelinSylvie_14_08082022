import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFieldValue, setFieldError } from '../../utils/features/createEmployeeForm'
import SelectOption from '../SelectOption'
import { camelize } from '../../utils/utils'
import './Select.css'


function Select({ select }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFieldError(select.id, null))
    }, [])

    return (
        <div className="input-wrapper">
            <label htmlFor={select.id}>{select.children}</label>
            <select
                name={select.name}
                id={select.id}
                required
                onChange={(e) => {
                    dispatch(setFieldValue(select.id, e.target.value, 'select'))
                    dispatch(setFieldError(select.id, e.target.checkValidity()))
                }}
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