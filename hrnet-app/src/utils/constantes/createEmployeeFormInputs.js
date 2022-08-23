const textPattern = `^\\b([A-ZÀ-Ÿ][-,a-zà-ÿ. ']+[ ]*)+$`
//const datePattern = "\\d[0-1][0-2]{2}-\\d[0-3][0-9]{2}-\\d{4}"

export const createEmployeeFormInputs = [
    {
        id: 'first-name',
        children: 'First Name',
        type: 'text',
        min: 2,
        max: 100,
        pattern: textPattern,
        errorMessage: 'Enter 2 characters at least, the first one being an uppercase letter'
    },
    {
        id: 'last-name',
        children: 'Last Name',
        type: 'text',
        pattern: textPattern,
        errorMessage: 'Enter 2 characters at least, the first one being an uppercase letter'
    },
    {
        id: 'date-of-birth',
        children: 'Date of Birth',
        type: 'date',
      //  placeholder: 'mm/dd/yyyyy',
       // pattern: datePattern,
        min: '1900-01-01',
        max: '2100-12-31',
        errorMessage: 'Enter a year between 1900 and 2100',
    },
    {
        id: 'start-date',
        children: 'Start Date',
        type: 'date',
      //  placeholder: 'mm/dd/yyyyy',
      //  pattern: datePattern,
        min: "1900-01-01",
        max: "2100-12-31",
        errorMessage: 'Enter a year between 1900 and 2100',
    },   
]