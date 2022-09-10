import CustomLink from './'
import { render } from '../../utils/test'

describe('CustomLink', () => {
    test('Should render without crashing', async () => {
        render (<CustomLink />)
    })
})