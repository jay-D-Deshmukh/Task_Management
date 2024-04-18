import React from "react";
import Navigation from "./Navigation";
import Cookies from "js-cookie";

function Logout() {
  const handleLogout = () => {
    // Clear the authentication token from cookies
    Cookies.remove("token");
    // Redirect the user to the login page or any other desired page
    window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <div>
      <Navigation />
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
