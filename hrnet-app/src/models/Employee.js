export class Employee {
    /**
     * Create an object 'employee' for a table row.
     * @param { String } employee - The data object received from the dataForm
     */
    constructor (employee) {
        this.firstName = employee['firstName'];
        this.lastName = employee['lastName'];
        this.startDate = employee['startDate'];
        this.department = employee['department'];
        this.dateOfBirth = employee['dateOfBirth'];
        this.street = employee['street'];
        this.city = employee['city'];
        this.state = employee['state'];
        this.zipCode = employee['zipCode']
    }
}