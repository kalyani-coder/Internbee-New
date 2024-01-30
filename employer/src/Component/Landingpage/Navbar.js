import React, { useState, useRef } from 'react';
import logo from "../../Assets/Internsb.jpeg"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const handleLoginClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.bottom + window.scrollY,
            left: buttonRect.left + window.scrollX,
        });
        setShowDropdown(!showDropdown);
        setSelectedUserType('login');
    };

    const handleRegisterClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.bottom + window.scrollY,
            left: buttonRect.left + window.scrollX,
        });
        setShowDropdown(!showDropdown);
        setSelectedUserType('register');
    };

    const handleUserTypeSelect = (userType) => {
        setShowDropdown(false);

        if (userType === 'employer') {
            if (selectedUserType === 'login') {
                navigate('/employer-login');
            } else if (selectedUserType === 'register') {
                navigate('/employer-register');
            }
        } else if (userType === 'student') {
            if (selectedUserType === 'login') {
                navigate('/Signin');
            } else if (selectedUserType === 'register') {
                navigate('/Registration');
            }
        }
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
            <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">
                <div className="flex items-center ">
                    <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold heading-in-navbar">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                </div>
                {/* <div className="items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                   
                </div> */}
                <div className="flex items-center gap-3 ">

                <div className="flex items-center space-x-6">

                        <Link to={'/blogs'} className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Blogs</Link>
                    </div>

                    <div class="dropdown">
                        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link to={'/login'}>
                                    <a class="dropdown-item" > Employers</a>
                                </Link>
                            </li><hr />

                            {/* <li>
                                <Link>


                                    <a
                                        className="dropdown-item"
                                        onClick={navigateToStudents}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Students
                                    </a>

                                </Link>

                            </li> */}
                        </ul>
                    </div>


                    <div class="dropdown">
                        <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link to={'/register'}>
                                    <a class="dropdown-item" > Employers </a>
                                </Link>
                            </li><hr />
                            {/* <li>

                                <a
                                    className="dropdown-item"
                                    onClick={navigateToStudentsregister}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Students
                                </a>

                            </li> */}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
