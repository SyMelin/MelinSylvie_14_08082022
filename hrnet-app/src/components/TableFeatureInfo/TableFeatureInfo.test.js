import TableFeatureInfo from './'
import { render } from '../../utils/test'

describe('TableFeatureInfo', () => {
    test('Should render without crashing', async () => {
        render (<TableFeatureInfo />)
    })
})