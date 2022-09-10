import ModalForImport from './'
import { render } from '../../utils/test'

describe('ModalForImport', () => {
    test('Should render without crashing', async () => {
        render (<ModalForImport />)
    })
})