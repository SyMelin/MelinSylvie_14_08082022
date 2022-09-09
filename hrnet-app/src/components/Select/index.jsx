import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import * as createEmployeeFormActions from '../../utils/features/createEmployeeForm'
import SelectOption from '../SelectOption'
import './Select.css'


function Select({ select }) {

    const dispatch = useDispatch()

    const reset = useSelector(selectCreateEmployeeForm).reset

    useEffect(() => {
        dispatch(createEmployeeFormActions.setFieldValue(select.id, undefined, 'select'))
    }, [reset])

    return (
        <select
            name={select.name}
            id={select.id}
            required
            defaultValue=""
            onChange={(e) => {
                dispatch(createEmployeeFormActions.setFieldValue(select.id, e.target.value, 'select'))
                dispatch(createEmployeeFormActions.setFieldError(select.id, e.target.checkValidity()))
            }}
        >
            <option
                key={`${select.id}SelectOption-disabled}`}
                value=""
                disabled
            >
                -- Select an option --
            </option>
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