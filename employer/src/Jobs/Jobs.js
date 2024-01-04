import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const Jobs = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedInternshipId, setExpandedInternshipId] = useState(null);
  const [loadingCandidates, setLoadingCandidates] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  const [selectedInternshipId, setSelectedInternshipId] = useState(null);

  useEffect(() => {
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

  const fetchAppliedCandidates = async (postId) => {
    try {
      setLoadingCandidates(true);
      const response = await fetch(
        `http://localhost:8000/api/applyInternship/postId/${postId}`
      );
      const data = await response.json();
      setAppliedCandidates(data);
    } catch (error) {
      console.error("Error fetching applied candidates:", error);
    } finally {
      setLoadingCandidates(false);
    }
  };

  const handleToggleAppliedCandidates = async (internshipId) => {
    if (selectedInternshipId === internshipId) {
      setSelectedInternshipId(null); // Close applied candidates
    } else {
      // Fetch and set applied candidates
      await fetchAppliedCandidates(internshipId);
      setSelectedInternshipId(internshipId);
    }
  };

  // const handleCloseAppliedCandidates = () => {
  //   setSelectedInternshipId(null);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExpandedInternshipId(null); // Close applied candidates
  };
  const handleToggleDetails = async (internshipId) => {
    setExpandedInternshipId((prevId) =>
      prevId === internshipId ? null : internshipId
    );

    if (expandedInternshipId !== internshipId) {
      const selectedInternship = internships.find(
        (internship) => internship._id === internshipId
      );
      if (selectedInternship) {
        // Don't fetch applied candidates automatically
        // await fetchAppliedCandidates(selectedInternship._id);
      }
    }
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

          <input
            type="text"
            placeholder="Search by company, job title, or skills"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={filterInternships}
            className="w-full p-2 border rounded mb-4"
          />

          {searchTerm && filteredInternships.length === 0 && (
            <p className="text-red-500">No matching results found.</p>
          )}

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
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 text-white p-2 rounded transition-all"
                      onClick={() =>
                        handleToggleAppliedCandidates(internship._id)
                      }
                    >
                      {selectedInternshipId === internship._id
                        ? "Close Applied Candidates"
                        : "View Applied Candidates"}
                    </button>
                  </div>
                </div>

                {/* View More and View Less Buttons */}
                <div className="flex justify-between mt-2">
                  {expandedInternshipId === internship._id ? (
                    <button
                      className="bg-amber-300 text-black p-2 rounded transition-all"
                      onClick={() => handleToggleDetails(internship._id)}
                    >
                      View Less
                    </button>
                  ) : (
                    <button
                      className="bg-amber-300 text-black p-2 rounded transition-all"
                      onClick={() => handleToggleDetails(internship._id)}
                    >
                      View More
                    </button>
                  )}
                </div>

                {expandedInternshipId === internship._id && appliedCandidates && Array.isArray(appliedCandidates) && (
                  <div className="mt-2">
                    {loadingCandidates && <p>Loading applied candidates...</p>}
                    {!loadingCandidates && appliedCandidates.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Applied Candidates:</h3>
                        <ul className="divide-y divide-gray-200">
                          {Array.isArray(appliedCandidates) && appliedCandidates.map((candidate) => (
                            <li key={candidate.InternId} className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  {/* You can add an avatar or profile picture here if available */}

                                </div>
                                <div className='flex justify-between'>

                                  <div>
                                    <p className="text-lg font-semibold">{candidate.InternName}</p>
                                    <p className="text-gray-500">{candidate.InternEmail}</p>
                                    <p className="text-gray-500">{candidate.InternNumber}</p>
                                    <p className="text-gray-500">Status: {candidate.status}</p>

                                  </div>

                                </div>
                              </div>
                              <div className='text-end'> <button className='bg-amber-300 text-black p-3'>View Profile</button>
                              </div>
                            </li>
                          ))}
                        </ul>

                          {appliedCandidates.length > 3 && (
                            <button
                              className="text-blue-500 mt-2 underline"
                              onClick={() => setIsModalOpen(true)}
                            >
                              View All
                            </button>
                          )}

                          <button
                            className="text-red-500 mt-2 underline ml-5"
                            onClick={handleCloseModal}
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  )}
              </li>
            ))}
          </ul>

          {/* Applied Candidates Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="View All Applied Candidates"
            className="modal"
            overlayClassName="overlay"
          >
            <div className="flex justify-end ">
              <button
                className="text-red-500 text-lg font-semibold ml-5"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">
                All Applied Candidates:
              </h2>
              <ul className="divide-y divide-gray-200">
                {appliedCandidates.map((candidate) => (
                  <li key={candidate.InternId} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {/* You can add an avatar or profile picture here if available */}
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://placekitten.com/32/32" // Placeholder image, replace with actual image URL
                          alt={`Profile of ${candidate.InternName}`}
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">
                          {candidate.InternName}
                        </p>
                        <p className="text-gray-500">{candidate.InternEmail}</p>
                        <p className="text-gray-500">
                          {candidate.InternNumber}
                        </p>
                        <p className="text-gray-500">
                          Status: {candidate.status}
                        </p>
                        {/* ... (other candidate information) */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Jobs;
