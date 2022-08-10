import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import './CreateEmployeeButton.css'

function CreateEmployeeButton() {
    const dispatch = useDispatch()

    return (
        <button 
            className="button" 
            onClick={(e) => {
                e.preventDefault()
                dispatch(setModalState())
            }}
        >
            Save
        </button> 
    )
}

export default CreateEmployeeButton

           // onclick="saveEmployee()"
