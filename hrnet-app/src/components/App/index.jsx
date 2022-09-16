import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import CreateEmployeePage from '../../pages/CreateEmployeePage'
import EmployeeListPage from '../../pages/EmployeeListPage'


/**
 * React component: App
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<CreateEmployeePage />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App