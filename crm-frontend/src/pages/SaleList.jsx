import { useEffect, useState } from "react";
import api from "../service/api"

function SaleList() {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchSales();
    }, []);

      const fetchSales = async () => {
            try {
                const response = await api.get("/sales");
                setSales(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load Sales");
            }
            finally {
                setLoading(false);
            }
        };

        const handleDelete = async(id) =>{
            const confirmDelete = window.confirm("Are you sure you want to delete this Sales");
            if(!confirmDelete) return;

            try{
                await api.delete(`/sales/${id}`);
                setSales(sales.filter((sale)=> sale.id !== id));
            }catch(err){
                console.error(err);
                alert("Failed to delete Sales");
            }
        };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Sales</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                        <tr key={sale.id}>
                            <td>{sale.customer.name}</td>
                            <td>{sale.amount}</td>
                            <td>{sale.status}</td>
                            <td>{sale.date}</td>
                            <td>
                                <button onClick={()=> handleDelete(sale.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default SaleList;