
import React from 'react';




import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faComments, faSearch, faInbox, faQuestion, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FaUser, FaList, FaBuilding, FaCog, FaLayerGroup, FaStar, FaBriefcase, FaEye, FaPencilAlt, FaTrash, FaHome } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="MainSideBar flex h-full bg-black">
      <aside className={`w-64 bg-black h-screen shadow-md ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <nav className="mt-4">

        <Link to={{
            pathname: '/admindashboard'
          }}>
            <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
              <FaHome className="mr-2 text-xl" />
              DashBoard
            </a>
          </Link>

          <Link to={{
            pathname: '/candidates'
          }}>
            <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
              <FaUser className="mr-2 text-xl" />
              Candidates
            </a>
          </Link>


          <Link to="/viewshortlistedcandidates">
            <a href="#" className="flex items-center px-4 py-3 text-white  hover:text-white text-bold hover:bg-gray-800">
              <FaList className="mr-2 text-xl" />
              Shortlisted Candidates
            </a>
          </Link>


          <Link to={{ pathname: '/employer' }}>
            <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaBuilding className="mr-2 text-xl" />
              Employers
            </a>
          </Link>

          <Link to={{ pathname: '/viewemployerpackages' }}>
            <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaLayerGroup className="mr-2 text-xl" />
              View Employers by Package
            </a>
          </Link>

          <Link to={{ pathname: '/newJobList' }}>
            <a href="#" className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaBriefcase className="mr-2 text-xl" />
              Job List
            </a>
          </Link>

          <Link to={{ pathname: '/subscriptionmonthly' }}>
            <a  className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaStar className="mr-2 text-xl" />
              Subscription Employers
            </a>
          </Link>

          <Link to={{ pathname: '/studentfreesubcription' }}>
            <a  className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaStar className="mr-2 text-xl" />
              Subscription Students
            </a>
          </Link>

          {/* <Link to={{ pathname: '/generatereport' }}>
            <a  className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FaStar className="mr-2 text-xl" />
              Generate Report
            </a>
          </Link> */}

        
          

         
          {/* <Link to="/searchcv">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon icon={faSearch} className="w-6 h-6 mr-2 text-amber-300" />
              Search CV
            </a>
          </Link> */}
        
         

         
        </nav>
      </aside>

      <button className="IconBtnSideBar lg:hidden bg-white p-2 rounded-md" onClick={handleToggleSidebar}>
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-gray-800" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
