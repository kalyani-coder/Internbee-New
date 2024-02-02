import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const CandidatePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`https://internbee-backend-apis.onrender.com/api/postinternship/userId/${userId}`) // Replace with localStorage.getItem('userId')
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) =>
        console.error("Error fetching candidates data:", error)
      );
  }, []);

  const handleViewMore = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleCloseModal = () => {
    setSelectedCandidate(null);
  };

  const filterData = () => {
    return candidates.filter((candidate) =>
      candidate.job_Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCandidates = filterData();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen bg-white">
        <div className="bg-white">
          <Sidebar />
        </div>

        <div className="w-3/4 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Shortlisted Candidate</h1>
          </div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Search by Job Title"
              className="border p-2 rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-y-auto" style={{ height: "60vh" }}>
            {filteredCandidates.length === 0 ? (
              <div className="flex flex-col items-center">
                <p>No candidates available.</p>
              </div>
            ) : (
              <div>
                {filteredCandidates.map((candidate) => (
                  <div
                    key={candidate._id}
                    className="mb-8 p-4 rounded-md"
                    style={{ backgroundColor: '#FFBD59' }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Job Title : {candidate.job_Title}
                    </h3>
                    <p>Postion : {candidate.position}</p>
                    <p>Job Description : {candidate.job_Description}</p>
                    <p>Skills : {candidate.skills}</p>
                    <Link to={`/shortlisted/${candidate._id}`}>
                      <button className="bg-dark text-white px-4 py-2 mt-2 rounded">
                        View Shortlisted candidate
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default CandidatePage;
