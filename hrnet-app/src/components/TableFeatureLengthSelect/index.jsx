import { useDispatch } from 'react-redux'
import { initTable } from '../../utils/features/employeeList'
import './TableFeatureLengthSelect.css'

function TableFeatureLengthSelect() {

    const dispatch = useDispatch()

    return (
        <div className="table-features__lengthSelect" id="employee-table__length">
            <label>
                Show
                <select
                    id="employeeTable-lengthSelect"
                    name="employee-table_length"
                    aria-controls="employee-table"
                    className=""
                    onChange={(e) => dispatch(initTable(e.target.value))}
                >
                    {[10, 25, 50, 100].map((number, index) =>
                        <option
                            key={`employeeTableLength-option-${index}`}
                            value={number.toString()}
                        >
                            {number}
                        </option>
                    )}
                </select>
                entries
            </label>
        </div>
    )
}

export default TableFeatureLengthSelect