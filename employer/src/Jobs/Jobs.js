import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Sidebar from '../Component/Sidebar/Sidebar';
import Footer from '../Component/Footer/Footer';

const Jobs = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchCriteria, setSearchCriteria] = useState({
    internshipTitle: '',
    location: '',
    datePosted: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      // Make a request to the API with search criteria
      const response = await fetch(`http://localhost:8000/api/postinternship?title=${searchCriteria.internshipTitle}&location=${searchCriteria.location}&date=${searchCriteria.datePosted}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div><Navbar/></div>
      <div className='flex'>
        <div><Sidebar/></div>
        <div className="flex-1 flex justify-start p-6 flex-col">
          <div className="max-w-md mt-8 p-6 bg-amber-300 rounded shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer w-full"
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
              <div className="w-full mt-4">
                <div className="mb-4 w-full">
                  <label htmlFor="internshipTitle" className="block text-sm font-medium text-black">
                    Internship Title:
                  </label>
                  <input
                    type="text"
                    id="internshipTitle"
                    name="internshipTitle"
                    placeholder="Enter job title"
                    value={searchCriteria.internshipTitle}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label htmlFor="location" className="block text-sm font-medium text-black">
                    Location:
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    value={searchCriteria.location}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label htmlFor="datePosted" className="block text-sm font-medium text-black">
                    Date Posted:
                  </label>
                  <input
                    type="date"
                    id="datePosted"
                    name="datePosted"
                    value={searchCriteria.datePosted}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="w-full">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-black text-amber-300 py-2 px-4 rounded hover:bg-blue-600 hover:text-white focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className='flex'>
      <div className="max-w-md mt-4 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {searchResults.map((result) => (
              <li key={result._id}>
                {/* Display result details as needed */}
                <p>{result.job_Title} - {result.location} - {result.start_Date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>

      
        </div>
      </div>

      {/* Display search results */}
      

      <div><Footer/></div>
    </>
  );
};

export default Jobs;
