
import React from 'react';

// Import FontAwesomeIcon and necessary icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faComments, faSearch, faInbox, faQuestion } from '@fortawesome/free-solid-svg-icons';
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

          {/* Jobs link with blue icon */}
          <Link to={{
            pathname: '/jobs' }}>
          <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 mr-2 text-amber-300" />
            Internship
          </a>
          </Link>
          {/* Candidates link with green icon */}
          <Link to="/candidates">
          <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-2 text-amber-300" />
            Candidates
          </a>
          </Link>

          {/* Interviews link with purple icon */}
          <Link to={{pathname:'/weeklycalender'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faComments} className="w-6 h-6 mr-2 text-amber-300" />
            Interviews
          </a>
          </Link>

          {/* Search CV link with yellow icon */}
          <Link to={{pathname:'/searchcv'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-2 text-amber-300" />
            Search CV
          </a>
          </Link>
          {/* Messages link with orange icon */}
          <Link to={{pathname:'/message'}}>
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faInbox} className="w-6 h-6 mr-2 text-amber-300" />
            Helpdesk
          </a>
          </Link>

          {/* FAQs link with pink icon */}
          <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
            <FontAwesomeIcon icon={faQuestion} className="w-6 h-6 mr-2 text-amber-300" />
            FAQs
          </a>
        </nav>

      </aside>

      {/* Main Content */}
      {/* Main content container with flex-1 (takes remaining space) and padding */}
      <main className="flex-1 p-4">
        {/* Your main content goes here */}
      </main>

    </div>
  );
};

// Export the EmployerSidebar component as the default export
export default Sidebar;
