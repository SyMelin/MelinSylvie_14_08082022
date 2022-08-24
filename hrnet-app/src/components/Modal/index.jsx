import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import { setFormError } from '../../utils/features/createEmployeeForm'
import './Modal.css'





function Modal({
        id,
        children,
        escapeClose= true,      // Allows the user to close the modal by pressing `ESC`
        clickClose= true,       // Allows the user to close the modal by clicking the overlay
        closeText="Close",      // Text content for the close <button> tag.
        blockerClass="modal",   // CSS class added to the overlay (blocker).
        modalClass="modal",     // CSS class added to the element being displayed in the modal.
        closeButtonClass="",    // Add additional class(es) to the close <button> tag.
        showCloseButton= true,  // Shows a (X) icon/button in the top-right corner of the displayed element

        handleCloseModal= null,

        fadeDuration= null,
        fadeDelay= 1.0,
    }) {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setModalState())
        handleCloseModal()
    }


    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
           return closeModal()
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
            className={blockerClass}
           // onClick={clickClose ? () => closeModal() : null}
            style={{
                'animation': `fadeIn ${fadeDuration}ms`,
            }}
        >
            <style>
                {`
                    @keyframes fadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
            <div
                className={modalClass}
                style={{
                    'animation': `hide ${fadeDuration * fadeDelay}ms, fadeInIn ${fadeDuration}ms`,
               }}
            >
                <style>
                {`
                    @keyframes hide {
                        0% { opacity: 0; }
                        100% { opacity: 0; }
                    }
                `}
            </style>
                {showCloseButton
                ? <button
                    type='button'
                    className={`close-modal ${closeButtonClass}`}
                    onClick={closeModal}
                >
                    x {closeText}
                </button>
                : null
                }  
                {children}
            </div>
        </div>
    )
}
export default Modal