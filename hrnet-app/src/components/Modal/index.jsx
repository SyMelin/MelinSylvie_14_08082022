import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import { setFormError } from '../../utils/features/createEmployeeForm'
import './Modal.css'


export function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}


function Modal({
        id,
        children,
        escapeClose= true,  // Allows the user to close the modal by pressing `ESC`
        clickClose= true,   // Allows the user to close the modal by clicking the overlay
        className="modal",  // CSS class added to the element being displayed in the modal.
        handleCloseModal= null,
    }) {
    const dispatch = useDispatch()

    function closeModal() {
        dispatch(setModalState())
        handleCloseModal()
    }


    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
           closeModal()
        }
    }

    useEffect(() => {
        if (escapeClose) {
            window.addEventListener("keydown", handleKeyPress);
    
            return () => {
            window.removeEventListener("keydown", handleKeyPress);
            }
        }
    }, [])
    
    return (
        <div
            id={id}
            className={className}
            onClick={clickClose ? () => dispatch(setModalState()) : null}
        >
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