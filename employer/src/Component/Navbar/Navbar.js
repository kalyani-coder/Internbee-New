import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from'../../Assets/Interns_bee-removebg-preview.png'
import logo from "../../Assets/Interns_beeeeeeeee-log.png"

const Navbar = () => {
  const navigate =  useNavigate()
  
  const emploeLoggedOut = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <nav className="flex items-center justify-between p-4" style={{ backgroundColor: '#FFBD59' }}>
     <Link to={'/'}>
      <div className="flex items-center">
        <img
          src={logo} alt="Logo"className="h-14" style={{width:'15rem'}}/>
      </div>
      </Link>
      <div className="flex items-center">

        <ul className="flex items-center space-x-4">
          <li>
            <a href="/home" className="text-white hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="/aboutus" className="text-white hover:text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="/postinternship" className="text-white hover:text-black">
              Internships
            </a>
          </li>
          {/* Profile button with links */}
          <li className="relative group">
            <button className="text-white hover:text-black flex items-center h-12 w-12">
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
              <Link to={{ pathname: "/view-profile-page" }}>
                <li>
                  <a href="/view-profile-page" className="flex items-center">
                    <span className="mr-2">👤</span> View Profile
                  </a>
                </li>
              </Link>
              <li>
                <Link to={{ pathname: '/accountsetting' }}>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">🔧</span> Settings
                  </a>
                </Link>
              </li>
              <li>
                <Link to={{ pathname: "/packages" }}>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">🔄</span> Subscriptions
                  </a>
                </Link>
              </li>
              <li>
                <a href="/faq" className="flex items-center">
                  <span className="mr-2">❓</span> Help
                </a>
              </li>
            </ul>
          </li>
          {/* End of Profile button with links */}
          <li>
            <Link to={'/'}>

              <button onClick={emploeLoggedOut}
               className="bg-amber-300 text-white bg-black rounded-md px-4 py-2 hover:text-amber-300 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                Log out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;