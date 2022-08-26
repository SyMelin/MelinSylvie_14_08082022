import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFieldValue, setFieldError } from '../../utils/features/createEmployeeForm'
import SelectOption from '../SelectOption'
import { camelize } from '../../utils/utils'
import './Select.css'


function Select({ select }) {

    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(setFieldValue(input.id, undefined, input.type))
    }, [])

    return (
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
    )
}

export default Select