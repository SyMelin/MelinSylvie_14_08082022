import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsEmployeeOrdered, setListToDisplay, setListNotDisplayed } from '../../utils/features/employeeList'
import './CustomLink.css'

function CustomLink({ path, children }) {

    const dispatch = useDispatch()
    
    return (
        <Link
            to={path}
            className="link"
            onClick={ path === '/'
                ? ()=> {
                    dispatch(setIsEmployeeOrdered())
                    dispatch(setListToDisplay())
                    dispatch(setListNotDisplayed())
                }
                : null
            }
        >
            {children}
        </Link>
    )
}

export default CustomLink