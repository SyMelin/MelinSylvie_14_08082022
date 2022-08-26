import { useDispatch } from 'react-redux'
import { setFormError, resetFormData, initFieldError } from '../../utils/features/createEmployeeForm'
import ModalForImport from '../ModalForImport'
import './Modal.css'


export function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}


function Modal() {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setFormError())
        dispatch(initFieldError())
        resetForm()
    }

    const modalContentChildren = <p>Employee Created!</p>
    
    return (
        <ModalForImport
            id="confirmation"
            children={modalContentChildren}
            //escapeClose={false}
            //clickClose={false}
            //closeText="Close Modal"
            blockerClass='modal'
            modalClass="modal-content"
            handleCloseModal={closeModal}
            closeButtonClass="modal-closeButton"
            // showCloseButton={false}
            fadeDuration={1000} //test with 1000
            fadeDelay={1.5} //test with 1.5
        />  
    )
}

export default Modal