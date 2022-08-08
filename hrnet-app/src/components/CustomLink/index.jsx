import { Link } from 'react-router-dom'
import './CustomLink.css'

function CustomLink({ path, children }) {
    return (
        <Link
            to={path}
            className="link"
        >
            {children}
        </Link>
    )
}

export default CustomLink