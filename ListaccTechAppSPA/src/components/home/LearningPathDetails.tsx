import { useParams } from "react-router-dom";

const LearningPathDetails = () => {
  const { Id } = useParams();

  return (
    <div className=" pt-28 p-10 w-full flex flex-col justify-center items-center ">
      <h1> Learning path : {Id} </h1>
      <details>
        <summary>HTML</summary>
        <ul>
            <li> Introduction</li>
            <li> Introduction</li>
            <li> Introduction</li>
        </ul>
      </details>
      <details>
        <summary>CSS</summary>
        <ul>
            <li> Introduction</li>
            <li> Introduction</li>
            <li> Introduction</li>
        </ul>
      </details>
    </div>
  );
};

export default LearningPathDetails;
