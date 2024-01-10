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
                            onClick={() => handleViewMore(employer)}
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


              {selectedCandidate && (
  <div className="modal-overlay">
    <div className="modal">
      <span className="close cursor-pointer" onClick={handleClosePopup}>
        &times;
      </span>
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Employer Details</h2><hr />
        <p>{`Name: ${selectedCandidate.empName}`}</p><hr />
        <p>
          Email:{" "}
          <a href={`mailto:${selectedCandidate.email}`} target="_blank" rel="noopener noreferrer">
            {selectedCandidate.email}
          </a>
        </p><hr />
        <p>{`Number: ${selectedCandidate.number}`}</p><hr />
        <p>{`Company Address: ${selectedCandidate.companyAddress}`}</p><hr />
        <p>{`Description: ${selectedCandidate.Description}`}</p>
        {/* Add other details you want to display */}
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
