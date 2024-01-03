import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Sidebar from '../Component/Sidebar/Sidebar';

const Jobs = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedInternshipId, setExpandedInternshipId] = useState(null);
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  const [loadingCandidates, setLoadingCandidates] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/postinternship');
        const data = await response.json();
        setInternships(data);
        setFilteredInternships(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterInternships = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = internships.filter(internship =>
      internship.company_Name.toLowerCase().includes(lowerSearchTerm) ||
      internship.job_Title.toLowerCase().includes(lowerSearchTerm) ||
      internship.skills.toLowerCase().includes(lowerSearchTerm)
    );
    setFilteredInternships(filtered);
  };

  const fetchAppliedCandidates = async (postId) => {
    try {
      setLoadingCandidates(true);
      const response = await fetch(`http://localhost:8000/api/applyInternship?postId=${postId}`);
      const data = await response.json();
      setAppliedCandidates(data);
    } catch (error) {
      console.error('Error fetching applied candidates:', error);
    } finally {
      setLoadingCandidates(false);
    }
  };

  const handleToggleDetails = async (internshipId) => {
    setExpandedInternshipId((prevId) => (prevId === internshipId ? null : internshipId));

    if (expandedInternshipId !== internshipId) {
      const selectedInternship = internships.find((internship) => internship._id === internshipId);
      if (selectedInternship) {
        await fetchAppliedCandidates(selectedInternship._id);
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='flex'>
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
            {filteredInternships.map(internship => (
              <li key={internship._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">{internship.job_Title}</h2>
                <p className="text-gray-600">Company: {internship.company_Name}</p>
                <p className="text-gray-600">Skills: {internship.skills}</p>

                <div
                  className={`transition-all mt-2 overflow-hidden ${expandedInternshipId === internship._id ? 'max-h-full' : 'max-h-0'
                    }`}
                >
                  <p>Location: {internship.location}</p>
                  <p>Start Date: {internship.start_Date}</p>
                  <p>End Date: {internship.end_Date}</p>
                  <p>Job Type: {internship.job_Type}</p>
                  <p>Position: {internship.position}</p>
                  <p>Job Description: {internship.job_Description}</p>
                </div>

                <button
                  className="bg-amber-300 text-black p-2 rounded mt-2 transition-all"
                  onClick={() => handleToggleDetails(internship._id)}
                  style={{ width: '100%' }}
                >
                  View More
                </button>

                {expandedInternshipId === internship._id && (
                  <button
                    className="bg-amber-300 text-black p-2 rounded mt-2 transition-all"
                    onClick={() => handleToggleDetails(internship._id)}
                    style={{ width: '100%' }}
                  >
                    View Less
                  </button>
                )}

                {expandedInternshipId === internship._id && (
                  <button
                    className="bg-blue-500 text-white p-2 rounded mt-2 transition-all"
                    onClick={() => fetchAppliedCandidates(internship._id)}
                    style={{ width: '100%' }}
                  >
                    View Applied Candidates
                  </button>
                )}

                {expandedInternshipId === internship._id && appliedCandidates && (
                  <div className="mt-2">
                    {loadingCandidates && <p>Loading applied candidates...</p>}
                    {!loadingCandidates && appliedCandidates.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold">Applied Candidates:</h3>
                        <ul>
                          {appliedCandidates.map((candidate) => (
                            <li key={candidate.InternId}>
                              <p>Intern ID: {candidate.InternId}</p>
                              <p>Status: {candidate.status}</p>
                              {/* ... (other candidate information) */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {!loadingCandidates && appliedCandidates.length === 0 && (
                      <p>No candidates have applied for this internship.</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;
