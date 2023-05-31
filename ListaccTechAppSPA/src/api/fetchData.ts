import axios from "./axios";


const fetchData = async (url:string, token:string) => {

    
    const baseUrl = 'https://localhost:7188/api/'
     const controller = new AbortController();
     let errors:any; 
     let data:any


     try{
         const response = await axios.get(baseUrl + url,{
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