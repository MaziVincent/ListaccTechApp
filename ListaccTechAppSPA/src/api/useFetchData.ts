import axios from "./axios";
import baseURL from './BaseURL'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";



const useFetchData = () => {

    const axiosPrivate = useAxiosPrivate(); 
    const navigate = useNavigate();
    const location = useLocation()
    
    const fetchData = async (url:string, token:string) => {
        debugger
 
     const controller = new AbortController();
     let errors:any; 
     let data:any


     try{
         const response = await axios.get(url,{
             signal:controller.signal,
             headers:{
              Authorization: `Bearer ${token}`
             }
         });
         
         data = response.data;
        // console.log(data)

      

     }catch(error:any){
       errors = error;
        navigate('/Login',{state:{from: location}, replace:true })
         console.log(error)


        
     }
 
     controller.abort();

  

   
     
  return {data,errors}
 
     
   }
   return fetchData
}



export default useFetchData;