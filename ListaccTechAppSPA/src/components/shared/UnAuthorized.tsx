import { useNavigate } from "react-router-dom";
import Button  from "./Button";

const UnAuthorized = () => {
    const navigate = useNavigate();
    const goto = () => navigate(-1)
    return ( <div>
        <p> You are not allowed to go there </p>
        <Button value='Go Back' click={goto} />
    </div> );
}
 
export default UnAuthorized;