import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsEmployeeOrdered } from '../../utils/features/employeeList'
import './CustomLink.css'

function CustomLink({ path, children }) {

    const dispatch = useDispatch()
    
    return (
        <Link
            to={path}
            className="link"
            onClick={ path === '/' ? ()=> {dispatch(setIsEmployeeOrdered())} : null }
        >
            {children}
        </Link>
    )
}

export default CustomLink