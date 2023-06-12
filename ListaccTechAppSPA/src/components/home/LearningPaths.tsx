import Button from "../shared/Button";
import dotnet from '../../assets/images/dotnet.png'
import { Link } from "react-router-dom";

const LearningPaths = () => {

  let id = 1;
  return (
    <div className="w-screen pt-28 py-10 px-2 flex dark:bg-gray-900 dark:text-gray-100 flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold"> All Learning Paths </h1>
      <div className="flex flex-col gap-5 justify-start items-center dark:bg-gray-800 rounded-md w-11/12 lg:w-4/6 p-4  shadow">
        <div className="flex flex-col md:flex-row justify-between border-b-2 p-6">
         <div className="flex flex-col md:flex-row  justify-evenly items-center gap-5 ">
            <div className="flex w-1/4 rounded-full 
                    justify-center items-center">
                      <img src={dotnet} className="" alt="code review" /> 
            </div>
            <h3 className="font-bold text-2xl text-center w-full"> Front-End Development</h3>
            </div> 
            
          <div className="md:flex hidden flex items-center">
          <Link
              to={`/LearningPaths/${id}`}
              className="bg-blue-400 hover:bg-blue-500 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center text-base
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
           Explore
              
        </Link>
          </div>
        </div>
        <div className="p-1 dark:text-gray-300 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
          </p>
        </div>
        <div className="md:hidden">
        <Link
              to={`/LearningPaths/${id}`}
              className="bg-blue-400 hover:bg-blue-500 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center text-base
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
           Explore
              
        </Link>
          </div>
      </div>
    </div>
  );
};

export default LearningPaths;
