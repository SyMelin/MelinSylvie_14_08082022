import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState, setModalStatus } from '../../utils/features/modal'
import './ModalForImport.css'


function ModalForImport({
        id,
        children,
        escapeClose= true,      // Allows the user to close the modal by pressing `ESC`
        clickClose= true,       // Allows the user to close the modal by clicking the overlay
        closeText="Close",      // Text content for the close <button> tag.
        blockerClass="blocker",   // CSS class added to the overlay (blocker).
        modalClass="modal",     // CSS class added to the element being displayed in the modal.
        closeButtonClass="",    // Add additional class(es) to the close <button> tag.
        showCloseButton= true,  // Shows a (X) icon/button in the top-right corner of the displayed element

        handleModalBeforeClose=null,    // Fires when the modal has been requested to close.
        handleModalClose=null,          // Fires when the modal begins closing (including animations).
        handleModalAfterClose=null,     // Fires after the modal has fully closed (including animations).

        /*
        //Not converted since no ajax request needed for JQuery plugin

        // HTML appended to the default spinner during AJAX requests.
        spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
        showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
        */

        fadeDuration= null,     // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay= 1.0,         // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    }) {

    const dispatch = useDispatch()

    const handleFadingEffect = () => {
        const blocker = document.getElementById(id)
        blocker.classList.remove('fadingIn');
        blocker.classList.add('fadingOut');
        setTimeout(function() {
          blocker.classList.remove('fadingOut');
          blocker.classList.add('fadingIn');
        }, fadeDuration);
      }

    const closeModal = () => {
        dispatch(setModalStatus('closingModalRequest'))
        handleModalBeforeClose()  //
        handleFadingEffect()
        dispatch(setModalStatus('modalIsClosing'))
        setTimeout(function() {
            dispatch(setModalState())
            dispatch(setModalStatus("modalIsClosed"))
            handleModalAfterClose() //
        }, fadeDuration);
        handleModalClose() //
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
            className={`${blockerClass} fadingIn`}
            onClick={clickClose ? closeModal : null}
        >
            <style>
                {`  
                    .fadingIn {
                        animation: blockerFadeIn ${fadeDuration}ms;
                    }

                    .fadingOut {
                        animation: blockerFadeOut ${fadeDuration}ms;
                    }

                    @keyframes blockerFadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }

                    @keyframes blockerFadeOut {
                        0% { opacity: 1; }
                        100% { opacity: 0; }
                    }
                `}
            </style>
            <div className={modalClass}>
                <style>
                    {`
                        @keyframes modalFadeIn {
                            0% { opacity: 0; }
                            ${fadeDelay / (1 + fadeDelay) * 100}% { opacity: 0; }
                            100% { opacity: 1; }
                        }
                    `}
                </style>
                {showCloseButton
                    ? <button
                        type='button'
                        className={`close-modal ${closeButtonClass}`}
                        onClick={clickClose ? null : closeModal}
                    >
                        {closeText}
                    </button>
                    : null
                }  
                {children}
            </div>
        </div>
    )
}
export default ModalForImport