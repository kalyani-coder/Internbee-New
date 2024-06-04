// Candidates.js

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./Candidates.css"
import "../ResponsiveCss/Responsive.css"
import Footer from './../Footer/Footer';


const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
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
  const handleViewMoreClick = (candidate) => {
    openModal();
    // Set detailed information for the modal
    setCandidateDetails(candidate);
  };
  return (
    <>
      <Navbar />
      <div className="displaycontent flex h-screen">
        <Sidebar />
        <div className="candidatepadding flex justify-between flex-col md:flex-row md:mr-14">
          <div className="CandidateMain">
            <h1 className="text-3xl font-bold mb-4 mt-8 flex justify-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
              View Candidate Details
            </h1>
            <div className="CandidateSlider flex flex-col md:flex-row gap-10 ml-14 border-2">
              <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Candidates Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Designation</th>
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
                        <td className="py-2 px-4 border-b text-lg">{candidate.city}</td>
                        <td className="py-2 px-4 border-b text-lg">{candidate.stream}</td>
                        <td className="py-2 px-4 border-b">
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
                              onClick={() => handleViewMoreClick(candidate)}
                            >
                              View More
                            </button>
                          </div>
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
              <label className="block mb-2">First Name: {candidateDetails.firstName} {candidateDetails.lastName}</label><hr />
              <label>Email: {candidateDetails.email}</label><hr />
              <label>Birthdate: {candidateDetails.birthdate}</label><hr />
              <label>Permanent Address: {candidateDetails.permanentaddress}</label><hr />
              <label>City: {candidateDetails.city}</label><hr />
              <label>District: {candidateDetails.district}</label><hr />
              <label>Country: {candidateDetails.country}</label><hr />
              <label>Current Address: {candidateDetails.currentaddress}</label><hr />
              <label>Current District: {candidateDetails.currentdistrict}</label><hr />
              <label>Current Country: {candidateDetails.currentcountry}</label><hr />
              <label>Education: {candidateDetails.education}</label><hr />
              <label>Institute Name: {candidateDetails.instituteName}</label><hr />
              <label>Stream: {candidateDetails.stream}</label><hr />
              <label>Pass Out Year: {candidateDetails.passOutYear}</label><hr />
              <label>Key Skills: {candidateDetails.keySkills}</label><hr />
              <label>Languages: {candidateDetails.languages}</label><hr />
              <label>Experience: {candidateDetails.experience}</label><hr />
              <label>Salary Expectations: {candidateDetails.salaryExpectations}</label><hr />
              <label>Project Name: {candidateDetails.projectName}</label><hr />
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

export default Candidates;
