import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

function CustomerForm(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await api.post("/customers",{name,email,phone,company});
            navigate("/customers");
        }catch(err){
            console.error(err);
            setError("Failed to create Customer");
        }
    };

    return(
        <div>
           <h2>Add Customer</h2>
           <form onSubmit={handleSubmit}>
               <input placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
               <input placeholder="Enter Your Email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <input placeholder="Enter Phone Number" type="tel" maxLength={10} value={phone} onChange={(e) =>{setPhone(e.target.value)}}/>
               <input placeholder="Enter Company Name" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
               <button type="submit">Save</button>
           </form>
           {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    )
}
export default CustomerForm;