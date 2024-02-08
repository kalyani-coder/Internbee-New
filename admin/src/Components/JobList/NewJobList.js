import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import './Joblist.css'

const NewJobList = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [candidateToDelete, setCandidateToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  
    const fetchData = async () => {
      try {
        const response = await fetch("https://backend.internsbee.com/api/applyInternship");
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
      const response = await fetch(`https://backend.internsbee.com/api/applyInternship/${candidateToDelete._id}`, {
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
             Job List
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
                        Job Title
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                      Job Applicant
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">
                      Employer
                      </th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Status</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Apply Date</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate, index) => (
                      <tr key={candidate._id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {`${candidate.job_Title}`}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.InternName}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.empName}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.status}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.appliedDate}
                        </td>

                        {/* <td className="py-2 px-4 border-b">
                         
                          {candidate.profile_pic && (
                            <img
                              src={candidate.profile_pic}
                              alt={`${candidate.firstName} ${candidate.lastName}`}
                              className="rounded-full h-10 w-10 object-cover"
                            />
                          )}

                        </td> */}

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
              <p>{`Job Title: ${selectedCandidate.job_Title}`}</p><hr />
              <p>
                Intern Email:{" "}
                <a href={`mailto:${selectedCandidate.InternEmail}`} target="_blank" rel="noopener noreferrer">
                  {selectedCandidate.InternEmail}
                </a>
              </p><hr />
              <p>{`InternNumber: ${selectedCandidate.InternNumber}`}</p><hr />
              <p>{`Employer Name: ${selectedCandidate.empName}`}</p><hr />
              <p>{`skills: ${selectedCandidate.skills}`}</p><hr />
              <p>{`position: ${selectedCandidate.position}`}</p><hr />
              <p>{`status: ${selectedCandidate.status}`}</p><hr />
              <p>{`location: ${selectedCandidate.location}`}</p><hr />
              <p>{`job_Description: ${selectedCandidate.job_Description}`}</p><hr />
              <p>{`stipend: ${selectedCandidate.stipend}`}</p><hr />
              <p>{`Applied Date: ${selectedCandidate.appliedDate}`}</p><hr />
             
              {/* Add other details you want to display */}
            </div>
          </div>
        </div>
      )}

    </>
    )
}

export default NewJobList