import { useDispatch } from 'react-redux'
import * as createEmployeeFormActions from '../../utils/features/createEmployeeForm'
import Modal from '@symelin/react-component-library/Modal'
import './ModalWrapper.css'


export function resetForm() {
    const form = document.getElementById('create-employee')
    const formInputs = Array.from(form.getElementsByTagName('input'))
    const formSelects = Array.from(form.getElementsByTagName('select'))
    const formFields =  formInputs.concat(formSelects)
    formFields.map((field) => document.getElementById(field.id).value = '')
}

/**
 * React component: ModalWrapper
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function ModalWrapper() {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(createEmployeeFormActions.setFormError())
        dispatch(createEmployeeFormActions.initFieldError())
        resetForm()
        dispatch(createEmployeeFormActions.reset())
        console.log('function closeModal() handles ModalClose')
    }

    const modalContentChildren = <p>Employee Created!</p>
    
    return (
        <div className="modalWrapper" data-testid="modalWrapper">
            <Modal
                id="confirmation"
                children={modalContentChildren}
                //escapeClose={false}
                //clickClose={false}
                //closeText="Close Modal"
                blockerClass='modal'
                modalClass="modal-content"
                closeButtonClass="modal-closeButton"
                //showCloseButton={false}
                handleModalBeforeClose={() => {console.log('handleModalBeforeClose')}}
                handleModalClose={closeModal}
                handleModalAfterClose={() => {console.log('handleModalAfterClose')}}
                handleModalBeforeBlock={() => {console.log('handleModalBeforeBlock')}}
                handleModalBlock={() => {console.log('handleModalBlock')}}
                hanleModalBeforeOpen={() => {console.log('handleModalBeforeOpen')}}
                handleModalOpen={() => {console.log('handleModalOpen')}}
                //fadeDuration={6000} //test with 6000
                //fadeDelay={0.5} //test with 0.5
            />  
        </div>   
    )
}

export default ModalWrapper