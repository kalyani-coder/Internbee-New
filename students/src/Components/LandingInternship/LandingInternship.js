import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";

import { FiUser } from "react-icons/fi";
import { FaMoneyBill, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";


import "./LandingInternship.css";
import Navbar from './../Navbar';
import Footer from './../Footer';
import Login from './../Signin';

const LandingInternship = () => {
  const companiesRef = useRef(null);
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [mainSearchQuery, setMainSearchQuery] = useState("");
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [allInternships, setAllInternships] = useState([]);
  const [loginPopup, setLoginPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 4;

  const fetchInternshipData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/postinternship/");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      const reversedSortedJobs = data.reverse();
      setAllInternships(reversedSortedJobs);
      setFilteredInternships(reversedSortedJobs);
    } catch (error) {
      console.error("There was a problem fetching internship data:", error);
    }
  };

  useEffect(() => {
    fetchInternshipData();
  }, []);

  const handleProfileIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleCreateProfile = () => {
    navigate("/Profile");
  };

  const handleViewProfile = () => {
    navigate("/viewprofile");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const filterByStipendRange = (minStipend, maxStipend) => {
    const filtered = allInternships.filter((internship) => {
      const stipend = parseInt(internship.stipend);
      return stipend >= minStipend && stipend <= maxStipend;
    });
    setFilteredInternships(filtered);
  };

  const filterByLocation = (location) => {
    if (location === "All") {
      setFilteredInternships(allInternships);
    } else {
      const filtered = allInternships.filter(
        (internship) =>
          internship.location.toLowerCase() === location.toLowerCase()
      );
      setFilteredInternships(filtered);
    }
  };

  const filterByJobType = (jobType) => {
    const filtered = allInternships.filter(
      (internship) =>
        internship.job_Type.toLowerCase() === jobType.toLowerCase()
    );
    setFilteredInternships(filtered);
  };

  const filterByJobTitle = (jobTitle) => {
    if (jobTitle === "All") {
      setFilteredInternships(allInternships);
    } else {
      const filtered = allInternships.filter(
        (internship) => internship.job_Title === jobTitle
      );
      setFilteredInternships(filtered);
    }
  };

  const handleMainSearch = () => {
    const lowerCaseQuery = mainSearchQuery.toLowerCase();

    const filtered = allInternships.filter((item) => {
      const {
        job_Title,
        empName,
        position,
        location,
        skills,
      } = item;

      const skillsArray = skills.split(" ");

      return (
        job_Title.toLowerCase().includes(lowerCaseQuery) ||
        empName.toLowerCase().includes(lowerCaseQuery) ||
        position.toLowerCase().includes(lowerCaseQuery) ||
        location.toLowerCase().includes(lowerCaseQuery) ||
        skillsArray.some((skill) =>
          skill.toLowerCase().includes(lowerCaseQuery)
        )
      );
    });

    setFilteredInternships(filtered);
  };

  const indexOfLastInternship = currentPage * internshipsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  const currentInternships = filteredInternships.slice(
    indexOfFirstInternship,
    indexOfLastInternship
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredInternships.length / internshipsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const openLoginPopup = () => {
    setLoginPopup(true);
};

const closeLoginPopup = () => {
    setLoginPopup(false);
};

  return (
    <div className="bg-gray-50">
      
    <div>
    <Navbar />

</div>

      <div className="FilterSectionMain flex">
        <div className="flex flex-col items-center Internships-card">
          <div className="mt-20 head mb-10 text-2xl font-bold flex items-center justify-center">
          <h1 className="text-2xl text-amber-500 font-bold md:text-4xl mx-8 mt-20">Total Internships {allInternships.length}</h1>
          </div>

          {currentInternships.length > 0 ? (
            currentInternships.map((internship) => (
              <div
                key={internship.id}
                className="InternCard ml-40 card w-98 m-2 rounded-md flex flex-grow justify-between items-center shadow-md overflow-hidden"
                style={{ width: "90%" }}
              >
                <div
                  className="intern-card-all-the-information-abtt flex-grow pl-4 pr-4 py-4 "
                  style={{ width: "100%" }}
                >
                  <h2 className="card-title text-xl font-semibold text-gray-800">
                    {internship.job_Title}
                  </h2>
                  <p className="card-company text-lg text-gray-700">
                    Company Name : {internship.company_Name}
                  </p>
                  <div className="blockcard flex justify-between items-center my-2 gap-3 ">
                    <div className="flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      <p className="card-company text-sm text-gray-700">
                        Start Date : {internship.start_Date}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBill className="mr-2 text-lg" />
                      <p className="card-location text-sm text-gray-700">
                        &#x20B9;{internship.stipend}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-sm" />
                      <p className="card-duration text-sm text-gray-700">
                        {internship.location}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      <p className="card-duration text-sm text-gray-700">
                        End Date : {internship.end_Date}
                      </p>
                    </div>
                  </div>
                  <p className="card-description text-sm text-gray-700 my-2">
                    Internship Type : {internship.job_Type}
                  </p>
                  <div>
                    <p className="card-skills text-sm text-gray-700 my-2">
                      Skills: {internship.skills}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="mr-2 text-" />
                    <p className="card-duration text-sm text-gray-700">
                      Duration : {internship.position}
                    </p>
                  </div>
                  <div className="flex justify-center">
                
                    <button onClick={openLoginPopup}
                    className="text-black p-2 rounded-lg btn-fro-the-view-btn-apply-internship-cardss bg-yellow-400 hover:bg-yellow-500 sm:min-w-0 sm:px-4 md:px-2 lg:px-4"
                  >
                    View
                  </button>
                  
                    
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-36 text-orange-400">
              <p>No internships found.</p>
            </div>
          )}
          {filteredInternships.length > internshipsPerPage && (
            <ul className="pagination mb-2 flex justify-center">
              <li className="page-item p-2">
                <button onClick={prevPage} className="page-link text-orange-400 border-1 border-orange-400 hover:bg-orange-400 hover:text-black">
                  Previous
                </button>
              </li>
              {Array.from({ length: Math.ceil(filteredInternships.length / internshipsPerPage) }).map((_, index) => (
                <li key={index} className="page-item p-2">
                  <button onClick={() => paginate(index + 1)} className="page-link text-orange-400 border-1 border-orange-400 hover:bg-orange-400 hover:text-black">
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item p-2">
                <button onClick={nextPage} className="page-link text-orange-400 border-1 border-orange-400 hover:bg-orange-400 hover:text-black">
                  Next
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="mt-20">
          <div className="mb-10 mt-20">
            <div className="head text-2xl font-bold flex items-center justify-center">
              <h1 className="text-center">Search Your Dream Internship here</h1>
            </div>
            <div className="inputinternship mt-9">
              <div className="flex justify-center p-2">
                <input
                  type="text"
                  placeholder="Enter skills/designations/companies"
                  value={mainSearchQuery}
                  onChange={(e) => setMainSearchQuery(e.target.value)}
                  className="input rounded-full  text-orange-400 border-1 border-orange-400 focus:border-orange-400 input-box-for-the-search-bar-container-internship-page"
                />
              </div>
              <div className="flex justify-center p-2 mt-2">
                <button
                  className="btnintern bg-white text-orange-400 border-1 border-orange-400 hover:bg-black hover: rounded-md"
                  onClick={handleMainSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="filter-intership bg-white border border-orange-400 shadow-md rounded-md overflow-hidden p-7 mt-2">
            <h2 className="text-lg font-semibold mb-4">All Filters</h2>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Job Title</h3>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  const selectedJobTitle = e.target.value;
                  filterByJobTitle(selectedJobTitle);
                }}
              >
                <option value="All">All</option>
                {filteredInternships.map((internship) => (
                  <option key={internship.id} value={internship.job_Title}>
                    {internship.job_Title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Location</h3>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  const selectedLocation = e.target.value;
                  filterByLocation(selectedLocation);
                }}
              >
                <option value="All">All</option>
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Stipend</h3>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  const [min, max] = e.target.value.split("-").map(Number);
                  filterByStipendRange(min, max);
                }}
              >
                <option value="0-10000000">Any</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000-10000">5000-10000</option>
                <option value="10000-20000">10000-20000</option>
              </select>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Skils</h3>
              <select className="w-full p-2 border rounded">
                <option value="0-10000000">Any</option>
              </select>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Other Filters</h3>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      filterByJobType("part-time");
                    } else {
                      setFilteredInternships(allInternships);
                    }
                  }}
                />
                <span>Part-time</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      filterByJobType("full-time");
                    } else {
                      setFilteredInternships(allInternships);
                    }
                  }}
                />
                <span>Full-time</span>
              </label>
            </div>
          </div>
        </div>
        {loginPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                <div className="">
                    <Login onClose={closeLoginPopup} />
                </div>
            </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LandingInternship;
