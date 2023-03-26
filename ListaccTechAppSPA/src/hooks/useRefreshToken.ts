
import useAuth from "./useAuth";
import axios from "../api/axios";


const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {

        const response = await axios.get('/api/Auth/RefreshToken',{
            withCredentials:true,

        });
        setAuth((prev:any) =>{

            console.log(JSON.stringify(prev));
            console.log(response.data.token);
            return {...prev, token:response.data.token};
        })
    
    return response.data.token;
    }

    return refresh;
}
 
export default useRefreshToken;