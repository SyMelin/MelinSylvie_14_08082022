import { useDispatch } from 'react-redux'
import * as employeeListActions from '../../utils/features/employeeList'
import './TableFeatureFilter.css'


/**
 * React component: TableFeatureFilter
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function TableFeatureFilter() {

    const dispatch = useDispatch()

    return (
        <div className="table-features__filter" id="employee-table__filter">
            <label>
                Search:
                <input
                    type="search"
                    className=""
                    placeholder=""
                    aria-controls="employee-table"
                    onChange={(e) => {
                        dispatch(employeeListActions.filterList(e.target.value))
                        dispatch(employeeListActions.saveFilterValue(e.target.value))
                        dispatch(employeeListActions.setTable())
                    }}
                />
            </label>
        </div>
    )
}

export default TableFeatureFilter