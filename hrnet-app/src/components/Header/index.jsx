import LogoLink from '../LogoLink'
import Nav  from '../Nav'
import './Header.css'

function Header () {
    return (
        <header className="header">
            <div className='box'>
                <LogoLink />
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