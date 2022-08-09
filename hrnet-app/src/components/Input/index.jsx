import './Input.css'

function Input ({ id, children, type }) {
     return (
        <div className="input-wrapper">
            <label htmlFor={id}>{children}</label>
            <input id={id} type={type} />
        </div>
     )
}

export default Input