// Title,description,dueDate,priorty(drop down)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api"

function TaskForm(){
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");
   const [dueDate,setDueDate] = useState("");
   const [priority,setPriority] = useState("");
   const [error,setError] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        await api.post("/tasks",{ title,description,dueDate,priority });
        navigate("/tasks");
      }catch(err){
        console.error(err);
        setError("Failed to create Tasks");
      }
   };
   return(
      <div>
         <h2>Add Tasks</h2>
         <form onSubmit={handleSubmit}>
            <input placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} rows="4"></textarea>
            <input type="date" value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}}/>
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <button type="submit">Save</button>
         </form>
         {error && <p style={{color:"red"}}>{error}</p>}
      </div>
   )
}
export default TaskForm;