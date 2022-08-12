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
                        <th key={`columnTitle-${index}`} className='table-columnTitle'>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {list.map((employee, index) => (
                    <tr>
                        {Object.values(employee).map((value, index) => {
                            return <td>{value}</td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table