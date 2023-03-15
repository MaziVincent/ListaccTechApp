import { createContext,useState } from "react";

type userContextState ={
    auth:{currentUser:any, token:string, refreshToken:string, expires_at:string } ;
    setAuth:( data:any) => void
}


const values:userContextState = {

    auth:{currentUser:{}, token:"", refreshToken:"", expires_at:"" },
    setAuth:() =>{}
}
type ContextProviderProps = {
    children:React.ReactNode
}

 const AuthContext = createContext<userContextState>(values);

export const AuthProvider  = ({children}:ContextProviderProps) => {
    const [auth, setAuth] = useState(values.auth);
    
    console.log(auth.expires_at)
    
    return (
        
        <AuthContext.Provider value={{auth,setAuth}}> {children} </AuthContext.Provider>

        
        
    )
}

export default AuthContext;