import './Table.css'

function Table({ list }) {
   // console.log(list)

    const columnTitles = [
        'First Name',
        'Last Name',
        'Start Date',
        'Department',
        'Date of Birth',
        'Street',
        'City',
        'State',
        'Zip Code',
    ]


    return (
        <table id="employee-table" className="display">
            <thead>
                <tr>
                    {columnTitles.map((title, index) => (
                        <th key={`titleColumn-${index}`} className='table-titleColumn'>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {list.map((employee, index) => {
                    const rowIndex = index
                    return <tr key={`tableRow-${index}`}>
                        {Object.values(employee).map((value, index) => {
                            return <td key={`rowIndex-${rowIndex}-rowCell-${index}`}>{value}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table