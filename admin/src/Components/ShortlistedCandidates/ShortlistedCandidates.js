import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from './../Footer/Footer'; 
import { FaTrash } from "react-icons/fa";
import './ShorlistedCandidates.css'
import '../ResponsiveCss/Responsive.css';


const ShortlistedCandidates = () => {
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [candidateToDelete, setCandidateToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [candidateDetails, setCandidateDetails] = useState(null);



  const openModal = () => {
    setIsModalOpen(true);
   
};

const closeModal = () => {
  setIsModalOpen(false);
};
const handleViewMoreClick = (candidate) => {
  openModal();
  // Set detailed information for the modal
  setCandidateDetails(candidate);
};
    const fetchShortlistedCandidates = async () => {
      try {
        const response = await fetch("https://backend.internsbee.com/api/applyInternship/shortlisted");
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
      const response = await fetch(`https://backend.internsbee.com/api/applyInternship/shortlisted/${candidateToDelete._id}`, {
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
      <div className="displaycontent flex h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="flex mt-5">
          <div className=" shortlistdiv p-10 flex">
            <div className="shortlistdiv">
              <h1 className="EmployerHeading text-3xl font-bold mb-4 mt-8">
                Shortlisted Candidates
              </h1>

              <div className="tabless-container overflow-x-auto">
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Name</th>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Company Name</th>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Actions</th>
                      <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Delete</th>
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
                            onClick={() => handleViewMoreClick(candidate)}
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

      {isModalOpen && (
  <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 max-w-md w-full rounded-md">
      <h2 className="text-xl font-semibold mb-4">Student Details</h2>
      {/* Display detailed information here */}
      <div>
        <label className="block mb-2">Intern Name: {candidateDetails.InternName}</label><hr/>
        <label>Intern Email: {candidateDetails.InternEmail}</label><hr/>
        <label>Intern Number: {candidateDetails.InternNumber}</label><hr/>
        <label>Skills: {candidateDetails.skills}</label><hr/>
        <label>location: {candidateDetails.location}</label><hr/>
        <label>empName: {candidateDetails.empName}</label><hr/>
        <label>position: {candidateDetails.position}</label><hr/>
        <label>stipend : {candidateDetails.stipend}</label><hr/>
        <label>job_Title: {candidateDetails.job_Title}</label><hr/>
        <label>end_Date: {candidateDetails.end_Date}</label><hr/>
       
        {/* Add more labels for additional fields */}
      </div>
      <div className="flex justify-between mt-3">
        <button
          className="text-black bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-500"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      <Footer />
    </>
  );
};

export default ShortlistedCandidates;
