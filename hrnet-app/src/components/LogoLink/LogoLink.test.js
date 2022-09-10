import LogoLink from './'
import { render } from '../../utils/test'

describe('LogoLink', () => {
    test('Should render without crashing', async () => {
        render (<LogoLink />)
    })
})