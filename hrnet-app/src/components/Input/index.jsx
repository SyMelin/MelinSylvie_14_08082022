import './Input.css'

function Input ({ htmlFor, children, id, type }) {
     return (
        <div className="input-wrapper">
            <label htmlFor={htmlFor}>{children}</label>
            <input id={id} type={type} />
        </div>
     )
}

export default Input