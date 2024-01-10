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

                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle bg-secondary fw-bold text-dark py-2 px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link to={'/login'}>
                                    <a class="dropdown-item" > Employers</a>
                                </Link>
                            </li><hr />
                            <li>
                                <Link>
                                    <a class="dropdown-item" > Students </a>
                                </Link>

                            </li>
                        </ul>
                    </div>


                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle bg-secondary fw-bold text-dark py-2 px-6" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link to={'/register'}>
                                    <a class="dropdown-item" > Employers </a>
                                </Link>
                            </li><hr />
                            <li>
                                <Link>
                                    <a class="dropdown-item" > Students </a>
                                </Link>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
