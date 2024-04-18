import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate()

  
  return (
    <div>
      

<nav className="bg-white border-gray-200 dark:bg-gray-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">Task Maneger</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-xl  text-blue-600 dark:text-blue-500 hover:underline">Logout</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-xl">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">View all task</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Update task</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
       <div className='text-center justify-center '>
        <div className='mt-28'>
             <h1 className='text-5xl font-medium'>Wellcome to Task Maneger</h1>
        </div>
        <div className='mt-16'>
            <Link to="/createtask">
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-gray-800 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Create your task</button>
        </Link>
        </div>
       </div>
    </div>
  )
}

export default Navigation
