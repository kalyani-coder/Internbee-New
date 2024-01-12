import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Employer.css'

const Employers = () => {
  const [employers, setEmployers] = useState([]);
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


    const fetchEmployers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/empauth");
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error("Error fetching employers:", error);
      }
    };

  useEffect(() => {
    // Call the fetchEmployers function
    fetchEmployers();
  
  })

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
      const response = await fetch(`http://localhost:8000/api/empauth/${candidateToDelete._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // If deletion is successful, fetch updated data
        await fetchEmployers();
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
        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">
              View Employer Details
            </h1>
            <div className="flex gap-10">
              <div>
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Employers Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Email</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Contact No.</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employers.map((employer, index) => (
                      <tr key={employer._id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">{employer.empName}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {employer.email}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {employer.number}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleViewMoreClick(employer)}
                          >
                            View More
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">
                        <button onClick={() => handleDeleteClick(employer)}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                

                   {/* Confirmation Modal */}
        {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to delete this Employer?</p>
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
        <label className="block mb-2">Employer Name: {candidateDetails.empName}</label><hr/>
        <label>Email: {candidateDetails.email}</label><hr/>
        <label>Contact Number: {candidateDetails.number}</label><hr/>
        <label>Company Address: {candidateDetails.companyAddress}</label><hr/>
        <label>Description: {candidateDetails.Description}</label><hr/>
       
       
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



              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Employers;
