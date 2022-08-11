import { useEffect } from 'react'
import Table from '../../components/Table'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

import { employeeListData } from '../../mockedData'

function EmployeeListPage() {
    //console.log(employeeListData)

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    return (
        <div>
            <section className="container">
                <h2 className="title">Current Employees</h2>
                <Table list={employeeListData} />
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </div>
    )
}

export default EmployeeListPage