import CreateEmployeeForm from './'
import { render } from '../../utils/test'

describe('CreateEmployeeForm', () => {
    test('Should render without crashing', async () => {
        render (<CreateEmployeeForm />)
    })
})