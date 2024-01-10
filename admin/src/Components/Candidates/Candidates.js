// Candidates.js

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Candidates.css"

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [candidateToDelete, setCandidateToDelete] = useState(null);

  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/studentsdetails");
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      // Call the fetchShortlistedCandidates function
      fetchData();
    }, []);

  

  const handleViewMore = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleClosePopup = () => {
    setSelectedCandidate(null);
  };

   // Function to handle delete confirmation
   const handleDeleteClick = (candidate) => {
    setCandidateToDelete(candidate);
    setShowConfirmation(true);
  };

  // Function to handle cancel delete
  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setCandidateToDelete(null);
  };

  // Function to handle confirmed delete
  const handleConfirmDelete = async () => {
    try {
      // Make the API call for deletion using candidateToDelete._id
      const response = await fetch(`http://localhost:8000/api/studentsdetails/${candidateToDelete._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If deletion is successful, fetch updated data
        await fetchData();
      } else {
        console.error("Failed to delete shortlisted candidate");
      }
    } catch (error) {
      console.error("Error deleting shortlisted candidate:", error);
    }

    // Reset states
    setShowConfirmation(false);
    setCandidateToDelete(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex">
          <div>
            <h1 className="text-3xl font-bold mb-4 mt-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              View Candidate Details
            </h1>
            <div className="flex gap-10">
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                        Sr No
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                        Candidates Name
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                        Location
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                        Designation
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate, index) => (
                      <tr key={candidate._id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {`${candidate.firstName} ${candidate.lastName}`}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.city}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.stream}
                        </td>
                        <td className="py-2 px-4 border-b">
                          {/* <button
                            className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                            onClick={() => handleViewMore(candidate)}
                          >
                            View More
                          </button> */}
                          {candidate.profile_pic && (
                            <img
                              src={candidate.profile_pic}
                              alt={`${candidate.firstName} ${candidate.lastName}`}
                              className="rounded-full h-10 w-10 object-cover"
                            />
                          )}

                        </td>
                        <td className="py-2 px-4 border-b">
                          <div className="actions">

                            <button
                              className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                              onClick={() => handleViewMore(candidate)}
                            >
                              View More
                            </button>

                          </div>
                        </td>
                        <td>
                        <button onClick={() => handleDeleteClick(candidate)}>
                            <FaTrash />
                          </button>
                        </td>


                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to delete this candidate?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button className="not-delete" onClick={handleCancelDelete}>No</button>
        </div>
      )}



      {/* Modal */}
      {selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close cursor-pointer" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="modal-content">
              <h2 className="text-2xl font-bold mb-4">Candidate Details</h2><hr />
              <p>{`Name: ${selectedCandidate.firstName} ${selectedCandidate.lastName}`}</p><hr />
              <p>
                Email:{" "}
                <a href={`mailto:${selectedCandidate.email}`} target="_blank" rel="noopener noreferrer">
                  {selectedCandidate.email}
                </a>
              </p><hr />
              <p>{`Institute Name: ${selectedCandidate.instituteName}`}</p><hr />
              <p>{`Stream: ${selectedCandidate.stream}`}</p><hr />
              <p>{`Pass Out Year: ${selectedCandidate.passOutYear}`}</p><hr />
              <p>{`Key Skills: ${selectedCandidate.keySkills}`}</p><hr />
              <p>{`Languages: ${selectedCandidate.languages}`}</p><hr />
              <p>{`Experience: ${selectedCandidate.experience}`}</p><hr />
              <p>{`Salary Expectations: ${selectedCandidate.salaryExpectations} Rs.`}</p><hr />
              <p>{`City: ${selectedCandidate.city}`}</p><hr />
              <p>{`District: ${selectedCandidate.district}`}</p><hr />
              <p>{`Country: ${selectedCandidate.country}`}</p><hr />
              <p>{`Current Address: ${selectedCandidate.currentaddress}`}</p>
              {/* Add other details you want to display */}
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Candidates;
