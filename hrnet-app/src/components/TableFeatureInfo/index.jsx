import { useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import './TableFeatureInfo.css'


/**
 * React component: TableFeatureInfo
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function TableFeatureInfo() {

    const employeeList = useSelector(selectEmployeeList).list
    const employeeTable = useSelector(selectEmployeeList).table

    return (
        <div
            className="table-features__info"
            id="employee-table__info"
            role="status"
            aria-live="polite"
        >
            Showing { 1 + employeeTable.firstIndexToSlice } to { 1 + employeeTable.lastIndexToSlice } of {employeeList.length} entries
        </div>
    )
}

export default TableFeatureInfo