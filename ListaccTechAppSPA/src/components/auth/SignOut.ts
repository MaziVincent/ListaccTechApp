import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const SignOut = () => {

    const {setAuth} = useAuth();
    const navigate = useNavigate();

    setAuth({});
    navigate('Login');

    return;
}
 
export default SignOut;