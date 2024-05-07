import React, { useState, useRef } from "react";
import logo from "../../Assets/Interns_bee_combination-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";

import "../Landingpage/Navbar.css"
import EmployerRegistration from '../../Component/Signup/Signup';

import Login from "../../Component/Login/Login"

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [loginPopup, setLoginPopup] = useState(false);
    const [registerPopup, setRegisterPopup] = useState(false);

  const handleLoginClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
    setShowDropdown(!showDropdown);
    setSelectedUserType("login");
  };

  const handleRegisterClick = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setDropdownPosition({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
    setShowDropdown(!showDropdown);
    setSelectedUserType("register");
  };

  const handleUserTypeSelect = (userType) => {
    setShowDropdown(false);

    if (userType === "employer") {
      if (selectedUserType === "login") {
        navigate("/employer-login");
      } else if (selectedUserType === "register") {
        navigate("/employer-register");
      }
    } else if (userType === "student") {
      if (selectedUserType === "login") {
        navigate("/Signin");
      } else if (selectedUserType === "register") {
        navigate("/Registration");
      }
    }
  };
  const openLoginPopup = () => {
    setLoginPopup(true);
};

const closeLoginPopup = () => {
    setLoginPopup(false);
};

const openRegisternPopup = () => {
    setRegisterPopup(true);
};

const closeRegisterPopup = () => {
    setRegisterPopup(false);
};
  // const HandleNavigate = () => {
  //     window.location.href = 'https://internbee-students.vercel.app/login';
  // }

  // const navigateToStudents = () => {
  //     // Redirect to the specified URL
  //     window.location.href = 'https://internbee-students.vercel.app/login';
  // };

  // const navigateToStudentsregister = () => {
  //     // Redirect to the specified URL
  //     window.location.href = 'https://internbee-students.vercel.app/register';
  // };

  return (
    <div className="mb-10">
    <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between border">
        <div className="flex items-center space-x-2">
            <Link to={'/'}>
                <div className='navbar-logo'>
                    <img src={logo} alt="Logo" className="navbar-logo-for-internsbeestudent rounded-full" />
                </div>
            </Link>
        </div>
        <div>
            <div className='relative right-16'>
                <ul className="menu clearfix">
                    <li className="parent p-2">
                        <a href="">Login</a>
                        <ul className="children">
                            <li><a onClick={openLoginPopup}>Employee</a></li>
                        </ul>
                    </li>
                    <li className="parent p-2">
                        <a href="">Register</a>
                        <ul className="children">
                          <li><a onClick={openRegisternPopup}>Employee</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {loginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="">
                <Login onClose={closeLoginPopup} />
            </div>
        </div>
    )}
    {registerPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="">
                <EmployerRegistration onClose={closeRegisterPopup} />
            </div>
        </div>
    )}
</div>
  );
};

export default Navbar;
