import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import { setFormError } from '../../utils/features/createEmployeeForm'
import './Modal.css'





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
           // onClick={clickClose ? () => closeModal() : null}
        >
            <div className='modal-content'>
                <button
                    type='button'
                    className='modal-closeButton'
                    onClick={() => {
                        closeModal()
                       // dispatch(setModalState())
                       // dispatch(setFormError())
                       // resetForm()
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