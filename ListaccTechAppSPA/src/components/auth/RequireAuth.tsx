import { useLocation, Navigate,Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({allowedRole}:any) => {
    const {auth} = useAuth();
    const location = useLocation();

    return ( 
        auth.currentUser.role === allowedRole
        ? <Outlet />
        :auth.currentUser
        ? <Navigate to="/UnAuthorized" state={{from:location}} replace />
        :<Navigate to="/Login" state={{from:location}} replace />
     );
}
 
export default RequireAuth;
