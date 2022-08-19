import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmployeeList } from '../../utils/selectors'
import { calculateNbOfTablePages, setIndexOfEmployeeInListMin, setIndexOfEmployeeInListMax, orderEmployeeByTableTitles } from '../../utils/features/employeeList'
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
        dispatch(setIndexOfEmployeeInListMin())
        dispatch(setIndexOfEmployeeInListMax())

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
                            Showing { 1 + employeeTable.indexOfEmployeeInListMin } to { 1 + employeeTable.indexOfEmployeeInListMax } of {employeeList.length} entries
                        </div>
                        <div class="dataTables_paginate paging_simple_numbers" id="employee-table_paginate">
                            <a class="paginate_button previous disabled" aria-controls="employee-table" data-dt-idx="0" tabindex="-1" id="employee-table_previous">
                                Previous
                            </a>
                            <span>
                                <a class="paginate_button current" aria-controls="employee-table" data-dt-idx="1" tabindex="0">
                                    1
                                </a>
                                <a class="paginate_button " aria-controls="employee-table" data-dt-idx="2" tabindex="0">
                                    2
                                </a>
                            </span>
                            <a class="paginate_button next" aria-controls="employee-table" data-dt-idx="3" tabindex="0" id="employee-table_next">
                                Next
                            </a>
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