
import React, { useState } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Sidebar from '../Component/Sidebar/Sidebar';
import Footer from '../Component/Footer/Footer';

const Jobs = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return ( 
    <>
    <div><Navbar/></div>
    <div className='flex'>
    <div><Sidebar/></div>
    <div className="max-w-md mx-auto mt-8 p-6 bg-amber-300 rounded shadow-md h-96">
 
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpansion}
      >
       
        <h2 className="text-2xl font-bold">Search Posted Internship</h2>
        <svg
          className={`h-6 w-6 ${isExpanded ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          ></path>
        </svg>
      </div>

      {isExpanded && (
        <div className="mt-4">
          {/* Job Title */}
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-sm font-medium text-black">
              Internship Title:
            </label>
            <input
              type="text"
              id="internshipTitle"
              name="internshipTitle"
              placeholder="Enter job title"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-black">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Date Posted */}
          <div className="mb-4">
            <label htmlFor="datePosted" className="block text-sm font-medium text-black">
              Date Posted:
            </label>
            <input
              type="date"
              id="datePosted"
              name="datePosted"
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* Search Button */}
          <div>
            <button
              type="button"
              className="bg-black text-amber-300 py-2 px-4 rounded hover:bg-blue-600 hover:text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    <div><Footer/></div>
    </>
  );
};

export default Jobs;


