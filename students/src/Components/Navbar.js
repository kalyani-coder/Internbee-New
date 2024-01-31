import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Internsb.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    // const handleLoginClick = (event) => {
    //     const buttonRect = event.target.getBoundingClientRect();
    //     setDropdownPosition({
    //         top: buttonRect.bottom + window.scrollY,
    //         left: buttonRect.left + window.scrollX,
    //     });
    //     setShowDropdown(!showDropdown);
    //     setSelectedUserType('login');
    // };

    // const handleRegisterClick = (event) => {
    //     const buttonRect = event.target.getBoundingClientRect();
    //     setDropdownPosition({
    //         top: buttonRect.bottom + window.scrollY,
    //         left: buttonRect.left + window.scrollX,
    //     });
    //     setShowDropdown(!showDropdown);
    //     setSelectedUserType('register');
    // };

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
                navigate('/login');
            } else if (selectedUserType === 'register') {
                navigate('/register');
            }
        }
    };

    const navigateToStudents = () => {
        window.location.href = 'http://employer.internsbee.com';
    };

    const navigateToStudentsregister = () => {

        window.location.href = 'http://employer.internsbee.com';
    };


    return (
        <div className="mb-10">
            <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">
                <div className="flex items-center space-x-2">
                    <div className='w-20 h-20'>

                        <img src={logo} alt="Logo" className="rounded-full" />
                    </div>
                    <h1 className="text-4xl font-bold ">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                </div>
                {/* <div className="items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                   
                </div> */}
                <div className="flex items-center space-x-6 mr-10">
                    <div className="flex items-center space-x-6">

                        <Link to="/blogs" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Blogs</Link>
                    </div>



                    <div class="dropdown">
                        <button class="bg-yellow-300 text-black fw-bold px-4 py-2 rounded hover:bg-yellow-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Login
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link>
                                    <a onClick={navigateToStudents} class="dropdown-item" > Employers</a>

                                </Link>
                            </li><hr />
                            <li>
                                <Link to={'/login'}>


                                    <a
                                        className="dropdown-item"

                                        style={{ cursor: 'pointer' }}
                                    >
                                        Students
                                    </a>

                                </Link>

                            </li>
                        </ul>
                    </div>



                    <div class="dropdown">
                        <button class="bg-yellow-300 text-black fw-bold px-4 py-2 rounded hover:bg-yellow-600 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link >
                                    <a onClick={navigateToStudentsregister} class="dropdown-item" > Employers </a>
                                </Link>
                            </li><hr />
                            <li>
                                <Link to={'/register'}>

                                    <a
                                        className="dropdown-item"

                                        style={{ cursor: 'pointer' }}
                                    >
                                        Students
                                    </a>
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

