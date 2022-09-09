import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import * as createEmployeeFormActions from '../../utils/features/createEmployeeForm'
import { camelize } from '../../utils/utils'
import Input from '../Input'
import Select from '../Select'
import './FormField.css'


function FormField({ type, innerField }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createEmployeeFormActions.setFieldError(innerField.id, null))
       // dispatch(setFieldValue(input.id, undefined, input.type))
    }, [])

    const createEmployeeFormErrorOnFields = useSelector(selectCreateEmployeeForm).error.onFields

    return (
        <div className={ createEmployeeFormErrorOnFields[camelize(innerField.id)]
                        ? "formField errorOnField"
                        : "formField"
                    }
        >
            <label htmlFor={innerField.id}>{innerField.children}</label>
            { type === 'input'
            ? <Input
                input={innerField}
                />
                : type === 'select'
                ? <Select
                    select={innerField}
                    />
                : null
            }
            { createEmployeeFormErrorOnFields[camelize(innerField.id)] === true
            // createEmployeeFormFields[camelize(input.id)]
            // ? createEmployeeFormFields[camelize(input.id)].error
                ? <p className='formField-error'>{innerField.errorMessage}</p>
                : null
            }
        </div>

    )
}

export default FormField