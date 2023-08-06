import axios from '../api/axios'
import useAuth from './useAuth'


const useLogout = () => {
    const {setAuth} = useAuth();

    const logout =async () => {
         setAuth({ token:"", expires_at:"", currentUser:{
            id:0,
            firstName:"",
            lastName:"",
            gender:"",
            phoneNumber:"",
            email:"",
            status:true,
            role:""
        }, });
         try{
            const response = await axios('Auth/LogOut', {
                withCredentials:true
            });

            return response.data;
         }

         catch(error){

            console.log({error:error, })
                
         }
    }
    return logout;
}
 
export default useLogout;