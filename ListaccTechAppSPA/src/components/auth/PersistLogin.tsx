
import { Outlet } from "react-router-dom";  
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";
import CircularProgress from '@mui/material/CircularProgress';




const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken();
    const {auth, persist} = useAuth()

    useEffect(()=> {

        //let isMounted = true;
        const verifyRefreshToken = async ()=> {

            try{
                await refresh();
            }
            catch(err){
                console.error(err)
            }
            finally{
                setIsLoading(false);
            }
        }
        !auth?.token ? verifyRefreshToken() : setIsLoading(false)
        //return () => isMounted = false;
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`token: ${JSON.stringify(auth.token)}`)
        

    },[isLoading])

    return ( <>

        {
            !persist 
            ? <Outlet /> :
            isLoading ? <p className="flex items-center justify-center p-20"> <CircularProgress color="success" /> </p>
            : <Outlet />
        }
    
    
    </> );
}
 
export default PersistLogin;