import TableTitleCell from '../TableTitleCell'
import TableBody from '../TableBody'
import './Table.css'
import { camelize } from '../../utils/utils'

function Table({ list }) {

    //list = employeList.slice(indexMin, indexMax)

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
            <TableBody />
        </table>
    )
}

export default Table