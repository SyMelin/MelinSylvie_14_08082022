import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { calculateNbOfTablePages, setFirstIndexToSlice, setLastIndexToSlice, setIndexOfCurrentPage, orderEmployeeByTableTitles } from '../../utils/features/employeeList'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'


export const orderOfTableTitles = [
    'firstName',
    'lastName',
    'startDate',
    'department',
    'dateOfBirth',
    'street',
    'city',
    'state',
    'zipCode',
]

function EmployeeListPage() {

    const dispatch = useDispatch()
    const isEmployeeOrdered = useSelector(selectEmployeeList).isEmployeeOrdered

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    useEffect (() => {
        dispatch(calculateNbOfTablePages())
        dispatch(setFirstIndexToSlice())
        dispatch(setLastIndexToSlice())

        if (!isEmployeeOrdered) {
            dispatch(orderEmployeeByTableTitles())
        }
        return
    }, [])
   
    const employeeList = useSelector(selectEmployeeList).list
    const employeeTable = useSelector(selectEmployeeList).table

    return (
        <div>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <div id="employee-table_wrapper" class="dataTables_wrapper">
                    <div class="dataTables_additionalFeatures">
                        <div class="dataTables_length" id="employee-table_length">
                            <label>
                                Show
                                <select name="employee-table_length" aria-controls="employee-table" class="">
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
                        <div id="employee-table_filter" class="dataTables_filter">
                            <label>
                                Search:
                                <input type="search" class="" placeholder="" aria-controls="employee-table"/>
                            </label>
                        </div>
                    </div>
                    
                    <Table list={employeeList} />

                    <div class="dataTables_additionalFeatures">
                        <div class="dataTables_info" id="employee-table_info" role="status" aria-live="polite">
                            Showing { 1 + employeeTable.firstIndexToSlice } to { 1 + employeeTable.lastIndexToSlice } of {employeeList.length} entries
                        </div>
                        <div class="dataTables_paginate paging_simple_numbers" id="employee-table_paginate">
                            <button
                                type='button'
                                class="paginate_button previous disabled"
                                aria-controls="employee-table"
                                data-dt-idx="0"
                                tabindex="-1"
                                id="employee-table_previous"
                                onClick={() => {
                                    if (employeeTable.indexOfCurrentPage - 1 >= 0) {
                                        dispatch(setIndexOfCurrentPage(employeeTable.indexOfCurrentPage - 1))
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
                                        class={ index === employeeTable.indexOfCurrentPage ? "paginate_button current" : "paginate_button"}
                                        aria-controls="employee-table"
                                        data-dt-idx={`${index + 1}`}
                                        tabindex="0"
                                        onClick={() => {
                                            dispatch(setIndexOfCurrentPage(index))
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                )}
                            </span>
                            <button
                                type='button'
                                class="paginate_button next"
                                aria-controls="employee-table"
                                data-dt-idx="3"
                                tabindex="0"
                                id="employee-table_next"
                                onClick={() => {
                                    if (employeeTable.indexOfCurrentPage + 1 <= (employeeTable.nbOfPages - 1)) {
                                        dispatch(setIndexOfCurrentPage(employeeTable.indexOfCurrentPage + 1))
                                    }
                                    return
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </div>
    )
}

export default EmployeeListPage