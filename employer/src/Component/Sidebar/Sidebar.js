import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUser,
  faComments,
  faSearch,
  faInbox,
  faQuestion,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { MdPeopleAlt } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="MainSideBar flex h-full bg-black">
      <aside
        className={`w-64 bg-black h-screen shadow-md ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <nav className="mt-4">
          <Link to="/PostInternship">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Post Internship
            </a>
          </Link>

          <Link to="/jobs">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Internship
            </a>
          </Link>
          <Link to="/appliedcandidates">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <MdPeopleAlt
                icon={faUser}
                className="w-7 h-7 mr-2 text-amber-300"
              />
              Applied Candidates
            </a>
          </Link>
          <Link to="/candidates">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Shortlisted Candidates
            </a>
          </Link>

          <Link target="_blank" to="https://calendar.google.com/calendar/u/0/r">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faComments}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Interviews
            </a>
          </Link>

          <Link to="/searchcv">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faSearch}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Search CV
            </a>
          </Link>

          <Link to="/message">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faInbox}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              Helpdesk
            </a>
          </Link>

          <Link to="/faq">
            <a className="flex items-center px-4 py-3 text-white hover:text-white text-bold hover:bg-gray-600">
              <FontAwesomeIcon
                icon={faQuestion}
                className="w-6 h-6 mr-2 text-amber-300"
              />
              FAQs
            </a>
          </Link>
        </nav>
      </aside>

      {/* <button className="lg:hidden bg-white" onClick={handleToggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </button> */}
      <button
        className="IconBtnSideBar lg:hidden bg-white p-2 rounded-md"
        onClick={handleToggleSidebar}
      >
        {isSidebarOpen ? (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-gray-800 close-icon"
          />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-gray-800 open-icon" />
        )}
      </button>

      {/* <main className="flex-1 p-4"></main> */}
    </div>
  );
};

export default Sidebar;
