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
        handleModalBeforeOpen,
        handleModalOpen,
        closeModal
    }) {

    const dispatch = useDispatch()

    useEffect(() => {
        if (handleModalBeforeOpen) {
            handleModalBeforeOpen()
        }
        dispatch(setModalStatus('modalIsOpening'))
        
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