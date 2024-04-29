
import useAuth from "./useAuth";
import axios from "../api/axios";


const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {

        const response = await axios.get('/Auth/RefreshToken',{
            withCredentials:true,
            headers: {"Access-Control-Allow-Origin":"*", "Content-Type": "application/json",},
            //credentials: "include",
            
        });

        console.log(response.data);
        setAuth(response.data);
   
    return response.data.token;
    } 

    return refresh;
}
 
export default useRefreshToken;