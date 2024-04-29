import axios from "./axios";
import baseURL from './BaseURL'
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";



const useFetchData = () => {

    const axiosPrivate = useAxiosPrivate(); 
    // const navigate = useNavigate();
    // const location = useLocation()
   
   
    const fetchData = async (url:string, token:string) => {
       
 
     const controller = new AbortController();
     let errors:any; 
     let data;
     

     
     try{
         const response = await axiosPrivate.get(url,{
             signal:controller.signal,
             headers:{
              Authorization: `Bearer ${token}`
             },
             withCredentials:true
         });
         
         data = response.data;
        // console.log(data)

      

     }catch(error:any){
       errors = error;
        //navigate('/Login',{state:{from: location}, replace:true })
         console.log(error)


        
     }
 
     controller.abort();

  

   
     
  return {data,errors}
 
     
   }
   return fetchData
}



export default useFetchData;