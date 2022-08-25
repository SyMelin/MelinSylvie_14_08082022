import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import { setFieldValue, setFieldError } from '../../utils/features/createEmployeeForm'
import { camelize } from '../../utils/utils'
import './Input.css'

function Input ({ input }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFieldError(input.id, null))
        dispatch(setFieldValue(input.id, undefined, input.type))
    }, [])

    const createEmployeeFormErrorOnFields = useSelector(selectCreateEmployeeForm).error.onFields
   // const createEmployeeFormFields = useSelector(selectCreateEmployeeForm).formFields

    return (
        <div className={ createEmployeeFormErrorOnFields[camelize(input.id)]
                        ? "input-wrapper errorOnField"
                        : "input-wrapper"
                    }
        >
            <label htmlFor={input.id}>{input.children}</label>
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
            { createEmployeeFormErrorOnFields[camelize(input.id)] === true
            // createEmployeeFormFields[camelize(input.id)]
            // ? createEmployeeFormFields[camelize(input.id)].error
                ? <p className='input-error'>{input.errorMessage}</p>
                : null
            }
        </div>
    )
}

export default Input