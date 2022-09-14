import LogoLink from '../LogoLink'
import Nav  from '../Nav'
import './Header.css'


/**
 * React component: Header
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
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