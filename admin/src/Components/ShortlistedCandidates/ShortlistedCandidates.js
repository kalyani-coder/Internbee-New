import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons
import Footer from './../Footer/Footer';

const ShortlistedCandidates = () => {
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      companyname: "ABC Company",
      location: "City A",
      profile: "Software Engineer",
      qualification: "Bachelor's in Computer Science",
      skills: "JavaScript, React, Node.js",
      contact: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      companyname: "XYZ Company",
      location: "City B",
      profile: "Data Scientist",
      qualification: "Master's in Data Science",
      skills: "Python, SQL, Machine Learning",
      contact: "987-654-3210",
      email: "jane.smith@example.com",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleSearch = () => {
    const newData = dummyData.filter((data) =>
      data.companyname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleViewProfile = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const renderCandidateDetails = () => {
    if (!selectedCandidate) {
      return null;
    }

    const closeModal = () => {

      setSelectedCandidate(null);
    };

    return (
      <div className="ml-10 mt-4" style={{ width: "40%" }}>
        <div className="bg-white p-6 border rounded">
        <span
            className="close cursor-pointer font-bold text-xl" // Adjust text-lg for font size
            onClick={closeModal}
          >
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">
            {selectedCandidate.name}'s Profile
          </h2>
          <p className="my-2">
            <strong>Qualification:</strong> {selectedCandidate.qualification}
          </p>
          <p className="my-2">
            <strong>Location:</strong> {selectedCandidate.location}
          </p>
          <p className="my-2">
            <strong>Skills:</strong> {selectedCandidate.skills}
          </p>
          <p className="my-2">
            <strong>Contact Number:</strong> {selectedCandidate.contact}
          </p>
          <p className="my-2">
            <strong>Email:</strong> {selectedCandidate.email}
          </p>
          <button className="bg-black text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 border border-black rounded mb-4 mr-4">
            View Resume
          </button>
          <button className="bg-black text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 border border-black rounded inline-flex items-center mb-4">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </button>
          {/* <button
            onClick={() => setSelectedCandidate(null)}
            className="bg-black text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="flex">
          <div className="p-10 flex">
            <div className="">
              <h1 className="text-3xl font-bold mb-4 mt-8">
                Shortlisted Candidates
              </h1>

              {/* Search input and button */}
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search Company Name"
                  className="border border-gray-300 p-2 mr-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="bg-black text-white py-2 px-4 border rounded"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>

              {/* Table */}
              <div className="table-container overflow-x-auto">
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Company Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((data) => (
                      <tr key={data.id}>
                        <td className="py-2 px-4 border-b text-lg">{data.id}</td>
                        <td className="py-2 px-4 border-b text-lg">{data.name}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {data.companyname}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">{data.location}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleViewProfile(data)}
                          >
                            View More
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">
                          <button className="text-red-500 hover:text-red-700">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Render candidate details */}
            {renderCandidateDetails()}
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default ShortlistedCandidates;
