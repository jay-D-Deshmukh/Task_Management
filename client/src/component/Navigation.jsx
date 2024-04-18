import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function Navigation() {
  const navigate = useNavigate();

  const handelLogout =()=>{
    Cookies.remove("token");
    // Redirect the user to the login page or any other desired page
    navigate("/login") // Redirect to the login page
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">
              Task Maneger
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <button
          onClick={handelLogout} 
          type="button" className="text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-700">Log Out</button>

              
            
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-xl">
              <li>
                <Link
                  to="/home"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/alltask"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  View all task
                </Link>
              </li>
              <li>
                <Link
                  to="/updatetask"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Update task
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  );
}

export default Navigation;
