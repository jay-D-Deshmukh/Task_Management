import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function Viewalltask() {
  const [task, setTask] = useState([]);

  const getTask = async () => {
    const token = Cookies.get("token");
    try {
      const res = await axios.get("https://task-management-skn6.onrender.com/api/task/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleDelete = async (taskId) => {
    const token = Cookies.get("token");
    try {
      await axios.delete(`https://task-management-skn6.onrender.com/api/task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Task Deleted");
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        {task.length === 0 ? (
          <div className="items-center justify-center">
            <Link to="/createtask">
              <p className="text-gray-500 text-xl">
                No task is created.{" "}
                <span className="text-blue-600">Click to create a task.</span>
              </p>
            </Link>
          </div>
        ) : (
          task.map((taskItem) => (
            <div
              key={taskItem._id}
              className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-500"
            >
              
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                  Task: {taskItem.title}
                </h5>
              
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                Description: {taskItem.description}
              </p>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                Created at: {new Date(taskItem.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(taskItem._id)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Viewalltask;
