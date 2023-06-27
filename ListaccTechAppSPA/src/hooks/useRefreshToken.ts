
import useAuth from "./useAuth";
import axios from "../api/axios";


const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {

        const response = await axios.post('/api/Auth/RefreshToken',{
            withCredentials:true,
            Token:auth.token,
            RefreshToken:auth.refreshToken
            
            

        });
        setAuth((prev:any) =>{

            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            console.log(response.data.refreshToken);
            return {...prev, token:response.data.accessToken, refreshToken:response.data.refreshToken};
        })
    
    return response.data.accessToken;
    } 

    return refresh;
}
 
export default useRefreshToken;