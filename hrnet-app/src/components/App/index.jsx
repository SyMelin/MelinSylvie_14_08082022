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
  const basename = process.env.NODE_ENV === 'production' ? '/MelinSylvie_14_08082022' : ''

  return (
    <div className="App">
      {/* HashRouter is used in development mode for performance testing purposes.
      In production, BrowserRouter should be used instead.*/}
      <Router basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployeePage />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App