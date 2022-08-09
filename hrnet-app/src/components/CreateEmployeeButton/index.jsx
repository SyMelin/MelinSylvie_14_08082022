import { useDispatch } from 'react-redux'
import { setEditNameFormState } from '../../utils/features/editNameForm'
import { setModalState } from '../../utils/features/modal'
import './CreateEmployeeButton.css'

function CreateEmployeeButton() {
    const dispatch = useDispatch()

    return (
        <button 
            className="button" 
            onClick={(e) => {
                e.preventDefault()
                dispatch(setEditNameFormState())
            }}
        >
            Save
        </button> 
    )
}

export default CreateEmployeeButton

           // onclick="saveEmployee()"
