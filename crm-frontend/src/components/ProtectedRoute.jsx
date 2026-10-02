import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProtectedRoute({children}){
    
    const token = localStorage.getItem("token");

    if(!token) return <Navigate to="/" replace />;

    return(
        <>
          <Navbar/>
          <div className="page">{children}</div>
        </>
    );
    
}
export default ProtectedRoute;