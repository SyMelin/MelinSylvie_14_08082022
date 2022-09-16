import { useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import TableBodyRow from '../TableBodyRow'


/**
 * React component: TableBody
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function TableBody () {

    const employeeList = useSelector(selectEmployeeList).listToDisplay
    console.log('listInTableBody', employeeList)
    const employeeTable = useSelector(selectEmployeeList).table
    const indexOfCurrentPage = employeeTable.indexOfCurrentPage    
    const firstIndex = employeeTable.firstIndexToSlice
    const length = employeeTable['length']

    const list = employeeList.slice(firstIndex, length * (indexOfCurrentPage + 1))
    
    return (
        <tbody className='table-body'>
            {list.map((employee, index) => (
                <TableBodyRow
                    key={`tableBodyRow-${index}`}
                    rowIndex={index}
                    employee={employee}
                />
            ))}
        </tbody>
    )
}

export default TableBody