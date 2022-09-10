import CreateEmployeeButton from './'
import { render } from '../../utils/test'

describe('CreateEmployeeButton', () => {
    test('Should render without crashing', async () => {
        render (<CreateEmployeeButton />)
    })
})