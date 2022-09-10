import Header from './'
import { render } from '../../utils/test'

describe('Header', () => {
    test('Should render without crashing', async () => {
        render (<Header />)
    })
})