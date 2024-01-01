import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const CandidatePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    // Fetch candidates data
    fetch('http://localhost:8000/api/studentsdetails')
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error('Error fetching candidates data:', error));
  }, []);

  const handleViewMore = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen bg-white">
        <div className="bg-white">
          {/* Add your sidebar content here */}
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8">
          {/* Candidate Title */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Candidate</h1>
            {/* You can add search and post job functionality here if needed */}
          </div>

          {/* Candidate List */}
          <div className="overflow-y-auto max-h-screen">
            {candidates.length === 0 ? (
              // No Candidates Available
              <div className="flex flex-col items-center">
                <img
                  src="https://clipground.com/images/applicant-clipart-png-4.png"
                  alt="No Candidates Available"
                  className="mb-4 w-96 h-72"
                />
                <p>No candidates available.</p>
              </div>
            ) : (
              // Display Candidate List
              <div>
                {candidates.map((candidate) => (
                  <div
                    key={candidate._id}
                    className="mb-8 p-4 bg-gray-200 rounded-md"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {candidate.firstName} {candidate.lastName}
                    </h3>
                    <p>Email: {candidate.email}</p>
                    <p>Contact Number: {candidate.user_number}</p>
                    {/* Display more fields as needed */}
                    <button
                      className="bg-blue-500 text-white px-4 py-2 mt-2"
                      onClick={() => handleViewMore(candidate)}
                    >
                      View More
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Candidate Details Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      {selectedCandidate.firstName} {selectedCandidate.lastName}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Email: {selectedCandidate.email}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                    Birthdate: {selectedCandidate.birthdate}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                    city: {selectedCandidate.city}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                    District: {selectedCandidate.district}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                    Pass Out Year: {selectedCandidate.passOutYear}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                    Experience: {selectedCandidate.experience}
                    </p>
                    {/* Display more details as needed */}
                  </div>
                </div>
              </div>
              {/* Close button */}
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </>
  );
};

export default CandidatePage;
