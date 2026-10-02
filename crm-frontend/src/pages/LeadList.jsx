import { useEffect, useState } from "react";
import api from "../service/api" 

function LeadList(){
    const [leads,setLeads] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
       fetchLeads();
    },[]);

     const fetchLeads = async()=>{
        try{
            const response = await api.get("/leads");
            setLeads(response.data);
        }catch(err){
            console.error(err);
            setError("Failed to Load Leads");
        }
        finally{
            setLoading(false);
        }
       };

       const handleDelete = async(id) =>{
           const confirmDelete = window.confirm("Are You Sure you Want to Delete this Lead?");
           if(!confirmDelete) return;

           try{
            await api.delete(`/leads/${id}`);
            setLeads(leads.filter((lead)=> lead.id !== id));
           }catch(err){
             console.error(err);
             alert("Failed to delete lead");
           }
       };

    if(loading) return <p>Loading...</p>;
    if(error) return <p style={{color: "red"}}>{error}</p>;

    return(
        <div>
            <h2>Leads</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Source</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead)=>(
                        <tr key={lead.id}>
                            <td>{lead.name}</td>
                            <td>{lead.contactInfo}</td>
                            <td>{lead.source}</td>
                            <td>{lead.status}</td>
                            <td>
                                <button onClick={()=> handleDelete(lead.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default LeadList;