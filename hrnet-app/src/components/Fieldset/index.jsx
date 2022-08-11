import Input from '../Input'
import Select from '../Select'
import { SelectOption } from '../../models/SelectOption.js'
import { states } from '../../utils/constantes/stateSelectOptionsList.js'
import './Fieldset.css'

function Fieldset({ fieldsetInputs }) {

    const ZipCodeInput = {
        id: 'zip-code',
        children: 'Zip Code',
        type: 'number',
        min: '0',
        max: '99950',
    }

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
                    input={input}
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
                input={ZipCodeInput}
            />
        </fieldset>
    )
}

export default Fieldset