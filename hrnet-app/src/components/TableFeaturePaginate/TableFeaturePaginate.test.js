import TableFeaturePaginate from './'
import { render } from '../../utils/test'

describe('TableFeaturePaginate', () => {
    test('Should render without crashing', async () => {
        render (<TableFeaturePaginate />)
    })
})