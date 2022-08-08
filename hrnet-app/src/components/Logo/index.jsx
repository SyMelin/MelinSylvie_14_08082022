import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './LogoLink.css'

function LogoLink () {
    return (
        <Link
            to="/"
            className='logo'
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