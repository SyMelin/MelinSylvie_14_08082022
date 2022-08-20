import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { moveToPageIndex } from '../../utils/features/employeeList'
import './TableFeaturePaginate.css'


function TableFeaturePaginate() {

    const dispatch = useDispatch()
    const employeeTable = useSelector(selectEmployeeList).table

    return (
        <div className="table-features__paginate" id="employee-table__paginate">
            <button
                type='button'
                className="paginate__button previous disabled"
                aria-controls="employee-table"
                //  data-dt-idx="0"
                tabIndex="-1"
                id="employee-table__previous"
                onClick={() => {
                    if (employeeTable.indexOfCurrentPage - 1 >= 0) {
                        dispatch(moveToPageIndex(employeeTable.indexOfCurrentPage - 1))
                    }
                    return
                }}
            >
                Previous
            </button> 
            <span>
                {[...Array(employeeTable.nbOfPages)].map((e, index) => 
                    <button
                        type="button"
                        className={ index === employeeTable.indexOfCurrentPage ? "paginate__button current" : "paginate__button"}
                        aria-controls="employee-table"
                        // data-dt-idx={`${index + 1}`}
                        tabIndex="0"
                        onClick={() => {
                            dispatch(moveToPageIndex(index))
                        }}
                    >
                        {index + 1}
                    </button>
                )}
            </span>
            <button
                type='button'
                className="paginate__button next"
                aria-controls="employee-table"
                // data-dt-idx="3"
                tabIndex="0"
                id="employee-table__next"
                onClick={() => {
                    if (employeeTable.indexOfCurrentPage + 1 <= (employeeTable.nbOfPages - 1)) {
                        dispatch(moveToPageIndex(employeeTable.indexOfCurrentPage + 1))
                    }
                    return
                }}
            >
                Next
            </button>
        </div>
    )
}

export default TableFeaturePaginate