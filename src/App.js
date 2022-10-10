import "./App.css";
import AdminDashboard from "./admin/client/Dashboard";
import EmployeeDashboard from "./employee/client/EmployeeDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Globalstate.js";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
