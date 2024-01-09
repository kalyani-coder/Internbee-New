import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from './../Footer/Footer';
import { FaTrash } from "react-icons/fa";
import './ShorlistedCandidates.css'

const ShortlistedCandidates = () => {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [candidateToDelete, setCandidateToDelete] = useState(null);

  
    const fetchShortlistedCandidates = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/applyInternship/shortlisted");
        const data = await response.json();
        setShortlistedCandidates(data);
      } catch (error) {
        console.error("Error fetching shortlisted candidates:", error);
      }
    };

    useEffect(() => {
      // Call the fetchShortlistedCandidates function
      fetchShortlistedCandidates();
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
      const response = await fetch(`http://localhost:8000/api/applyInternship/shortlisted/${candidateToDelete._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If deletion is successful, fetch updated data
        await fetchShortlistedCandidates();
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
        <div>
          <Sidebar />
        </div>

        <div className="flex mt-5">
          <div className="p-10 flex">
            <div className="">
              <h1 className="text-3xl font-bold mb-4 mt-8">
                Shortlisted Candidates
              </h1>

              <div className="table-container overflow-x-auto">
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Company Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shortlistedCandidates.map((candidate, index) => (
                      <tr key={candidate._id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">{candidate.InternName}</td>
                        <td className="py-2 px-4 border-b text-lg">{candidate.empName}</td>
                        <td className="py-2 px-4 border-b text-lg">{candidate.location}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleViewMore(candidate)}
                          >
                            View More
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">
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

      {selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close cursor-pointer" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="modal-content">
              <h2 className="text-2xl font-bold mb-4">Candidate Details</h2>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>{selectedCandidate.InternName}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>
                      <a href={`mailto:${selectedCandidate.InternEmail}`} target="_blank" rel="noopener noreferrer">
                        {selectedCandidate.InternEmail}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Employer Name:</strong></td>
                    <td>{selectedCandidate.empName}</td>
                  </tr>
                  <tr>
                    <td><strong>Passout Year:</strong></td>
                    <td>{selectedCandidate.end_Date}</td>
                  </tr>
                  <tr>
                    <td><strong>Key Skills:</strong></td>
                    <td>{selectedCandidate.skills}</td>
                  </tr>
                  {/* Add other details you want to display */}
                </tbody>
              </table>
              <hr className="my-4 border-yellow-500" /> {/* Horizontal line */}
              <hr className="w-0.5 h-full bg-yellow-500 mx-4" /> {/* Vertical line */}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ShortlistedCandidates;
