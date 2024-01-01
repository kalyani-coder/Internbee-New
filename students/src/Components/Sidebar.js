import React, { useState } from 'react';
import { FaUser, FaCog, FaRocket, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { IoMoonOutline } from 'react-icons/io5';

const Sidebar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateTheme(darkMode ? 'light' : 'dark');
    };

    const updateTheme = (mode) => {
        if (mode === 'dark') {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    };

    return (
        <div className="w-96 h-screen  p-4 border shadow-xl flex flex-col fixed top-0 left-0">
            {/* User information */}
            <div className="mb-6 pb-2 border-b shadow-lm">
                <FaUser className="mr-4  text-6xl" />
                <p className="text-2xl font-bold">User name</p>
                <p className=" text-2xl">test@gmail.com</p>
            </div>

            {/* Preferences section */}
            <div className="mb-6 pb-2 border-b shadow-lg flex items-center">
                <FaCog className="mr-2  text-2xl" />
                <p className=" text-2xl">Preferences</p>
            </div>
            {/* <div className="mb-6 pb-2 border-b shadow-lg flex items-center">
                <IoMoonOutline className="mr-2  text-2xl" />
                <p className=" text-2xl">Night Mode</p>
                <div className="ml-auto">
                   
                    <label className="switch relative inline-block w-10 h-6 cursor-pointer border-radius">
                        <input type="checkbox" className="hidden" onChange={toggleDarkMode} checked={darkMode} />
                        <span className={`slider absolute w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${darkMode ? 'bg-blue-500 transform translate-x-full' : 'bg-blue-500'}`}></span>
                    </label>
                </div>
            </div> */}

            {/* Go Pro */}
            <div className="mb-6 pb-2 border-b shadow-lg flex items-center">
                <FaRocket className="mr-2 text-2xl" />
                <p className=" text-2xl">Go Pro</p>
            </div>

            {/* Help center */}
            <div className="mb-6 pb-2 border-b shadow-lg flex items-center">
                <FaQuestionCircle className="mr-2 text-2xl" />
                <p className=" text-2xl">Help center</p>
            </div>

            {/* Sign out */}
            <div className=" pb-2 border-b shadow-lg flex items-center">
                <FaSignOutAlt className="mr-2  text-2xl" />
                <p className="text-2xl">Sign out</p>
            </div>
        </div>
    );
};

export default Sidebar;
