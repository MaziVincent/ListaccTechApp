import { useParams } from "react-router-dom";
import dotnet from '../../assets/images/dotnet.png'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { grey } from "@mui/material/colors";

const LearningPathDetails = () => {
  const { Id } = useParams();

  return (
    <div className=" pt-28 p-10 w-screen dark:bg-gray-900 dark:text-gray-100 flex flex-col justify-center items-center ">
      
      <div className="flex flex-col justify-center lg:w-4/6 items-center gap-10">

          
          <div className="flex w-1/4 xl:w-1/6 rounded-full justify-center items-center">

                  <img src={dotnet} className="" alt="code review" /> 

          </div>

          <h1 className="text-3xl text-center font-bold"> Learning path : {Id} </h1>
          <div className="w-5/6 flex flex-col gap-2">
            <h3 className="text-xl"> Description</h3>
            <p className="dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Placeat nobis excepturi accusantium inventore dolorem unde 
              non incidunt dignissimos consequuntur tenetur?</p>
          </div>
          <div className="flex flex-col items-start w-5/6 dark:bg-gray-800 px-4 py-2 rounded-md gap-5">
            <h3 className="text-xl border-b w-full p-4 border-gray-600">Introduction</h3>
            
            <ul className="dark:text-gray-300  w-full">
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>

            </ul>
          </div>

          <div className="flex flex-col items-start w-5/6 dark:bg-gray-800 px-4 py-2 rounded-md gap-5">
            <h3 className="text-xl border-b w-full p-4 border-gray-600">Introduction</h3>
            
            <ul className="dark:text-gray-300  w-full">
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>
              <li className="flex gap-4 p-3 hover:bg-gray-600 rounded-md "><span><LibraryBooksOutlinedIcon sx={{ color: grey[500] }} /> </span> <span> Introduction to HTML</span></li>

            </ul>
          </div>

      </div>
      
    </div>
  );
};

export default LearningPathDetails;
