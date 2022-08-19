import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/features/modal'
import { setFormError } from '../../utils/features/createEmployeeForm'
import './Modal.css'

function Modal({ id, children }) {
    const dispatch = useDispatch()

    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
            dispatch(setModalState())
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        }
      }, [])
    
    return (
        <div id={id} className='modal'>
            <div className='modal-content'>
                <button
                    type='button'
                    className='modal-closeButton'
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(setModalState())
                        dispatch(setFormError())
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