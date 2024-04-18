import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import UpdateTask from "./UpdateTask";

function Viewalltask() {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const getTask = async () => {
    const token = Cookies.get("token");
    try {
      const res = await axios.get("http://localhost:5010/api/task/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTaskList(res.data);
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

  const handleUpdate = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        {taskList.length === 0 ? (
          <div className="items-center justify-center">
            <Link to="/createtask">
              <p className="text-gray-500 text-xl">
                No task is created.{" "}
                <span className="text-blue-600">Click to create a task.</span>
              </p>
            </Link>
          </div>
        ) : (
          taskList.map((taskItem) => (
            <div
              key={taskItem._id}
              className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-500"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
                  Task: {taskItem.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description: {taskItem.description}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleDelete(taskItem._id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                  <svg
                    className="ms-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-7a1 1 0 01-2 0V7a1 1 0 012 0v2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleUpdate(taskItem)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                  <svg
                    className="ms-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {selectedTask && <UpdateTask task={selectedTask} />}
    </div>
  );
}

export default Viewalltask;
