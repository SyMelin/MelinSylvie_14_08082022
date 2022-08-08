import Input from '../Input'
import './Fieldset.css'

function Fieldset({ fieldsetInputs }) {
    return (
        <fieldset class="address">
                <legend>Address</legend>

                {fieldsetInputs.map((input, index) =>
                    <Input
                        key={`fieldsetInput-${index}`}
                        htmlFor={input.htmlFor}
                        children={input.children}
                        id={input.id}
                        type={input.type}
                    />)}

                <label for="state">State</label>
                <select name="state" id="state"></select>

                <label for="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>
    )
}

export default Fieldset