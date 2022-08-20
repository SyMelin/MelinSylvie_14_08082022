import './TableFeatureFilter.css'

function TableFeatureFilter() {
    return (
        <div className="table-features__filter" id="employee-table__filter">
            <label>
                Search:
                <input
                    type="search"
                    className=""
                    placeholder=""
                    aria-controls="employee-table"
                />
            </label>
        </div>
    )
}

export default TableFeatureFilter