import React from 'react'
import { Link } from "react-router-dom";


function Hometext() {
    
  return (
    <div>
         <div className="text-center justify-center ">
        <div className="mt-28">
          <h1 className="text-5xl font-medium">Wellcome to Task Maneger</h1>
        </div>
        <div className="mt-16">
          <Link to="/createtask">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-gray-800 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Create your task
            </button>
          </Link>
        </div>
      </div>
       
    </div>
  )
}

export default Hometext
