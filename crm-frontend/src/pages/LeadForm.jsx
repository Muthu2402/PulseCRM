// Name,ContactInfo,Source(drop down)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api"

function LeadForm(){
    const [name,setName] = useState("");
    const [contactInfo,setContactInfo] = useState("");
    const [source,setSource] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await api.post("/leads",{ name,contactInfo,source });
            navigate("/leads");
        }catch(err){
            console.error(err);
            setError("Failed to create Leads");
        }
    };

    return(
        <div>
           <h2>Add Lead</h2>
           <form onSubmit={handleSubmit}>
              <input placeholder="Enter Lead Name" value={name} onChange={(e) =>setName(e.target.value)}/>
              <input placeholder="Enter Contact Info" type="tel" maxLength={10} value={contactInfo} onChange={(e)=>setContactInfo(e.target.value)}/>
              <select value={source} onChange={(e)=>setSource(e.target.value)}>
                <option value="REFERRAL">Referral</option>
                <option value="ADS">Ads</option>
                <option value="WEB">Web</option>
              </select>
              <button type="submit">Save</button>
           </form>
           {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    )
}
export default LeadForm;