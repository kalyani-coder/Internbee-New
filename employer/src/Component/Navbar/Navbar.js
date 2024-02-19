import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Newnavbar.css';
import logo from '../../Assets/yellow_header1.png';
import { FaCrown } from "react-icons/fa";
const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
 
  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };

  const emploeLoggedOut = () => {
    localStorage.clear();
    // Redirect to login page
    navigate("/login")
  };

  return (
    <nav className="flex items-center justify-between p-4" style={{ backgroundColor: '#FFBD59' }}>
      <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" style={{width:'15rem',height:'5rem'}} />
      </div>
      <div className="flex items-center">
        <button
          className="lg:hidden nav-toggle"
          onClick={handleToggle}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </button>
        
        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/home" className="text-black hover:text-black text-lg">
                Employers
              </Link>
            </li>
            
            <li>
              <Link to="/postinternship" className="text-black hover:text-black text-lg">
                Internships
              </Link>
            </li>
            <div  className='mb-3'>
            <li >
            <FaCrown />
              <Link to="/packages" className="text-black hover:text-black text-lg ">
                Plans & Pricing
              </Link>
            </li>
            </div>
            <li>
              <div className="relative group">
                <button className="text-black hover:text-black flex items-center h-12 w-12 text-lg">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2a3 3 0 0 1 6 0v2"
                    />
                  </svg>
                  Profile
                </button>

                <ul className="absolute hidden bg-black text-white p-2 space-y-2 rounded-md transition duration-300 ease-in-out group-hover:block w-48">
                  <li>
                    <Link to="/view-profile-page" className="flex items-center">
                      <span className="mr-2">👤</span> View Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/accountsetting" className="flex items-center">
                      <span className="mr-2">🔧</span> Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/packages" className="flex items-center">
                      <span className="mr-2">🔄</span> Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="flex items-center">
                      <span className="mr-2">❓</span> Help
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button onClick={emploeLoggedOut} className="bg-black text-white rounded-md px-4 py-2 hover:bg-white hover:text-black max-w-xs transition duration-300 ease-in-out hover:scale-110">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
