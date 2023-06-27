import { useEffect ,useState} from "react";
import axios from "../api/axios";


const useFetch =  (url:string) => {

    const [data,setData] = useState<any[]>();
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState()
    const controller = new AbortController();


    useEffect( () => {    
            
                
                
            const getData = async() =>{

                try{
                    const response = await axios.get(url,{
                        signal:controller.signal,
                        headers:{'Content-Type':'application/json'}
                    });
                    console.log(response.data);
                    setData(response.data.result)
                    setIsLoading(false);
                    console.log(data);

                }catch(error:any){

                    console.log(error)
                    setError(error)
                }

                controller.abort();

            }
               
            getData()
                
                // return () =>{
                // setIsLoading(false);
                // controller.abort();
                // }
            

    },[url]);

    return {data, isLoading, error}
}
 
export default useFetch;