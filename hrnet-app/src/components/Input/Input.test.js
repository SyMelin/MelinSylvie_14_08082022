import Input from './'
import { render } from '../../utils/test'

describe('Input', () => {
    test('Should render without crashing', async () => {
        render (<Input />)
    })
})