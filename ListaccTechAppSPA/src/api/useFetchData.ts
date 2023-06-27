import axios from "./axios";
import baseURL from './BaseURL'
import useAxiosPrivate from "../hooks/useAxiosPrivate";



const useFetchData = () => {

    const axiosPrivate = useAxiosPrivate(); 
    
    const fetchData = async (url:string, token:string) => {

    
 
     const controller = new AbortController();
     let errors:any; 
     let data:any


     try{
         const response = await axiosPrivate.get(baseURL + url,{
             signal:controller.signal,
             headers:{
              Authorization: `Bearer ${token}`
             }
         });
         
         data = response.data;
        // console.log(data)

      

     }catch(error:any){
       errors = error;
 
         console.log(error)


        
     }
 
     controller.abort();

  

   
     
  return {data,errors}
 
     
   }
   return fetchData
}



export default useFetchData;