import Logo from '../Logo'
import './Header.css'

function Header () {
    return (
        <header className="header">
            <Logo />
            <h1 className='title'>HRnet</h1>
            <span>Link</span>
        </header>
    )
}

export default Header