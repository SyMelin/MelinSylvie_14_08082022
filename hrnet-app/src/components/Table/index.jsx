
import TableTitleCell from '../TableTitleCell'
import './Table.css'
import { camelize } from '../../utils/utils'

function Table({ list }) {
   // console.log(list)

    const columnTitles = [
        {
            title: 'First Name',
            type: 'letterString',
        },
        {
            title: 'Last Name',
            type: 'letterString',
        },
        {
            title: 'Start Date',
            type: 'date',
        },
        {
            title: 'Department',
            type: 'letterString',
        },
        {
            title: 'Date of Birth',
            type: 'date'
        },
        {
            title: 'Street',
            type: 'letterString',
        },
        {   
            title: 'City',
            type: 'letterString',
        },
        {
            title: 'State',
            type: 'letterString',
        },
        {
            title: 'Zip Code',
            type: 'number',
        },
    ]

    return (
        <table id="employee-table" className="table display">
            <thead className='table-header'>
                <tr className='table-title'>
                    {columnTitles.map((obj, index) => (
                        <TableTitleCell
                            key={`titleColumn-${index}`}
                            title={obj.title}
                            type={obj.type}
                        />
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