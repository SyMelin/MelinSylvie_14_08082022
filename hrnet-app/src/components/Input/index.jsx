import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import { setInputValue, setInputError } from '../../utils/features/createEmployeeForm'
import { camelize } from '../../utils/utils'
import './Input.css'

function Input ({ input }) {

    const dispatch = useDispatch()
    const createEmployeeFormErrorOnFields = useSelector(selectCreateEmployeeForm).error.onFields

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
                required
                onChange={(e) => {
                    dispatch(setInputValue(input.id, e.target.value))
                    dispatch(setInputError(input.id, e.target.checkValidity()))
                }}   
            />
            { createEmployeeFormErrorOnFields[camelize(input.id)]
            ? <p className='input-error'>{input.errorMessage}</p>
            : null }
        </div>
    )
}

export default Input