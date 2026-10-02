import { useState, useEffect } from "react";
import api from "../service/api"
function CustomerList() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCustomers();
    }, []);

     const fetchCustomers = async () => {
            try {
                const response = await api.get("/customers");
                setCustomers(response.data);
                console.log("API Response: ",response.data);
            } catch (err) {
                console.error(err);
                setError("Cannot delete this customer - they have linked sales records. Delete those first.");
            }
            finally {
                setLoading(false); // Loading completed
            }
        };
    
        const handleDelete = async(id) =>{
            const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
            if(!confirmDelete) return;

            try{
                await api.delete(`/customers/${id}`);
                setCustomers(customers.filter((customer)=> customer.id !== id));
            }catch(err){
                console.error(err);
                alert("failed to delete customer");
            }
        };

    if (loading) return <p>Loading....</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.company}</td>
                            <td>
                                <button onClick={() => handleDelete(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerList