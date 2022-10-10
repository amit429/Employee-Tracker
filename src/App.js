import logo from './logo.svg';
import './App.css';
import AdminDashboard from './admin/client/Dashboard';
import EmployeeDashboard from './employee/client/EmployeeDashboard';
import Login from './common/Login';
import Landing from './common/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin-login" element={<Login title="Admin Login" />} />
          <Route path="/employee-login" element={<Login title="Employee Login" />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
