import Nav from './'
import { render } from '../../utils/test'

describe('Nav', () => {
    test('Should render without crashing', async () => {
        render (<Nav />)
    })
})