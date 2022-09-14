import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import * as createEmployeeFormActions from '../../utils/features/createEmployeeForm'
import './Input.css'


/**
 * Input properties
 * 
 * @typedef { Object } InputProps
 * @prop { Object } input - object gathering all the input's properties
 */
/**
 * React component: Input
 * 
 * @type { React.FC<InputProps> }
 * @returns { React.ReactElement }
 */
function Input ({ input }) {

    const dispatch = useDispatch()
    const reset = useSelector(selectCreateEmployeeForm).reset

    useEffect(() => {
        dispatch(createEmployeeFormActions.setFieldValue(input.id, undefined, input.type))
    }, [reset])

    return (
        <input
            id={input.id}
            data-testid={input.id}
            type={input.type}
            min={input.min}
            max={input.max}
            placeholder={input.placeholder}
            pattern={input.pattern}
        //    value={undefined}
            required
            onChange={(e) => {
                dispatch(createEmployeeFormActions.setFieldValue(input.id, e.target.value, input.type))
                dispatch(createEmployeeFormActions.setFieldError(input.id, e.target.checkValidity()))
            }}   
        />
    )
}

Input.propTypes = {
    /** object gathering all the input's properties */
    input: PropTypes.object.isRequired
}

export default Input