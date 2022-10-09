import logo from './logo.svg';
import './App.css';
import AdminDashboard from './admin/client/Dashboard';
import EmployeeDashboard from './employee/client/EmployeeDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
