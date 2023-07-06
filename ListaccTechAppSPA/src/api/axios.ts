import axios from "axios";
import baseURL from "./BaseURL";

export default axios.create({
    baseURL:baseURL
});

export const axiosPrivate = axios.create({
    baseURL:baseURL,
    headers:{'Content-Type':'application/json'},
    
});