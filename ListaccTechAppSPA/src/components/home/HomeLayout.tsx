import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const HomeLayout = () => {
    return ( <>
        <Header />
            <Outlet />
        <Footer />
    
    
    </> );
}
 
export default HomeLayout;