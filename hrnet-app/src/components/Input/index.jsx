import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createFormEntry, setInputValue, setInputError } from '../../utils/features/createEmployeeForm'
import './Input.css'

function Input ({ id, children, type }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createFormEntry(id)) 
    }, [])
    
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                type={type}
                onChange={(e) => {
                    dispatch(setInputValue(id, e.target.value))
                    dispatch(setInputError(id))
                }}
            />
        </div>
    )
}

export default Input