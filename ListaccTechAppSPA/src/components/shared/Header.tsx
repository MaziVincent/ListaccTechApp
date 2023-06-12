import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/LogoTrans2.png";
import "../../assets/css/header.css";
import ClickAwayListener from '@mui/base/ClickAwayListener';
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
    }
    
  ];

  const [navbar, setNavbar] = useState(false);

  //console.log(navbar)

  return (
  
<ClickAwayListener onClickAway={()=>{setNavbar(false)}} >
    <nav className="w-screen bg-white dark:bg-gray-900 shadow sticky top-0">
      <div className="justify-between px-4 mx-auto lg:max-w-xl7 md:items-center md:flex md:px-10">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            
                <Link to="/" >
                  <img src={logo} className="h-6 mr-3 sm:h-10 " alt="Listacc Logo" />
                </Link>
              
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700 dark:text-gray-100"
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
                    className="w-6 h-6 text-gray-700 dark:text-gray-100"
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
        <div className="">
          <div
            className={`flex-1 justify-self-center gap-1  md:flex dark:bg-gray-900 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center  justify-center  space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map((link) => (
                <li key={link.linkName}>
                  <Link
                    to={link.path}
                    className="text-gray-900 dark:text-gray-100 text-base hover:border-b-4 duration-500 pb-1.5 "
                    aria-current="page"
                  >
                    {link.linkName}
                  </Link>
                </li>
              ))}

            <div className=" flex justify-even items-center mt-3 space-y-2 md:flex gap-5 pr-4">
              <Link
                  to="/SignIn"
                  className="inline-block  text-center text-white text-gray-900 dark:text-gray-100 text-base hover:border-b-4 duration-500  "
                >
                  Sign in
                </Link>

                <Link
                  to="javascript:void(0)"
                  className="inline-block  px-4 py-2 text-center text-gray-800 bg-orange-600 rounded-md shadow hover:bg-gray-100"
                >
                  Get Started
                </Link>
              
            </div>  
              
            </ul>

            
          </div>
        </div>
        
      </div>
    </nav>
  </ClickAwayListener>
  );
}

export default Header;
