// Internal_Navbar.js
import React from "react";

import { Link } from "react-router-dom";
import logo from "../../Assets/Internsb.png";
import { NavLink } from "react-router-dom";
import  { useState, useRef, useEffect } from "react";
// import navImg from '../Assets/yellow_header1.png';
import navImg from '../../Assets/yellow_header1.png'
import '../ResponsiveCss/ResponsiveCss.css';
import '../UpdatedNav/Internal_Navbar.css';
import { useNavigate } from "react-router-dom";

import { FiUser } from "react-icons/fi";


const Internal_Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logo = navImg;
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const handleCreateProfile = () => {
    navigate("/Profile");
  };
  const handleViewProfile = () => {
    navigate("/viewprofile");
  };
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };


  return (
    <div className=" Navbar-container fixed top-0 left-0 w-full z-50 shadow-md p-2 flex items-center justify-between border" style={{ backgroundColor: '#FFBD59' }}>
      {/* Logo and brand */}
      <div className="flex items-center space-x-2">
        <Link to={'/'}>
        <img src={logo} alt="Logo" className="w-14 h-14 rounded-full"  style={{width:'15rem',height:'5rem'}}/>
       </Link>
       
        {/* <h1 className="text-4xl font-bold">
          Interns{" "}
          <span className="text-4xl font-bold text-amber-300">Bee</span>
        </h1> */}
      </div>

    
     
      {/* /////////////////////////////////////////////////////////////// */}

     
        <div className={`Navlist nav-items ${isOpen && "open"}`}>
          <NavLink
            to="/home"
            className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4 pl-6"
            onClick={() => setIsOpen(false)}
          >
            Students
          </NavLink>
          {/* <NavLink
            to="/companies"
            className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4 pl-6"
            onClick={() => setIsOpen(false)}
          >
            Companies
          </NavLink> */}
          <NavLink
            to="/internship"
            className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4 pl-6"
            onClick={() => setIsOpen(false)}
          >
            Internships
          </NavLink>
          <NavLink
            to="/applied-internship"
            className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4 pl-6"
            onClick={() => setIsOpen(false)}
          >
            Applied Internship
          </NavLink>
        </div>

      {/* /////////////////////////////////////////////////////////////////////// */}

      {/* Notifications and User Profile */}
      {/* <div className="flex items-center space-x-4 relative"> */}
        {/* Add notification and user profile components here */}
      {/* </div> */}
      <div>  
          <div
                className="MainHomeOneCursorPointerDiv cursor-pointer"
                onMouseEnter={() => setShowProfileDropdown(true)}
                // onMouseLeave={() => setShowProfileDropdown(false)}
                onClick={handleProfileIconClick}
              >
                <FiUser className="HomeHeaderHeading mr-4  text-4xl" />
                {showProfileDropdown && (
                  <div className=" poputHomeOne absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                    <div
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                      onClick={handleCreateProfile}
                    >
                      Create Profile
                    </div>
                    <div
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                      onClick={handleViewProfile}
                    >
                      View Profile
                    </div>
                    <div
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Log Out
                    </div>
                  </div>
                )}
              </div>
              </div>
  
              <div
          className={`nav-toggle  bg-opacity-50 ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"></div>
          <div className="bar text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"></div>
          <div className="bar text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4"></div>
        </div>

    </div>
  );
};

export default Internal_Navbar;
