import { useDispatch } from 'react-redux'
import { saveEmployee } from '../../utils/features/employeeList'
import './CreateEmployeeButton.css'

function CreateEmployeeButton() {
   
    const dispatch = useDispatch()

    return (
        <button 
            className="button"
            onClick={(e) => dispatch(saveEmployee(e))}
        >
            Save
        </button> 
    )
}

export default CreateEmployeeButton