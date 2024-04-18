import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Navigation from "./Navigation";

function Createtak() {
  // State variables to hold task title, description, and additional information
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setInfo] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title==""&&description==""&&task=="")
    {
      alert("Please fill all the fields")
      return
    }
    // You can perform any further actions here, such as sending the data to the server
    // For now, let's just log the values
    postTask();
  };
  const taskData = {
    title,
    description,
    task,
  };

  const postTask = async () => {
    try {
      const token = Cookies.get("token"); // Get the token from the cookie
      

      const response = await axios.post(
        "https://task-management-skn6.onrender.com/api/task",
        taskData,
        {
          headers: {
            Authorization: `${token}`, // Include the token in the Authorization header
          },
        }
      );
      if(response.data.status == true){
        alert("Task Created succcesfully")
      }
      setTitle("")
      setDescription("")
      setInfo("")
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <Navigation/>
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter task title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="info"
              className="block text-sm font-medium text-gray-700"
            >
              Additional Information
            </label>
            <textarea
              id="info"
              name="info"
              value={task}
              onChange={(e) => setInfo(e.target.value)}
              rows="3"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter additional information about the task"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Createtak;
