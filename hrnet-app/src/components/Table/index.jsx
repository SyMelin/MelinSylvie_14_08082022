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
        <table id="employee-table" className="table display">
            <thead className='table-header'>
                <tr className='table-title'>
                    {columnTitles.map((title, index) => (
                        <th key={`titleColumn-${index}`} className='table-titleColumn'>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='table-body'>
                {list.map((employee, index) => {
                    const rowIndex = index
                    return <tr key={`tableRow-${index}`} className={Number.isInteger(index / 2) ? 'table-row table-row--evenIndex': 'table-row table-row--oddIndex'}>
                        {Object.values(employee).map((value, index) => {
                            return <td key={`rowIndex-${rowIndex}-rowCell-${index}`} className="table-cell">{value}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table