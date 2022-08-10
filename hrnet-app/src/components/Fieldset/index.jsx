import Input from '../Input'
import Select from '../Select'
import { SelectOption } from '../../models/SelectOption.js'
import { states } from '../../utils/constantes/stateSelectOptionsList.js'
import './Fieldset.css'

function Fieldset({ fieldsetInputs }) {
    const newStates = []
    states.forEach((state) => {
        newStates.push(new SelectOption(state.name, state.abbreviation))
    })
    return (
        <fieldset className="address">
            <legend>Address</legend>

            {fieldsetInputs.map((input, index) =>
                <Input
                    key={`fieldsetInput-${index}`}
                    id={input.id}
                    children={input.children}
                    type={input.type}
                />)}
            <Select
                key={`state-select`}
                id="state"
                children="State"
                name="State"
                optionsList={newStates}
            />
            <Input
                key="numberInput"
                id="zip-code"
                children="Zip Code"
                type="number"
            />
        </fieldset>
    )
}

export default Fieldset