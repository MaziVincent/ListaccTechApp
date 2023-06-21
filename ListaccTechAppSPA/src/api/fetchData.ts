import axios from "./axios";
import baseURL from './BaseURL'


const fetchData = async (url:string, token:string) => {

    
    //const baseUrl = 'https://localhost:7050/api/'
     const controller = new AbortController();
     let errors:any; 
     let data:any


     try{
         const response = await axios.get(baseURL + url,{
             signal:controller.signal,
             headers:{
              Authorization: `Bearer ${token}`
             }
         });
         
         data = response.data;
         console.log(data)

      

     }catch(error:any){
       errors = error;
 
         console.log(error)


        
     }
 
     controller.abort();

  

   
     
  return {data,errors}
 
     
   }



export default fetchData;