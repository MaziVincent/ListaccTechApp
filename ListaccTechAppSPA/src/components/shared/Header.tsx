import React from "react";
import logo from "../../assets/images/LogoTrans2.png";
import "../../assets/css/header.css";

function Header() {
  return (
    <header className=" flex flex-row justify-between 
    bg-white px-2 sm:px-4 py-2.5 
     fixed w-full z-20 top-0 left-0 ">
      <div className=" flex items-center">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-10" alt="Listacc Logo" />
        </a>
      </div>
      <nav className=" justify-end">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-base font-medium">
              <li>
                <a
                  href="/LearningPaths"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Learning Paths
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Community"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/SignIn"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Sign In
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
