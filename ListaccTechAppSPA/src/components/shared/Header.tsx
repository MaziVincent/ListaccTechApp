import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LogoTrans2.png";
import "../../assets/css/header.css";
import Button from "./Button";

function Header() {
  let links = [
    {
      linkName: "LearningPaths",
      path: "/LearningPaths",
    },
    {
      linkName: "About",
      path: "/About",
    },
    {
      linkName: "Community",
      path: "/Community",
    },
    
  ];

  const [navbar, setNavbar] = useState(false);

  console.log(navbar)

  return (
    // <header
    //   className=" flex flex-row justify-between
    // bg-white px-2 sm:px-4 py-2.5
    //  fixed w-full z-20 top-0 left-0 shadow "
    // >
    //   <div className=" flex items-center mb-6 ml-3 md:mb-0">
    //     <Link to="/" className="flex items-center ">
    //       <img src={logo} className="h-6 mr-3 sm:h-10" alt="Listacc Logo" />
    //     </Link>
    //   </div>
    //   <nav className=" justify-end">
    //     <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
    //       <div className="flex items-center">
    //         <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-base">
    //            {

    //             links.map((link)=>(
    //               <li key={link.linkName}>
    //                  <Link
    //                   to={link.path}
    //                   className="text-gray-900 dark:text-white hover:border-b-4 duration-500 pb-1.5"
    //                   aria-current="page"
    //                 >
    //               {link.linkName}
    //             </Link>
    //               </li>
    //             ))

    //             }

    //         </ul>
    //         <Button value={"Get Started"} />
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    <nav className="w-screen bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-xl7 md:items-center md:flex md:px-10">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} className="h-6 mr-3 sm:h-10" alt="Listacc Logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:flex  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map((link) => (
                <li key={link.linkName}>
                  <Link
                    to={link.path}
                    className="text-gray-900 dark:text-white text-lg hover:border-b-4 duration-500 pb-1.5"
                    aria-current="page"
                  >
                    {link.linkName}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 space-y-2 md:flex pr-4">
              <Link
                to="/SignIn"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link
                to="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* <div className=" space-x-4 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-white  bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-gray-800  bg-white rounded-md shadow hover:bg-gray-100"
          >
            Get Started
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
