export class SelectOption {
    /**
     * Create an option for a select input.
     * @param { String } name - The text to be display as option's text
     * @param { String } value - Value of the option
     */
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
}