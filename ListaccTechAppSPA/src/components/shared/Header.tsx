import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogoTrans2.png";
import avatar from "../../assets/images/avatar.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../assets/css/header.css";
import useAuth from "../../hooks/useAuth";

import Button from "./Button";

function Header() {
  let location = "/";
  const { auth } = useAuth();

  auth.currentUser.role ==='OnlineStudent' ? (location = "Dashboard") : (location = "/");

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
    {
      linkName: "SignIn",
      path: "/Login",
    },
  ];
  let authLinks = [
    {
      linkName: "Dashboard",
      path: "/Dashboard",
    },
    {
      linkName: "Learning Paths",
      path: "/Path",
    },
    {
      linkName: "Community",
      path: "/Community",
    },
  ];

  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const goto = () => navigate("Registeration");
  
  const toggleMenu = () => {
    let subMenu = document.querySelector(".subMenu");
    
    subMenu?.classList.toggle('hidden');
  }

  return (
    <nav className="w-full bg-white fixed shadow lg:pl-4 lg:pr-8 dark:bg-gray-700">
      <div className="justify-between px-4  mx-auto lg:max-w-xl7 md:items-center md:flex md:px-2">
        <div>
          <div className="flex items-center sm:shrink-0 justify-between py-3 md:py-5 md:block">
            <Link to={location}>
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
        <div className="w-4/5 flex ">
          <div
            className={`flex-1 justify-self-center md:justify-end items-center md:flex gap-8 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {auth.currentUser.role === "OnlineStudent"
                ? authLinks.map((link) => (
                    <li key={link.linkName}>
                      <Link
                        to={link.path}
                        className="text-gray-900 dark:text-white text-lg hover:border-b-4 duration-500 pb-1.5"
                        aria-current="page"
                      >
                        {link.linkName}
                      </Link>
                    </li>
                  ))
                : links.map((link) => (
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
            <hr className="my-4"/>
            <div className="flex flex-col space-y-8 items-start justify-start md:hidden">
                <Link 
                  to="Settings"
                  className="text-gray-900 dark:text-white text-lg hover:border-b-4 duration-500 pb-1.5"
                  aria-current="page"
                  
                  > Account Settings </Link>
                <button
                        type="submit"
                        className="text-gray-900 px-0 block w-full py-2 text-left text-lg hover:bg-gray-50 "
                       
                      >
                        Sign out
                      </button>
              </div>
            {auth.currentUser.role === "OnlineStudent" ? (
              <>
              <div className="relative md:inline-block text-left hidden">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center items-center rounded-full bg-white px-2 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none "
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleMenu}
                  >
                    <AccountCircleIcon color="disabled" sx={{ fontSize: 40 }} />
                  </button>
                </div>

                <div
                  className="absolute hidden subMenu transition-opacity right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-md hover:bg-gray-50 "
                      role="menuitem"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>

                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="text-gray-700 block w-full px-4 py-2 text-left text-md hover:bg-gray-50 "
                        role="menuitem"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              

              </>
              
                
            ) : (
              <div className="mt-3 space-y-2  md:flex  pr-4 justify-center justify-self-center ">
                <Button value="Get Started" click={goto} />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
