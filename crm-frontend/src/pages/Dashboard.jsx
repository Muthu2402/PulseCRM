import { useEffect, useState } from "react";
import api, { getRole } from "../service/api"

function Dashboard() {
    const [counts, setCounts] = useState({ customers: 0, leads: 0, tasks: 0, sales: 0 });
    const isAdmin = getRole() === "ADMIN";

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [customers, leads, tasks, sales] = await Promise.all([
                    api.get("/customers"),
                    api.get("/leads"),
                    api.get("/tasks"),
                    api.get("/sales"),
                ]);
                setCounts({
                    customers: customers.data.length,
                    leads: leads.data.length,
                    tasks: tasks.data.length,
                    sales: sales.data.length,
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchCounts();
    }, []);

    return (
        <div>
            <div className="hero">
                <svg className="hero-watermark" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="white" strokeWidth="2"
                        d="M0 30 H50 L60 5 L75 55 L90 15 L100 30 H200" />
                </svg>
                <h2>Your PipeLine</h2>
                <p className="lede">PICK UP WHERE YOU LEFT OFF, OR ADD SOMETHING NEW</p>
                <div className="stats">
                    <div className="stat"><span className="num">{counts.customers}</span><span className="label">Customers</span></div>
                    <div className="stat"><span className="num">{counts.leads}</span><span className="label">Leads</span></div>
                    <div className="stat"><span className="num">{counts.tasks}</span><span className="label">Tasks</span></div>
                    <div className="stat"><span className="num">{counts.sales}</span><span className="label">Sales</span></div>
                </div>
            </div>
            <div className="quick">
                <a href="/customers/new"><span className="quick-icon">+</span>Add a customer</a>
                <a href="/leads/new"><span className="quick-icon">+</span>Add a lead</a>
                <a href="/tasks/new"><span className="quick-icon">+</span>Add a task</a>
                <a href="/sales/new"><span className="quick-icon">+</span>Add a sale</a>
            </div>
        </div>
    )
}
export default Dashboard