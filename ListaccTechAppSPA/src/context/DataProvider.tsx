import { createContext,useState } from "react";

type dataContextState ={
    dataCount:{

        studentCount:number
        adminCount:number
        learningPathCount :number
        moduleCount:number
        topicCount:number
        lessonCount:number
 
    
      } ;
    setDataCount:( data:any) => void
}


const values:dataContextState = {

    dataCount:{

        studentCount:0,
        adminCount:0,
        learningPathCount :0,
        moduleCount:0,
        topicCount:0,
        lessonCount:0,
    
      },
    setDataCount:() =>{}
}
type ContextProviderProps = {
    children:React.ReactNode
}

 const DataContext = createContext<dataContextState>(values);

export const AuthProvider  = ({children}:ContextProviderProps) => {
    const [dataCount, setDataCount] = useState(values.dataCount);
    
    //console.log(auth.expires_at)
    
    return (
        
        <DataContext.Provider value={{dataCount,setDataCount}}> {children} </DataContext.Provider>

        
        
    )
}

export default DataContext;