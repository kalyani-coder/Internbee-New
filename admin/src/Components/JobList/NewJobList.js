import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import './Joblist.css'
import '../ResponsiveCss/Responsive.css';
import Footer from './../Footer/Footer';


const NewJobList = () => {
  const [candidates, setCandidates] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [candidateToDelete, setCandidateToDelete] = useState(null);

  const [jobList, setJobList] = useState()

  const [isModalOpen, setIsModalOpen] = useState(false);



  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/applyInternship");
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
      const response = await fetch(`http://localhost:8000/api/applyInternship/${candidateToDelete._id}`, {
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
  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewMoreClick = (candidate) => {
    openModal();
    // Set detailed information for the modal
    setJobList(candidate);
  };
  return (
    <>
      <Navbar />
      <div className="displaycontent flex h-screen">
        <Sidebar />
        <div className=" MainNewJob flex">
          <div>
            <h1 className=" HeadingNewJobList text-3xl font-bold mb-4 mt-8 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Job List
            </h1>

            <div className="CandidateSlider1 flex flex-col md:flex-row gap-10 ml-7 mr-7 border-2">
            <div className="table-container1 overflow-x-auto">
              <table className="table1 w-full">
                <thead>
                  <tr>
                    <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                    <th className="py-4 px-6 border-b font-bold text-lg">Job Title</th>
                    <th className="py-4 px-6 border-b font-bold text-lg">Job Applicant</th>
                    <th className="py-4 px-6 border-b font-bold text-lg">Employer</th>
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
                      <td className="py-2 px-4 border-b text-lg">{candidate.job_Title}</td>
                      <td className="py-2 px-4 border-b text-lg">{candidate.InternName}</td>
                      <td className="py-2 px-4 border-b text-lg">{candidate.empName}</td>
                      <td className="py-2 px-4 border-b text-lg">{candidate.status}</td>
                      <td className="py-2 px-4 border-b text-lg">{candidate.appliedDate}</td>
                      <td className="py-2 px-4 border-b">
                        <div className="actions1">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                            onClick={() => handleViewMoreClick(candidate)}
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


      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md w-full rounded-md">
            <h2 className="text-xl font-semibold mb-4">Student Details</h2>
            {/* Display detailed information here */}
            <div>
              <label className="block mb-2">Applicant Name: {jobList.InternName}</label><hr />
              <label>Email: {jobList.InternEmail}</label><hr />
              <label>InternNumber: {jobList.InternNumber}</label><hr />
              <label>location: {jobList.location}</label><hr />
              <label>empName: {jobList.empName}</label><hr />
              <label>job_Description: {jobList.job_Description}</label><hr />
              <label>position: {jobList.position}</label><hr />
              <label>skills: {jobList.skills}</label><hr />
              <label>stipend: {jobList.stipend}</label><hr />
              <label>job_Title: {jobList.job_Title}</label><hr />
              <label>appliedDate: {jobList.appliedDate}</label><hr />

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

      <Footer/>

    </>
  )
}

export default NewJobList