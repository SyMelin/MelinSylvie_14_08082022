import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/employee-list" className='nav-link'>Employee List</NavLink></li>
            </ul>
        </nav> 
    )
}

export default Nav