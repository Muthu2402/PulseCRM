import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import CustomerList from "./pages/CustomerList"
import ProtectedRoute from "./components/ProtectedRoute"
import LeadList from "./pages/LeadList"
import TaskList from "./pages/TaskList"
import SaleList from "./pages/SaleList"
import CustomerForm from "./pages/CustomerForm"
import LeadForm from "./pages/LeadForm"
import TaskForm from "./pages/TaskForm"
import SaleForm from "./pages/SaleForm"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/customers" element={<ProtectedRoute><CustomerList/></ProtectedRoute>}/>
        <Route path="/leads" element={<ProtectedRoute><LeadList/></ProtectedRoute>}/>
        <Route path="/tasks" element={<ProtectedRoute><TaskList/></ProtectedRoute>}/>
        <Route path="/sales" element={<ProtectedRoute><SaleList/></ProtectedRoute>}/>
        <Route path="/customers/new" element={<ProtectedRoute><CustomerForm/></ProtectedRoute>}/>
        <Route path="/leads/new" element={<ProtectedRoute><LeadForm/></ProtectedRoute>}/>
        <Route path="/tasks/new" element={<ProtectedRoute><TaskForm/></ProtectedRoute>}/>
        <Route path="/sales/new" element={<ProtectedRoute><SaleForm/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
