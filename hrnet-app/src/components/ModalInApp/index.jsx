import { useDispatch } from 'react-redux'
import { setFormError, initFieldError, reset } from '../../utils/features/createEmployeeForm'
import ModalForImport from '../ModalForImport'
import Modal from '@symelin/react-component-library/Modal'
import './ModalInApp.css'


export function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}

export function whatsinvalue() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const un = formInputs.map(el => el.value)
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const deux = formSelects.map(el => el.value)
    const formFields =  un.concat(deux)
    console.log('whatsinvalue', formFields)
}


function ModalInApp() {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setFormError())
        dispatch(initFieldError())
        resetForm()
        dispatch(reset())
        //whatsinvalue()
        console.log('function closeModal()')
    }

    const modalContentChildren = <p>Employee Created!</p>
    
    return (
        <div className="modalInApp">
            <ModalForImport
                id="confirmation"
                children={modalContentChildren}
                //escapeClose={false}
                //clickClose={false}
                //closeText="Close Modal"
                blockerClass='modal'
                modalClass="modal-content"
                handleModalBeforeClose={() => {console.log('doSomethingBeforeRequestToClose()')}}
                handleModalClose={closeModal}
                handleModalAfterClose={() => {console.log('doSomethingWhenModalIsClosed()')}}
                closeButtonClass="modal-closeButton"
                // showCloseButton={false}
                fadeDuration={1000} //test with 1000
                fadeDelay={1.5} //test with 1.5
            />  
        </div>
        
    )
}

export default ModalInApp

/*
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

*/