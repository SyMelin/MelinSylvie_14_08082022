import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as employeeListActions from '../../utils/features/employeeList'
import logo from '../../assets/logo.png'
import './LogoLink.css'

function LogoLink () {

    const dispatch = useDispatch()

    return (
        <Link
            to="/"
            className='logo'
            onClick={() => {
                dispatch(employeeListActions.setIsEmployeeOrdered())
                dispatch(employeeListActions.setListToDisplay())
                dispatch(employeeListActions.setListNotDisplayed())
            }}
        >
            <img className="logo-image" src={logo} alt="Wealth Health" />
            <p className='logo-text'>
                <span className='logo-firstLetter'>W</span><span className='logo-textRest'>EALTH </span>
                <span className='logo-firstLetter'>H</span><span className='logo-textRest'>EALTH</span>
            </p>
        </Link>
    )
}

export default LogoLink