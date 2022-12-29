import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className=" pt-28  bg-gray-50 dark:bg-gray-700  ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
