import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faUser, faComments, faSearch, faInbox, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-full w-full">
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="text-black" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`w-64 bg-black h-screen shadow-md ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        {/* Sidebar Header */}
        {/* Uncomment the lines below if you want to add a header to the sidebar */}
        {/* <div className="flex items-center justify-center h-16 bg-blue-500 text-white">
          <span className="text-2xl font-semibold">Your Company</span>
        </div> */}

        {/* Sidebar Content */}
        <nav className="mt-4">
          <Link to={{
            pathname: '/PostInternship'
          }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 mr-2 text-amber-300" />
              Post Internship
            </a>
          </Link>

          <Link to={{
            pathname: '/jobs'
          }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6 mr-2 text-amber-300" />
              Internship
            </a>
          </Link>

          <Link to="/candidates">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 mr-2 text-amber-300" />
              Shortlisted Candidates
            </a>
          </Link>

          <Link to={{ pathname: '/weeklycalender' }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faComments} className="w-6 h-6 mr-2 text-amber-300" />
              Interviews
            </a>
          </Link>

          <Link to={{ pathname: '/searchcv' }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-2 text-amber-300" />
              Search CV
            </a>
          </Link>

          <Link to={{ pathname: '/message' }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faInbox} className="w-6 h-6 mr-2 text-amber-300" />
              Helpdesk
            </a>
          </Link>

          <Link to={{ pathname: '/faq' }}>
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faQuestion} className="w-6 h-6 mr-2 text-amber-300" />
              FAQs
            </a>
          </Link>
        </nav>
      </aside>


    </div>
  );
};

export default Sidebar;
