import axios from "axios";
// Create Custom Axios instance (This URL Must be a prefix of All requests)
const api = axios.create({
    baseURL: "http://localhost:8080/api"
});

// Before request send, This Function runs automatically
api.interceptors.request.use((config)=>{
    //Token takes from Localstorage(Store after login successfull)
    // LocalStorage - it is a storage box to store data in Browser(Small size). 
    // If page gets refresh or browser get closed then open, data stored here.
    const token =localStorage.getItem("token");
    if(token){
        // if token is Found, join with header automatically
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// permission to import this file for another file

export function getRole(){
    const token = localStorage.getItem("token");
    if(!token) return null;
    try{
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.role;
    }catch(err){
        return null;
    }
}

export default api;