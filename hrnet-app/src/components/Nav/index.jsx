import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink
                        to="/employee-list"
                        className={({ isActive }) => "nav-link nav-link" + (isActive ? "-active" : "-notActive")}>Employee List
                    </NavLink>
                </li>
            </ul>
        </nav> 
    )
}

export default Nav