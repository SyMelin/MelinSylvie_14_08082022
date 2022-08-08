import Logo from '../Logo'
import Nav  from '../Nav'
import './Header.css'

function Header () {
    return (
        <header className="header">
            <div className='box'>
                <Logo />
            </div>
            <div className='box'>
                <h1 className='title'>HRnet</h1>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}

export default Header