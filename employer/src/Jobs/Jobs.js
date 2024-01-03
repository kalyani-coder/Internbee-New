import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";

const Jobs = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedInternshipId, setExpandedInternshipId] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await fetch(
          `http://localhost:8000/api/postinternship/userId/${userId}`
        );
        const data = await response.json();
        setInternships(data);
        setFilteredInternships(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to filter internships based on search input
  const filterInternships = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = internships.filter(
      (internship) =>
        internship.company_Name.toLowerCase().includes(lowerSearchTerm) ||
        internship.job_Title.toLowerCase().includes(lowerSearchTerm) ||
        internship.skills.toLowerCase().includes(lowerSearchTerm)
    );
    setFilteredInternships(filtered);
  };

  // Function to handle "View More" button click
  const handleToggleDetails = (internshipId) => {
    setExpandedInternshipId((prevId) =>
      prevId === internshipId ? null : internshipId
    );
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Internship List</h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search by company, job title, or skills"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={filterInternships}
            className="w-full p-2 border rounded mb-4"
          />

          {/* Display Message for No Results */}
          {searchTerm && filteredInternships.length === 0 && (
            <p className="text-red-500">No matching results found.</p>
          )}

          {/* Internship List */}
          <ul className="grid gap-4">
            {filteredInternships.map((internship) => (
              <li key={internship._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">
                  {internship.job_Title}
                </h2>
                <p className="text-gray-600">
                  Company: {internship.company_Name}
                </p>
                <p className="text-gray-600">Skills: {internship.skills}</p>

                {/* Internship Details */}
                <div
                  className={`transition-all mt-2 overflow-hidden ${
                    expandedInternshipId === internship._id
                      ? "max-h-full"
                      : "max-h-0"
                  }`}
                >
                  <p>Location: {internship.location}</p>
                  <p>Start Date: {internship.start_Date}</p>
                  <p>End Date: {internship.end_Date}</p>
                  <p>Job Type: {internship.job_Type}</p>
                  <p>Position: {internship.position}</p>
                  <p>Job Description: {internship.job_Description}</p>
                </div>

                {/* View More Button */}
                {expandedInternshipId !== internship._id && (
                  <button
                    className="bg-amber-300 text-black p-2 rounded mt-2 transition-all"
                    onClick={() => handleToggleDetails(internship._id)}
                    style={{ width: "100%" }}
                  >
                    View More
                  </button>
                )}

                {/* View Less Button */}
                {expandedInternshipId === internship._id && (
                  <button
                    className="bg-amber-300 text-black p-2 rounded mt-2 transition-all"
                    onClick={() => handleToggleDetails(internship._id)}
                    style={{ width: "100%" }}
                  >
                    View Less
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
