import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo"

function Navbar(){
    const navigate = useNavigate();

    const handleSignOut = () =>{
        localStorage.removeItem("token");
        navigate("/");
    };

    return(
        <div className="topbar">
            <Logo/>
            <nav>
               <NavLink to="/dashboard">Dashboard</NavLink>
               <NavLink to="/customers">Customers</NavLink>
               <NavLink to="/leads">Leads</NavLink>
               <NavLink to="/tasks">Tasks</NavLink>
               <NavLink to="/sales">Sales</NavLink>
            </nav>
            <button className="quiet" onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}
export default Navbar;