import CreateEmployeePage from './'
import { render } from '../../utils/test'

describe('CreateEmployeePage', () => {
    test('Should render without crashing', async () => {
        render (<CreateEmployeePage />)
    })
})