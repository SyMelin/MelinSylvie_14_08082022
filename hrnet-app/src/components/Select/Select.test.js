import Select from './'
import { render } from '../../utils/test'

describe('Select', () => {
    test('Should render without crashing', async () => {
        render (<Select />)
    })
})