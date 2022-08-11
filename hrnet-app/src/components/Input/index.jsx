import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import { createFormEntry, setInputValue, setInputError } from '../../utils/features/createEmployeeForm'
import './Input.css'

function Input ({ input }) {

    const dispatch = useDispatch()
    const createEmployeeFormErrorOnFields = useSelector(selectCreateEmployeeForm).error.onFields

    useEffect(() => {
        dispatch(createFormEntry(input.id)) 
    }, [])
    
    return (
        <div className={ createEmployeeFormErrorOnFields[input.id]
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
                required
                onChange={(e) => {
                    dispatch(setInputValue(input.id, e.target.value))
                    dispatch(setInputError(input.id, e.target.checkValidity()))
                }}
                
            />
            { createEmployeeFormErrorOnFields[input.id]
            ? <p className='input-error'>{input.errorMessage}</p>
            : null }
        </div>
    )
}

export default Input