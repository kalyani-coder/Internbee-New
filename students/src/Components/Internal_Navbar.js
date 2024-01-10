// Internal_Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Internal_Navbar = () => {
  return (
    <div className="bg-amber-300 Navbar-container fixed top-0 left-0 w-full z-50 shadow-md p-4 flex items-center justify-between border">
      {/* Logo and brand */}
      <div className="flex items-center space-x-2">
        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
        <h1 className="text-4xl font-bold">
          Interns{" "}
          <span className="text-4xl font-bold text-amber-300">Bee</span>
        </h1>
      </div>

      {/* Navigation links */}
      <div className="flex items-center space-x-6">
        <Link
          to="/home"
          className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"
        >
          Home
        </Link>
        <Link
          to="/companies"
          className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"
        >
          Companies
        </Link>
        <Link
          to="/internship"
          className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"
        >
          Internships
        </Link>
        <Link
          to="/applied-internship"
          className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"
        >
          Applied Internship
        </Link>
      </div>

      {/* Notifications and User Profile */}
      <div className="flex items-center space-x-4 relative">
        {/* Add notification and user profile components here */}
      </div>
    </div>
  );
};

export default Internal_Navbar;
