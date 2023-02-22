import { createContext,useState ,FC} from "react";

type userContextState ={
    auth:{currentUser:any, token:any } ;
    setAuth:( data:any) => void
}


const values:userContextState = {

    auth:{currentUser:{}, token:{} },
    setAuth:() =>{}
}
type ContextProviderProps = {
    children:React.ReactNode
}

 const AuthContext = createContext<userContextState>(values);

export const AuthProvider  = ({children}:ContextProviderProps) => {
    const [auth, setAuth] = useState(values.auth);
    console.log(auth)
    
    return (
        
        <AuthContext.Provider value={{auth,setAuth}}> {children} </AuthContext.Provider>

        
        
    )
}

export default AuthContext;