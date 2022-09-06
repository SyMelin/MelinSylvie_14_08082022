import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalState, setBlockerStatus, setModalStatus, setModalPermission } from '../../utils/features/modal'
import { selectModal } from '../../utils/selectors'
import ModalContentForImport from '../ModalContentForImport'
import './ModalForImport.css'



function ModalForImport({
        id,
        children,
        escapeClose= true,              // Allows the user to close the modal by pressing `ESC`
        clickClose= true,               // Allows the user to close the modal by clicking the overlay
        closeText="Close",              // Text content for the close <button> tag.
        blockerClass="blocker",         // CSS class added to the overlay (blocker).
        modalClass="modal",             // CSS class added to the element being displayed in the modal.
        closeButtonClass="",            // Add additional class(es) to the close <button> tag.
        showCloseButton= true,          // Shows a (X) icon/button in the top-right corner of the displayed element

        handleModalBeforeBlock=null,    // Fires just before the overlay (blocker) appears.
        handleModalBlock=null,          // Fires after the overlay (block) is visible.
        hanleModalBeforeOpen=null,      // Fires just before the modal opens.
        handleModalOpen=null,           // Fires after the modal has finished opening.

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

    const modal = useSelector(selectModal)
    const blockerStatus = modal.blocker.status
    const modalStatus = modal.modal.status
    const modalCanBeOpen = modal.modalCanBeOpen

    const handleFadingEffect = () => {
        const modal = document.getElementById(`${id}-${modalClass}`)
        const blocker = document.getElementById(id)
        modal.classList.remove('fadingIn');
        blocker.classList.remove('fadingIn');
        blocker.classList.add('fadingOut');
       
        setTimeout(function() {
          blocker.classList.remove('fadingOut');
        }, fadeDuration);
      }

    const closeModal = () => {
       // dispatch(setModalStatus('closeModalRequest'))
      //  handleModalBeforeClose()  //
        handleFadingEffect()
      //  dispatch(setModalStatus('modalIsClosing'))
        const timerCloseModal = setTimeout(function() {
            dispatch(setModalState())
            dispatch(setModalPermission(false))
            dispatch(setBlockerStatus("blockerIsClosed"))
            dispatch(setModalStatus("modalIsClosed"))
         //   handleModalAfterClose() //
            return clearTimeout(timerCloseModal)
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

    useEffect(() => {
        if (handleModalBeforeBlock) {
            handleModalBeforeBlock()
        }
        dispatch(setBlockerStatus('blockerIsOpening'))

        const timerBlocker = setTimeout(() => {
            dispatch(setBlockerStatus('blockerIsOpen'))
            if (handleModalBlock) {
                handleModalBlock()
            }

            return () => clearTimeout(timerBlocker)
        }, fadeDuration)

        const delayForOpeningModal = fadeDelay * fadeDuration

        const timerModal = setTimeout(() => {
            dispatch(setModalPermission(true))
            dispatch(setModalStatus('modalIsAboutToOpen'))

            return () => clearTimeout(timerModal)
        }, delayForOpeningModal)
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
            { modalCanBeOpen
            ? <ModalContentForImport
                id={id}
                children={children}
                clickClose={clickClose}
                closeText={closeText}
                modalClass={modalClass}
                closeButtonClass={closeButtonClass}
                showCloseButton={showCloseButton}
                fadeDuration={fadeDuration}
                closeModal={closeModal}
                handleModalBeforeOpen={hanleModalBeforeOpen}
                handleModalOpen={handleModalOpen}
            />
            : null
            }
        </div>
    )
}
export default ModalForImport