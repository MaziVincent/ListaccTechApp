import Button from "../shared/Button";

const LearningPaths = () => {
  return (
    <div className="w-full pt-28 p-10 flex flex-col items-center justify-center gap-6">
      <h1 className="text-xl3 font-bold"> All Learning Paths </h1>
      <div className="flex flex-col gap-5 justify-start items-evenly w-3/4 p-10 shadow">
        <div className="flex flex-row justify-between border-b-2 p-6">
         <div className="flex flex-row justify-evenly gap-5 ">
            <div className="flex flex-row rounded-full border-2 
                    justify-center items-center">Image
            </div>
            <h3 className="font-bold text-xl2"> Front-End Development</h3>
            </div> 
            
          <div>
            <Button value="Explore" />
          </div>
        </div>
        <div className="p-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            labore nobis numquam eum a, provident illo quae quis in debitis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
