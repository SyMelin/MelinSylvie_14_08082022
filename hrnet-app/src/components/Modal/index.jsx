import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import { setFormError } from '../../utils/features/createEmployeeForm'
import './Modal.css'


function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}


function Modal({ id, children }) {
    const dispatch = useDispatch()

    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            dispatch(setModalState())
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        }
      }, [])
    
    return (
        <div id={id} className='modal'>
            <div className='modal-content'>
                <button
                    type='button'
                    className='modal-closeButton'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(setModalState())
                        dispatch(setFormError())
                        resetForm()
                    }}
                >
                    x
                </button>
                <p>{children}</p>
            </div>
        </div>
    )
}
export default Modal