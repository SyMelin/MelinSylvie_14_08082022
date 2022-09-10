import SortButton from './'
import { render } from '../../utils/test'

describe('SortButton', () => {
    test('Should render without crashing', async () => {
        render (<SortButton />)
    })
})