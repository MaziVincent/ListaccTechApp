import { useParams } from "react-router-dom";
import dotnet from '../../assets/images/dotnet.png'

const LearningPathDetails = () => {
  const { Id } = useParams();

  return (
    <div className=" pt-28 p-10 w-screen dark:bg-gray-900 dark:text-gray-100 flex flex-col justify-center items-center ">
      
      <div className="flex w-1/4 rounded-full justify-center items-center">

                      <img src={dotnet} className="" alt="code review" /> 
        </div>
        
      <h1> Learning path : {Id} </h1>
      
    </div>
  );
};

export default LearningPathDetails;
