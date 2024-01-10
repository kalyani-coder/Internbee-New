
import React from 'react';


// Import FontAwesomeIcon and necessary icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaList, FaBuilding, FaCog, FaLayerGroup, FaStar, FaBriefcase,FaEye,FaPencilAlt,FaTrash ,FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Define the EmployerSidebar functional component
const Sidebar = () => {

  // Return the JSX structure of the component
  return (
    // Outermost container with flex layout and black background
    <div className="flex h-full w-64 bg-black">

      {/* Sidebar */}
      {/* Sidebar container with a width of 64, black background, and shadow effect */}
      <aside className="w-64 bg-black h-screen shadow-md">

        {/* Sidebar Header */}
        {/* Uncomment the lines below if you want to add a header to the sidebar */}
        {/* <div className="flex items-center justify-center h-16 bg-blue-500 text-white">
          <span className="text-2xl font-semibold">Your Company</span>
        </div> */}

        {/* Sidebar Content */}
        {/* Navigation container with top margin */}
        <nav className="mt-4">

        <Link to={{
            pathname: '/admindashboard' }}>
          <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
          <FaHome className="mr-2 text-xl" />
            DashBoard
          </a>
          </Link>
          {/* Jobs link with blue icon */}
          <Link to={{
            pathname: '/candidates' }}>
          <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
          <FaUser className="mr-2 text-xl" />
            Candidates
          </a>
          </Link>
          {/* Candidates link with green icon */}
          <Link to="/viewshortlistedcandidates">
          <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
          <FaList className="mr-2 text-xl" />
            Shortlisted Candidates
          </a>
          </Link>

          {/* Interviews link with purple icon */}
          <Link to={{pathname:'/employer'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
          <FaBuilding className="mr-2 text-xl" />
            Employers
          </a>
          </Link>

          {/* Search CV link with yellow icon */}
          <Link to={{pathname:'/viewemployerpackages'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
          <FaLayerGroup className="mr-2 text-xl" />
            View Employers by Package
          </a>
          </Link>
          {/* Messages link with orange icon */}
          <Link to={{pathname:'/viewjoblist'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
          <FaBriefcase className="mr-2 text-xl" />
            Job List
          </a>
          </Link>

          {/* FAQs link with pink icon */}
          <Link to={{pathname:'/subscriptionmonthly'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
          <FaStar className="mr-2 text-xl" />
            Subscription
          </a>
          </Link>
         
          <Link to="/settings">
            <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
            <FaCog className="mr-2 text-xl" />
              Settings
            </a>
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      {/* Main content container with flex-1 (takes remaining space) and padding */}
      <main className="flex-1 p-4">
        {/* Your main content goes here */}
      </main>
<div></div>
    </div>
    
  );
};

// Export the EmployerSidebar component as the default export
export default Sidebar;
