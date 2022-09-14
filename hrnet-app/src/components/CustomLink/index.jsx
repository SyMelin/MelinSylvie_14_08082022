import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as employeeListActions from '../../utils/features/employeeList'
import './CustomLink.css'


/**
 * CustomLink properties
 * 
 * @typedef { Object } CustomLinkProps
 * @prop { String } path
 * @prop { String } children - text to display
 */
/**
 * React component: EditNameFormButton
 * 
 * @type { React.FC<CustomLinkProps> }
 * @returns { React.ReactElement }
 */
function CustomLink({ path, children }) {

    const dispatch = useDispatch()
    
    return (
        <Link
            to={path}
            className="link"
            onClick={ path === '/'
                ? ()=> {
                    dispatch(employeeListActions.setIsEmployeeOrdered())
                    dispatch(employeeListActions.setListToDisplay())
                    dispatch(employeeListActions.setListNotDisplayed())
                }
                : null
            }
        >
            {children}
        </Link>
    )
}

CustomLink.propTypes = {
    path: PropTypes.string.isRequired,
    /** Text to display */
    children: PropTypes.string.isRequired
}

export default CustomLink