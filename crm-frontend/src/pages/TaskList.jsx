import { useEffect, useState } from "react";
import api from "../service/api"

function TaskList(){
    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        fetchTasks();
    },[]);

    const fetchTasks = async() =>{
            try{
                const response = await api.get("/tasks");
                setTasks(response.data);
            }catch(err){
                console.error(err);
                setError("Failed to lead Tasks");
            }
            finally{
                setLoading(false);
            }
        };

    const handleDelete = async(id) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this Task");
        if(!confirmDelete) return;

        try{
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter((task)=> task.id !== id));
        }catch(err){
            console.error(err);
            alert("Failed to delete Task");
        }
    }

    if(loading) return <p>Loading...</p>;
    if(error) return <p style={{color:"red"}}>{error}</p>;

    return(
        <div>
           <h2>Tasks</h2>
           <table border="1">
               <thead>
                   <tr>
                     <th>Title</th>
                     <th>DueDate</th>
                     <th>Priority</th>
                     <th>Status</th>
                   </tr>
               </thead>
               <tbody>
                {tasks.map((task)=>(
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.priority}</td>
                        <td>{task.status}</td>
                        <td>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
               </tbody>
           </table>
        </div>
    )
}
export default TaskList;