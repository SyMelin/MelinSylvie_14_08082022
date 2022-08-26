import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import { setFieldValue, setFieldError } from '../../utils/features/createEmployeeForm'
import { camelize } from '../../utils/utils'
import './Input.css'

function Input ({ input }) {

    const dispatch = useDispatch()
    const reset = useSelector(selectCreateEmployeeForm).reset

    useEffect(() => {
        dispatch(setFieldValue(input.id, undefined, input.type))
    }, [])

    useEffect(() => {
        console.log('reset')
       // dispatch(setFieldValue(input.id, undefined, input.type))
    }, [reset])

    return (
        <input
            id={input.id}
            type={input.type}
            min={input.min}
            max={input.max}
            placeholder={input.placeholder}
            pattern={input.pattern}
            value={undefined}
            required
            onChange={(e) => {
                //console.log(e.target)
                dispatch(setFieldValue(input.id, e.target.value, input.type))
                dispatch(setFieldError(input.id, e.target.checkValidity()))
            }}   
        />
    )
}

export default Input