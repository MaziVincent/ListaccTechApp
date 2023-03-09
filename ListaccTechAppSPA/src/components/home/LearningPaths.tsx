import Button from "../shared/Button";
import book from "../../assets/images/book.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

const LearningPaths = () => {
  const baseUrl = 'https://localhost:7188/api/LearningPath/GetAll'
  const navigate = useNavigate();
  const [paths, setPaths] = useState<any[]>([])
  const goto = () => navigate('LearningPathDetails');

  useEffect(() => {
    let isLoaded = true;
    const controller = new AbortController();
    const getLearningPaths = async ()=>{

      try{
        const response = await axios.get(baseUrl,{
            signal:controller.signal
        });
        console.log(response.data);
        isLoaded && setPaths(response.data.result)
        console.log(paths);
      }catch(error){
        console.log(error)
      }
    }
    getLearningPaths();

    return () =>{
      isLoaded = false;
      controller.abort();
    }
  },[])
  
  return (
    <section className="w-full h-screen pt-28 p-10 flex flex-col dark:text-zink-100 items-center justify-start gap-6">
      <h1 className=" text-4xl font-bold dark:text-white"> 
      All Learning <span className="text-orange-500">Paths</span>{" "}
      </h1>
      {paths.length ? (

        <div className=" flex flex-col gap-5 justify-center items-center  ">
          { paths.map((path, i) =>
          
          <div className="flex flex-col gap-5 justify-center items-center md:items-evenly  lg:w-3/4 p-10 shadow" key={i}>
          <div className="flex flex-row justify-between items-center pb-0.5 border-b-2">
            <div className="flex md:flex-row flex-col justify-start items-center border-3 gap-5 ">
              <div
                className="flex flex-row rounded-full border-2 
                      justify-center items-center w-2/5 md:w-1/5 h-auto shadow"
              >
                <img
                  src={book}
                  alt="learning path"
                  className="rounded-full w-full"
                />
              </div>
              <h3 className="font-bold text-2xl">{path.name}</h3>
            </div>

            <div className="hidden md:flex">
              <Button value="Explore" click={goto} />
            </div>
          </div>
          <div className="p-6 text-justify text-lg">
            <p>
              {path.description}
            </p>
          </div>
          <div className="flex justify-center items-center md:hidden">
              <Button value="Explore" click={goto} />
          </div>
        </div>
          
          
          ) }

        
      </div>
  ) : (<p> Error Loading Learning Paths  </p>)
} 
    </section>
  );
};

export default LearningPaths;
