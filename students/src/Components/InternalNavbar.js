// Internal_Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/yellow_header1.png";
import "./InternalNavbar.css"

const Internal_Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Navbar-container fixed top-0 left-0 w-full z-50 shadow-md p-4 flex items-center justify-between border" style={{ backgroundColor: '#FFBD59' }}>
      {/* Logo and brand */}
      <Link to={'/'}>
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-48 h-14 rounded-full" />
        </div>
      </Link>

      {/* Mobile hamburger icon */}
      <div className="lg:hidden relative">
        <button onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navigation links */}
        
        {isMobileMenuOpen && (
          <div className="absolute z-10 right-0   bg-white">
            <Link
              to="/home"
              className="block text-2xl font-bold focus:text-white focus:border-white focus:border-b-4 hover:text-white p-2"
            >
              Home
            </Link>
            <Link
              to="/internship"
              className="block text-2xl font-bold focus:text-white focus:border-white focus:border-b-4 hover:text-white p-2"
            >
              Internships
            </Link>
            <Link
              to="/applied-internship"
              className="block text-2xl font-bold focus:text-white focus:border-white focus:border-b-4 hover:text-white p-2"
            >
              Applied Internship
            </Link>
          </div>
        )}
      </div>

      {/* Notifications and User Profile */}
      <div className="lg:flex items-center space-x-4 relative">
        {/* Add notification and user profile components here */}
      </div>
    </div>
  );
};

export default Internal_Navbar;
