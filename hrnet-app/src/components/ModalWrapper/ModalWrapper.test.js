import ModalWrapper from './'
import { render } from '../../utils/test'

describe('ModalWrapper', () => {
    test('Should render without crashing', async () => {
        render (<ModalWrapper />)
    })
})