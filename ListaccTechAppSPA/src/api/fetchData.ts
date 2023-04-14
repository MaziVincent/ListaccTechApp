import axios from "./axios";

const fetchData = async (url:string) => {

    type dataState ={
        dataList:{
         currentPage:number,
         hasNext:boolean,
         hasPrevious:boolean,
         pageCount:number,
         totalCount:number,
         totalPages:number
        }
        result:[]
     }

     const controller = new AbortController();
     let errors:any; 
     let data:dataState = {
       dataList:{
 
     currentPage:0,
     hasNext:false,
     hasPrevious:false,
     pageCount:0,
     totalCount:0,
     totalPages:0
 
     }, result:[]};
 
     try{
         const response = await axios.get(url,{
             signal:controller.signal
         });
         
        //console.log(response.data);
         data = response.data;
         
 
     }catch(error:any){
       errors = error;
 
         console.log(error)
        
     }
 
     controller.abort();
     
     
 
       return data;
     
 
     
   }



export default fetchData;