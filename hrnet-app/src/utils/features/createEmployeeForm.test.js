import * as createEmployeeFormActions from './createEmployeeForm'

describe('CreateEmployeeForm actions', () => {
    it('should create a checkFormValidity action object', () => {
        expect(createEmployeeFormActions.checkFormValidity()).toEqual({
            type: 'createEmployeeForm/checkFormValidity',
        })
    })
})