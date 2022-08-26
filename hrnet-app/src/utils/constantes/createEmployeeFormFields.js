import { SelectOption } from '../../models/SelectOption.js'
import { states } from './stateSelectOptionsList.js'
import { departments } from './departmentSelectOptionsList'


const newStates = []
states.forEach((state) => {
    newStates.push(new SelectOption(state.name, state.abbreviation))
})

const textPattern = `^\\b([A-ZÀ-Ÿ][-,a-zà-ÿ. ']+[ ]*)+$`
//const datePattern = "\\d[0-1][0-2]{2}-\\d[0-3][0-9]{2}-\\d{4}"

export const createEmployeeFormFields = [
    { input: {
        id: 'first-name',
        children: 'First Name',
        type: 'text',
        min: 2,
        max: 100,
        pattern: textPattern,
        errorMessage: 'Enter 2 characters at least, the first one being an uppercase letter'
    }},
    { input: {
        id: 'last-name',
        children: 'Last Name',
        type: 'text',
        pattern: textPattern,
        errorMessage: 'Enter 2 characters at least, the first one being an uppercase letter'
    }},
    { input: {
        id: 'date-of-birth',
        children: 'Date of Birth',
        type: 'date',
      //  placeholder: 'mm/dd/yyyyy',
       // pattern: datePattern,
        min: '1900-01-01',
        max: '2100-12-31',
        errorMessage: 'Enter a year between 1900 and 2100',
    }},
    { input: {
        id: 'start-date',
        children: 'Start Date',
        type: 'date',
      //  placeholder: 'mm/dd/yyyyy',
      //  pattern: datePattern,
        min: "1900-01-01",
        max: "2100-12-31",
        errorMessage: 'Enter a year between 1900 and 2100',
    }},
    { fieldset: [
        { input: {
            id: 'street',
            children: 'Street',
            type: 'text',
            errorMessage: 'Fill the field with a correct address'
        }},
        { input: {
            id: 'city',
            children: 'City',
            type: 'text',
            errorMessage: 'Fill the field with a correct city'
        }},
        { select: {
            id: 'state',
            children: 'State',
            name: 'State',
            optionsList: newStates,
            errorMessage: 'Select a state',
        }},
        { input: {
            id: 'zip-code',
            children: 'Zip Code',
            type: 'number',
            min: '0',
            max: '99950',
            errorMessage: 'Enter a year between 0 and 99950',
        }},
    ]},
    { select: {
        id: 'department',
        children: 'Department',
        name: 'department',
        optionsList: departments,
        errorMessage: 'Select a department',
    }},
]