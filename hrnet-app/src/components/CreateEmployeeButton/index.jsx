import { useDispatch } from 'react-redux'
import { saveEmployee } from '../../utils/features/createEmployeeForm'
import './CreateEmployeeButton.css'

function CreateEmployeeButton() {
   
    const dispatch = useDispatch()

    return (
        <button 
            className="button"
            type='submit'
            onClick={() => {dispatch(saveEmployee())}}
        >
            Save
        </button>
    )
}

export default CreateEmployeeButton