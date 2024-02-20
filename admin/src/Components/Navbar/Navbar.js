// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom/dist';


// const Navbar = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove the token from localStorage
//     // Redirect to the login page
//     navigate('/');
//   };

//   return (
//     <nav className="flex items-center justify-between p-4" style={{ backgroundColor: '#FFBD59' }}>
//       <div className="flex items-center">
//         <img
//           src="./Internsb.jpeg"
//           alt=""
//           className="h-16 w-auto"
//         />
//       </div>
//       <div className="flex items-center">
//         {/* <input
//           type="text"
//           placeholder="Search internships"
//           className="border border-gray-300 rounded-md px-4 py-2 mr-4"
//         /> */}
//         <ul className="flex items-center space-x-4">
//           <li>
//             <Link to={{ pathname: "/admindashboard" }}>
//               <a href="#" className="text-white hover:text-black">
//                 Home
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={'/aboutus'}>

//               <a className="text-white hover:text-black">
//                 About Us
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={'/postinternship'}>

//               <a className="text-white hover:text-black">
//                 Internships
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={{ pathname: "/blog" }}>
//               <a href="#" className="text-white hover:text-black">
//                 Blog
//               </a>
//             </Link>
//           </li>
//           {/* Profile button with links */}
//           <li className="relative group">
//             <Link to={'/viewprofile'}>
//               <button className="text-white hover:text-black flex items-center h-12 w-12">
//                 <svg
//                   className="h-6 w-6 mr-2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2a3 3 0 0 1 6 0v2"
//                   />
//                 </svg>
//                 Profile
//               </button>
//             </Link>

//             <ul className="absolute hidden bg-black text-white p-2 space-y-2 rounded-md transition duration-300 ease-in-out group-hover:block w-48">
//               <Link to={{ pathname: "/viewprofile" }}>
//                 <li>
//                   <a href="#" className="flex items-center">
//                     <span className="mr-2">👤</span> View Profile
//                   </a>
//                 </li>
//               </Link>
//               <li>

//                 <a href="#" className="flex items-center">
//                   <span className="mr-2">🔧</span> Settings
//                 </a>

//               </li>
//               <li>

//                 <a href="#" className="flex items-center">
//                   <span className="mr-2">🔄</span> Subscriptions
//                 </a>

//               </li>
//               <li>
//                 <a href="#" className="flex items-center">
//                   <span className="mr-2">❓</span> Help
//                 </a>
//               </li>
//             </ul>
//           </li>
//           {/* End of Profile button with links */}
//           <li>
//             <Link to={'/'}>

//               <button onClick={handleLogout} className="bg-amber-300 text-white bg-black rounded-md px-4 py-2 hover:text-amber-300 max-w-xs transition duration-300 ease-in-out hover:scale-110">
//                 Log out
//               </button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom/dist';
import '../Navbar/Navbar.css';
import YellowHeader from '../../Assets/yellow_header1.png';

const logo=YellowHeader;

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    // Redirect to the login page
    navigate('/');
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

  };

  return (
    <nav className="flex items-center justify-between p-4" style={{ backgroundColor: '#FFBD59' }}>
      <div className="flex items-center">
        <img
          src={logo}
          alt=""
          className="h-16 w-auto"
        />
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
        {/* <input
          type="text"
          placeholder="Search internships"
          className="border border-gray-300 rounded-md px-4 py-2 mr-4"
        /> */}
        <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to={{ pathname: "/admindashboard" }}>
              <a href="#" className="text-white hover:text-black">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/aboutus'}>

              <a className="text-white hover:text-black">
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/postinternship'}>

              <a className="text-white hover:text-black">
                Internships
              </a>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/blog" }}>
              <a href="#" className="text-white hover:text-black">
                Blog
              </a>
            </Link>
          </li>
          {/* Profile button with links */}
          <li className="relative group">
            <Link to={'/viewprofile'}>
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
            </Link>

            <ul className="absolute hidden bg-black text-white p-2 space-y-2 rounded-md transition duration-300 ease-in-out group-hover:block w-48">
              <Link to={{ pathname: "/viewprofile" }}>
                <li>
                  <a href="#" className="flex items-center">
                    <span className="mr-2">👤</span> View Profile
                  </a>
                </li>
              </Link>
              <li>

                <a href="#" className="flex items-center">
                  <span className="mr-2">🔧</span> Settings
                </a>

              </li>
              <li>

                <a href="#" className="flex items-center">
                  <span className="mr-2">🔄</span> Subscriptions
                </a>

              </li>
              <li>
                <a href="#" className="flex items-center">
                  <span className="mr-2">❓</span> Help
                </a>
              </li>
            </ul>
          </li>
          {/* End of Profile button with links */}
          <li>
            <Link to={'/'}>

              <button onClick={handleLogout} className="bg-amber-300 text-white bg-black rounded-md px-4 py-2 hover:text-amber-300 max-w-xs transition duration-300 ease-in-out hover:scale-110">
                Log out
              </button>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

