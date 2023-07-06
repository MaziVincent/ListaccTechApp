
import useAuth from "./useAuth";
import axios from "../api/axios";


const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {

        const response = await axios.post('/Auth/RefreshToken',{
            withCredentials:true,
            
        });
        setAuth((prev:any) =>{

            // console.log(JSON.stringify(prev));
            // console.log(response.data.accessToken);
            // console.log(response.data.refreshToken);
            return {token:response.data.accessToken,expires_at:response.data.expires_at};
        })
    console.log(auth);
    return response.data.accessToken;
    } 

    return refresh;
}
 
export default useRefreshToken;