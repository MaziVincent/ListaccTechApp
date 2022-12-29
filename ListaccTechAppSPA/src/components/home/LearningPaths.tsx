import Button from "../shared/Button";
import book from "../../assets/images/book.png";

const LearningPaths = () => {
  return (
    <div className="w-full pt-28 p-10 flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        {" "}
        All Learning <span className="text-orange-500">Paths</span>{" "}
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center md:items-evenly  lg:w-3/4 p-10 shadow">
        <div className="flex flex-row justify-between items-center border-b-2">
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
            <h3 className="font-bold text-2xl"> Front-End Development</h3>
          </div>

          <div className="hidden md:flex">
            <Button value="Explore" click="LearningPathDetails" />
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
        <div className="flex justify-center items-center md:hidden">
            <Button value="Explore" click="LearningPathDetails" />
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
