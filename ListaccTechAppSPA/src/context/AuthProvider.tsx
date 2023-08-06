import { createContext,useState } from "react";
import user from "../models/user";

type userContextState ={
    auth:{ token:string, expires_at:string,currentUser:user, } ;
    setAuth:( data:any) => void
    persist:boolean
    setPersist:( data:any) => void
}


const values:userContextState = {

    auth:{ token:"", expires_at:"", currentUser:{
        id:0,
        firstName:"",
        lastName:"",
        gender:"",
        phoneNumber:"",
        email:"",
        status:true,
        role:""
    }, },
    setAuth:() =>{},
    persist: JSON.parse(localStorage.getItem("persist")! ) || false,
    setPersist:() =>{}
}
type ContextProviderProps = {
    children:React.ReactNode
}

 const AuthContext = createContext<userContextState>(values);

export const AuthProvider  = ({children}:ContextProviderProps) => {
    const [auth, setAuth] = useState(values.auth);
    const [persist, setPersist] = useState(values.persist);

    
    //console.log(auth.expires_at)
    
    return (
        
        <AuthContext.Provider value={{auth,setAuth, persist, setPersist}}> {children} </AuthContext.Provider>

        
        
    )
}

export default AuthContext;