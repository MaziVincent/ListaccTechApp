import { useNavigate } from "react-router-dom";

const Button = (props:any) => {

  const navigate = useNavigate();
  const path = props.click;
  console.log(path)
   // props.name

    return ( 
        <button
              type="button"
              className="bg-blue-400 hover:bg-blue-500 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center text-base
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={() =>{navigate(path)}}
            >
              {props.value}
            </button>
     );
}
 
export default Button;