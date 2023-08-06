import useFetchData from "../../../../api/useFetchData";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { student } from "../../../../models/user";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ViewStudent = () => {

    const fetch = useFetchData()
    const{auth} = useAuth();
    const{id} = useParams();
    const url = 'Student/Get/';
    const[data, setData] = useState<student>();
    const [learningPaths, setLearningPaths] = useState();
    const navigate = useNavigate();

    useEffect(()=>{

        const getStudents = async () =>{
            const response = await fetch(`${url}${id}`, auth.token)

            setData(response.data.result)
            setLearningPaths(response.data.learningPaths);
            

        }

        getStudents();

    },[url])
    
    return (
        <div className="py-6 flex justify-center relative">
            <ArrowBackIosIcon className="absolute top-5 left-10 cursor-pointer" sx={{ fontSize: 40 }}  />
            <div className="flex flex-col items-start justify-center w-4/6 shadow dark:bg-gray-800 p-5 gap-6">
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> First Name :  </label> <span> {data?.firstName.toUpperCase()}  </span></div>

                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> Last Name :  </label> <span> {data?.lastName.toUpperCase()}  </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> Gender :  </label> <span> {data?.gender.toUpperCase()} </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> Phone Number :  </label> {data?.phoneNumber.toUpperCase()}  <span> </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> Email Address :  </label> {data?.email.toUpperCase()}  <span> </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5" > <label> Status :  </label> <span className={data?.status?"text-green-500" :"text-red-500"}> {data?.status ? "Active" : " DeActivated "} </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> <label> Date Of Birth :  </label>{data?.dateOfBirth.toUpperCase()}  <span> </span></div>
                <div className="dark:bg-gray-700 p-4 text-lg font-bold shadow-lg rounded-md flex gap-5"> Learning Path : 
                    <ul>
                        <li> Web Development </li>
                    </ul>
                </div>
            </div>
            <div>
               
            </div>


        </div>
      );
}
 
export default ViewStudent;