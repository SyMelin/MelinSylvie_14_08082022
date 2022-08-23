import { useDispatch } from 'react-redux'
import { saveFilterValue, filterList, setTable } from '../../utils/features/employeeList'
import './TableFeatureFilter.css'

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
                        dispatch(filterList(e.target.value))
                        dispatch(saveFilterValue(e.target.value))
                        dispatch(setTable())
                    }}
                />
            </label>
        </div>
    )
}

export default TableFeatureFilter