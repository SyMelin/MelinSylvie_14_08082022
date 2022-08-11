import { useDispatch } from 'react-redux'
import { checkFormValidity } from '../../utils/features/createEmployeeForm'
import { saveEmployee } from '../../utils/features/employeeList'
import { newSaveEmployee } from '../../utils/features/createEmployeeForm'
import './CreateEmployeeButton.css'

function CreateEmployeeButton() {
   
    const dispatch = useDispatch()

    return (
        <button 
            className="button"
            type='submit'
            onClick={(e) => {
              //  dispatch(checkFormValidity())
               dispatch(newSaveEmployee())
            }}
        >
            Save
        </button>
    )
}

export default CreateEmployeeButton