import { useDispatch } from 'react-redux'
import { saveEmployee } from '../../utils/features/createEmployeeForm'
import './CreateEmployeeButton.css'


/**
 * React component: CreateEmployeeButton
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
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