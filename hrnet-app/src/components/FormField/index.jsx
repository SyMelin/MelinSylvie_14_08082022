import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCreateEmployeeForm } from '../../utils/selectors'
import * as createEmployeeFormActions from '../../utils/features/createEmployeeForm'
import { camelize } from '../../utils/utils'
import Input from '../Input'
import Select from '../Select'
import './FormField.css'


/**
 * FormField properties
 * 
 * @typedef { Object } FormFieldProps
 * @prop { String } type - type of field
 * @prop { Object } innerField - object gathering all the field's property
 */
/**
 * React component: FormField
 * 
 * @type { React.FC<FormFieldProps> }
 * @returns { React.ReactElement }
 */
function FormField({ type, innerField }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createEmployeeFormActions.setFieldError(innerField.id, null))
    }, [])

    const createEmployeeFormErrorOnFields = useSelector(selectCreateEmployeeForm).error.onFields

    return (
        <div
            className={ createEmployeeFormErrorOnFields[camelize(innerField.id)]
                        ? "formField errorOnField"
                        : "formField"
                    }
            data-testid="formField"
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
                ? <p className="formField-error" data-testid="formField-error">{innerField.errorMessage}</p>
                : null
            }
        </div>
    )
}

export default FormField