function ModalButtonForImport({ clickClose, closeText, closeButtonClass, closeModal }) {
    return (
        <button
            type='button'
            className={`close-modal ${closeButtonClass}`}
            onClick={clickClose ? null : closeModal}
        >
            {closeText}
        </button>
    )
}

export default ModalButtonForImport