import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./HomeNav"

const HomeNav = () => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const companiesRef = useRef(null);
    const internshipsRef = useRef(null);

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleProfileIconClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
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
                navigate('/login');
            } else if (selectedUserType === 'register') {
                navigate('/register');
            }
        }
    };
    const handleInternshipClick = (id) => {
        navigate(`/internship/${id}`);
    };

    const handleViewProfile = () => {

        navigate('/Profile')

    };

    const handleLogout = () => {

        navigate('/login')


    };

    const handleCompaniesClick = () => {
        if (companiesRef.current) {
            companiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInternshipsClick = () => {
        if (internshipsRef.current) {
            internshipsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const Internship = () => {
        navigate('/internship')
    }

    const handleResume = () => {
        navigate('/resume');
    };
    const handleregistration = () => {
        navigate('/register');
    };
    const handleSignin = () => {
        navigate('/login');
    };

    return (
        <div className="mb-10">
            <div className="HomeNav-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">
                <div className="flex items-center space-x-2">
                    <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold homenav-responsive">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                </div>
                {/* <div className="items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                   
                </div> */}
                <div className="flex items-center space-x-6 mr-10">
                    <div className="flex items-center space-x-6">
                        <Link to="/home" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</Link>
                        <Link to="/companies" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Companies</Link>
                        <Link to="/internship" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Internships</Link>
                        <Link to="/blogs" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Blogs</Link>
                    </div>



                    <button
                        className="px-6 py-2 text-xl font-bold border rounded-md focus:outline-none"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                    <button
                        className="px-6 py-2 text-xl font-bold border rounded-md bg-yellow-300 focus:outline-none"
                        onClick={handleRegisterClick}
                    >
                        Register
                    </button>
                    {showDropdown && (
                        <div
                            className="absolute w-36 bg-white border rounded-md shadow-md ml-6"
                            style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                        >
                            <div
                                className="cursor-pointer border-b border-gray-700 py-4 flex flex-col items-center"
                                onClick={() => handleUserTypeSelect('employer')}
                            >
                                Employer
                            </div>
                            <div
                                className="cursor-pointer flex flex-col items-center py-4"
                                onClick={() => handleUserTypeSelect('student')}
                            >
                                Student
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeNav;