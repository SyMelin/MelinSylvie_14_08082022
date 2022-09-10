import FormField from './'
import { render } from '../../utils/test'

describe('FormField', () => {
    test('Should render without crashing', async () => {
        render (<FormField />)
    })
})