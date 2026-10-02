import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";


function SaleForm(){
    const [customers,setCustomers] = useState([]);
    const [customerId,setCustomerId] = useState("");
    const [amount,setAmount] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
       const fetchCustomers = async()=>{
        try{
            const response = await api.get("/customers");
            setCustomers(response.data);
        }catch(err){
            console.error(err);
        }
       }
       fetchCustomers();
    },[]);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            await api.post("/sales",{
                customer : {id: customerId},
                amount: amount
            });
            navigate("/sales");
        }catch(err){
            console.log(err);
            setError("Failed to Create Sale");
        }
    }
    return(
        <div>
           <h2>Add Sale</h2>
           <form onSubmit={handleSubmit}>
              <select value={customerId} onChange={(e)=> setCustomerId(e.target.value)} required>
                 <option value="">-- Select Customer --</option>
                 {customers.map((customer)=>(
                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                 ))}
              </select>
              <input type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
              <button type="submit">Save</button>
           </form>
           {error && <p style={{color:"red"}}>{error}</p>}
        </div>
    );
}
export default SaleForm;