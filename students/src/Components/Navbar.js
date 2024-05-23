import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/white_header1.png';
import './ResponsiveCss/ResponsiveCss.css';
import '../Components/Navbar.css';
import Login from './Signin';
import Registration from "../Components/Registration";

const Navbar = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [loginPopup, setLoginPopup] = useState(false);
    const [registerPopup, setRegisterPopup] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    return (
        <div className="mb-10">
            <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between border">
                <div className="flex items-center space-x-2">
                    <Link to={'/'}>
                        <div className='navbar-logo'>
                            <img src={logo} alt="Logo" className="navbar-logo-for-internsbeestudent w-[12rem] rounded-full" />
                        </div>
                    </Link>
                    <button className="mobile-menu-button md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>

                    </button>
                    <div className={`nav-links md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                        <div className='flex gap-4 p-2'>
                            <Link to='/'>
                                <p className='hover:text-amber-500'>Home</p>
                            </Link>
                            <Link to='/aboutus'>
                                <p className='hover:text-amber-500'>About Us</p>
                            </Link>
                            <Link to='/blogs'>
                                <p className='hover:text-amber-500'>Blogs</p>
                            </Link>
                            <Link to='/LandingInternship'>
                                <p className='hover:text-amber-500'>Internship</p>
                            </Link>
                            <Link to="/TPO">
                                <p className='hover:text-amber-500'>TPO</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`login-register md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <div className='relative'>
                        <ul className="menu clearfix">
                            <li className="parent p-2">
                                <a href="">Login</a>
                                <ul className="children">
                                    <li><a href="">Employee</a></li>
                                    <li><a onClick={openLoginPopup}>Student</a></li>
                                </ul>
                            </li>
                            <li className="parent p-2">
                                <a href="">Register</a>
                                <ul className="children">
                                    <li><a href="">Employee</a></li>
                                    <li><a onClick={openRegisternPopup}>Student</a></li>
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
                        <Registration onClose={closeRegisterPopup} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
