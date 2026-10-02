import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api.js";
import Logo from "../components/Logo"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault(); // After submit, prevent from html forms reload
        try{
            // base URL set by api.js. Just write "/login" only
            const response = await api.post("/login",{email,password});
            localStorage.setItem("token",response.data.token); //Interceptor read tokens and store in browser storage.
            navigate("/dashboard");
        }catch(err){
            console.log(err);
            setError("Invalid Email and Password");
        }
    };

    return (
        
    <div className="auth-screen">
        <div className="auth-brand">
            <Logo />
            <p>Track every lead, task, and deal in one place.</p>
        </div>
        <div className="auth">
            <h2>Sign in</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign In</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    </div>
);
    
}
export default Login