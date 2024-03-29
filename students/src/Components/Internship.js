// Import necessary modules and components
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../Assets/yellow_header1.png";
import { FiUser } from "react-icons/fi";
import { FaMoneyBill, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import Footer from "../Components/Footer";
// import '../Components/UpdatedNav/Internal_Navbar.js';
import "../Components/UpdatedNav/Internal_Navbar";
import Internal_Navbar from "../Components/UpdatedNav/Internal_Navbar";
import "../Components/Internship.css";
// Define the Internship component
const Internship = () => {
  // Refs for scrolling
  const companiesRef = useRef(null);

  // React Router's navigate function
  const navigate = useNavigate();

  // State for profile dropdown and search
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const [mainSearchQuery, setMainSearchQuery] = useState("");
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [allInternships, setAllInternships] = useState([]);

  const fetchInternshipData = async () => {
    try {
      const response = await fetch(
        "https://backend.internsbee.com/api/postinternship/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();

      // Reverse the sorted array
      const reversedSortedJobs = data.reverse();

      // Update state with fetched data
      setAllInternships(reversedSortedJobs);
      setFilteredInternships(reversedSortedJobs);
    } catch (error) {
      console.error("There was a problem fetching internship data:", error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchInternshipData(); // Fetch data from the API
  }, []);

  // Function to handle profile icon click
  const handleProfileIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Function to navigate to the user's profile
  const handleCreateProfile = () => {
    navigate("/Profile");
  };
  const handleViewProfile = () => {
    navigate("/viewprofile");
  };
  // Function to handle user logout
  const handleLogout = () => {
    navigate("/login");
  };

  // Function to scroll to the companies section
  // const handleCompaniesClick = () => {
  //   if (companiesRef.current) {
  //     companiesRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const filterByStipendRange = (minStipend, maxStipend) => {
    const filtered = allInternships.filter((internship) => {
      const stipend = parseInt(internship.stipend); // Convert stipend to integer for comparison
      return stipend >= minStipend && stipend <= maxStipend;
    });
    setFilteredInternships(filtered);
  };

  const filterByLocation = (location) => {
    if (location === "All") {
      setFilteredInternships(allInternships); // Show all internships if "All" or "Any" is selected
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

  // Function to handle the Navbar search logic

  // Function to handle the main search logic
  const handleMainSearch = () => {
    const lowerCaseQuery = mainSearchQuery.toLowerCase();

    const filtered = allInternships.filter((item) => {
      const {
        job_Title,
        empName,
        position,
        location,
        skills, // Include skills field in the destructuring
      } = item;

      const skillsArray = skills.split(" "); // Split the skills string into an array

      return (
        job_Title.toLowerCase().includes(lowerCaseQuery) ||
        empName.toLowerCase().includes(lowerCaseQuery) ||
        position.toLowerCase().includes(lowerCaseQuery) ||
        location.toLowerCase().includes(lowerCaseQuery) ||
        skillsArray.some((skill) =>
          skill.toLowerCase().includes(lowerCaseQuery)
        )
        // Add other checks as needed
      );
    });

    setFilteredInternships(filtered);
  };

  // JSX structure for the Internship component
  return (
    <>
      <Internal_Navbar />

      {/* Search Section */}
      <div className=" mt-20">
        <div className=" head  mb-10 text-2xl font-bold flex flex-col items-center justify-center">
          <h1 className="mt-20">Search Your Dream Internship here</h1>
        </div>
        <div className="inputinternship">
          {/* Input for main search query */}
          <div>
            <input
              type="text"
              placeholder="Enter skills/designations/companies"
              value={mainSearchQuery}
              onChange={(e) => setMainSearchQuery(e.target.value)}
              className="input rounded-full border border-gray-500 focus:border-gray-400 input-box-for-the-search-bar-container-internship-page"
            />
          </div>
          {/* Main Search button */}
          <div>
            <button
              className="btnintern bg-black hover:bg-black text-white rounded-md"
              onClick={handleMainSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div
        className="FilterSectionMain flex"
        // style={{ width: "60%" }}
      >
        {/* <div className="FilterSectionMain flex " style={{ width: '100%', flexDirection: "column", justifyContent:'center', alignItems:'center'}}> */}

        <div
          className="filter w-1/5 bg-gray-100 p-7  h-1/5 mt-2"
          style={{ width: "31%" }}
        >
          {/* <div className="filter  bg-gray-100 p-7  h-1/5 mt-2" style={{ width: '31%' }}> */}

          <h2 className="text-lg font-semibold mb-4">All Filters</h2>
          {/* Profile filter */}
          {/* <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">Profile</h3>
            <select className="w-full p-2 border rounded">
              <option value="">All</option>
              <option value="">Web development</option>
              <option value="">Mobile Development</option>

            </select>
          </div> */}
          {/* Location filter */}
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
              {/* Add more locations as needed */}
            </select>
          </div>
          {/* Stipend filter */}
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
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Other filters */}

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
                    // If unchecked, reset the filter (show all)
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
                    // If unchecked, reset the filter (show all)
                    setFilteredInternships(allInternships);
                  }
                }}
              />
              <span>Full-time</span>
            </label>
          </div>
        </div>

        {/* Display Internships Section */}
        <div
          className="flex flex-col items-center Internships-card "
          style={{}}
        >
          {/* <div className="flex flex-col items-center  Internships-card " style={{}}> */}

          {/* Map through the filtered internships (or all internships if not filtered) */}
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="InternCard ml-40 card w-98 m-2 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden"
                style={{ width: "90%" }}
              >
                <div
                  className="intern-card-all-the-information-abtt flex-grow pl-4 pr-4 py-4 "
                  style={{ width: "100%" }}
                >
                  {/* Internship details */}
                  <h2 className="card-title text-xl font-semibold text-gray-800 ">
                    {internship.job_Title}
                  </h2>
                  <p className="card-company text-lg text-gray-700">
                    Company Name : {internship.company_Name}
                  </p>
                  <div className="blockcard flex justify-between items-center my-2 gap-3 ">
                    <div className="flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      <p className="card-company text-sm text-gray-700 ">
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
                  {/* <p className="card-description text-sm text-gray-700 my-4">
                    {internship.job_Description}
                  </p> */}
                  <div className="flex justify-between">
                    <div className="    ml-[78%]">
                      <Link to={`/apply-internship/${internship._id}`}>
                        <button
                          className="text-black p-2 rounded-lg btn-fro-the-view-btn-apply-internship-cardss"
                          style={{ backgroundColor: "#FFBD59" }}
                        >
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Display a message if no internships are found
            <p>No internships found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

// Export the Internship component
export default Internship;
