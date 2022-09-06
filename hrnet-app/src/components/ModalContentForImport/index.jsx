import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalState, setBlockerStatus, setModalStatus } from '../../utils/features/modal'
import { selectModal } from '../../utils/selectors'
import ModalButtonForImport from "../ModalButtonForImport"

function ModalContentForImport({
        id,
        children,
        clickClose,
        closeText,
        modalClass,
        closeButtonClass,
        showCloseButton,
        fadeDuration,
        fadeDelay,
        handleModalBeforeOpen,
        handleModalOpen,
        closeModal
    }) {

        const dispatch = useDispatch()

        useEffect(() => {
            if (handleModalBeforeOpen) {
                handleModalBeforeOpen()
            }
           // dispatch(setModalStatus('modalIsOpening'))
            
            const timerModal = setTimeout(() => {
                dispatch(setModalStatus('modalIsOpen'))
                if (handleModalOpen) {
                handleModalOpen()
                }
                return () => clearTimeout(timerModal)
             }, fadeDuration)
        }, [])
        
        



    return (
        <div
            id={`${id}-${modalClass}`}
            className={`${modalClass} fadingIn`}
        >
            
            {showCloseButton
                ? <ModalButtonForImport
                    clickClose={clickClose}
                    closeText={closeText}
                    closeButtonClass={closeButtonClass}
                    closeModal={closeModal}
                />
                : null
            }  
            {children}
        </div>
    )
}
export default ModalContentForImport

/*
<style>
    {`
        @keyframes modalFadeIn {
            0% { opacity: 0; }
            ${fadeDelay / (1 + fadeDelay) * 100}% { opacity: 0; }
            100% { opacity: 1; }
        }
    `}
</style>
*/