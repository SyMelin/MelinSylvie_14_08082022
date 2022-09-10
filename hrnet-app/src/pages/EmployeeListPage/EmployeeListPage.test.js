import EmployeeListPage from './'
import { render } from '../../utils/test'

describe('EmployeeListPage', () => {
    test('Should render without crashing', async () => {
        render (<EmployeeListPage />)
    })
})