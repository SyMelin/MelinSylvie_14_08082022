import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import * as employeeListActions from '../../utils/features/employeeList'
import './TableFeaturePaginate.css'


/**
 * React component: TableFeaturePaginate
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function TableFeaturePaginate() {

    const dispatch = useDispatch()
    const employeeTable = useSelector(selectEmployeeList).table

    return (
        <div className="table-features__paginate" id="employee-table__paginate">
            <button
                key='button-paginate-previous'
                type='button'
                className="paginate__button previous disabled"
                aria-controls="employee-table"
                tabIndex="-1"
                id="employee-table__previous"
                onClick={() => {
                    if (employeeTable.indexOfCurrentPage - 1 >= 0) {
                        dispatch(employeeListActions.moveToPageIndex(employeeTable.indexOfCurrentPage - 1))
                    }
                    return
                }}
            >
                Previous
            </button> 
            <span>
                {[...Array(employeeTable.nbOfPages)].map((e, index) => 
                    <button
                        key={`button-paginate-number-${index + 1}`}
                        type="button"
                        className={ index === employeeTable.indexOfCurrentPage ? "paginate__button current" : "paginate__button"}
                        aria-controls="employee-table"
                        tabIndex="0"
                        onClick={() => {
                            dispatch(employeeListActions.moveToPageIndex(index))
                        }}
                    >
                        {index + 1}
                    </button>
                )}
            </span>
            <button
                key='button-paginate-next'
                type='button'
                className="paginate__button next"
                aria-controls="employee-table"
                tabIndex="0"
                id="employee-table__next"
                onClick={() => {
                    if (employeeTable.indexOfCurrentPage + 1 <= (employeeTable.nbOfPages - 1)) {
                        dispatch(employeeListActions.moveToPageIndex(employeeTable.indexOfCurrentPage + 1))
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