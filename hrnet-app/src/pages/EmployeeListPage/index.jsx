import { useEffect } from 'react'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

import { employeeListData } from '../../mockedData'

function EmployeeListPage() {
    console.log(employeeListData)

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    return (
        <div>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <table id="employee-table" className="display"></table>
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </div>
    )
}

export default EmployeeListPage