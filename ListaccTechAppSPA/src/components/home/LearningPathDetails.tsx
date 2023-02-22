import { useParams } from "react-router-dom";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';


const LearningPathDetails = () => {
  const { Id } = useParams();

  return (
    <div className=" pt-10 p-10 w-full flex flex-col gap-8 justify-center items-center ">
      <h1 className="text-4xl font-bold text-center">
        {" "}
        Learning <span className="text-orange-500">Path </span>
        {Id}
      </h1>
      <div className="flex flex-col w-11/12 md:w-3/5 items-center gap-8">
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit
          quasi reprehenderit officiis ducimus aliquid, voluptatibus aperiam
          beatae libero totam, nihil sit. Quam asperiores hic laborum explicabo
          ab error nihil.
        </p>
        
        <div className="flex flex-col  w-full shadow-md bg-white p-7 rounded gap-6 ">
        <h2 className="border-b-2 text-2xl p-5 font-extrabold"> HTML</h2>
          <ul className="space-y-5 text-lg">
            <li className="hover:bg-gray-100 p-5 rounded-md">
              {" "}
              <BookOutlinedIcon /> Intoduction
            </li>
            <li className="hover:bg-gray-100 p-5 rounded-md">
              {" "}
              <BookOutlinedIcon /> Intoduction
            </li>
            <li className="hover:bg-gray-100 p-5 rounded-md">
              {" "}
              <BookOutlinedIcon /> Intoduction
            </li>
            <li className="hover:bg-gray-100 p-5 rounded-md">
              {" "}
              <BookOutlinedIcon /> Intoduction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetails;
