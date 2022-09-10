import Table from './'
import { render } from '../../utils/test'

describe('Table', () => {
    test('Should render without crashing', async () => {
        render (<Table />)
    })
})