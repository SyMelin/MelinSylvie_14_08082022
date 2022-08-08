import { useEffect } from 'react'
import CustomLink from '../../components/CustomLink'
import './EmployeeListPage.css'

function EmployeeListPage() {

    useEffect(() => {
        document.title = 'HRnet - Employee List'
    })

    return (
        <div>
            <section class="container">
                <h2 className="title">Current Employees</h2>
                <table id="employee-table" class="display"></table>
                <CustomLink
                    path='/'
                    children='Home'
                />
            </section>    
        </div>
    )
}

export default EmployeeListPage