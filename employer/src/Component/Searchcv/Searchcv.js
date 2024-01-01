import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const StudentCVItem = ({ student, handleView, handleDownload }) => (
  <tr>
    <td className="border px-4 py-2">{student.name}</td>
    <td className="border px-4 py-2">{student.skills.join(', ')}</td>
    <td className="border px-4 py-2">
      <button
        className="bg-amber-300 text-black px-4 py-2 mr-2"
        onClick={() => handleView(student.id)}
      >
        View
      </button>
    </td>
    <td className="border px-4 py-2">
      <button
        className="bg-black text-white px-4 py-2 hover:bg-gray-800"
        onClick={() => handleDownload(student.id)}
      >
        Download
      </button>
    </td>
  </tr>
);

const SearchCVPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showRegistrationMessage, setShowRegistrationMessage] = useState(true);

  const handleSearch = () => {
    console.log('Searching...', searchQuery);
  };

  const handleRegistrationCompletion = () => {
    setShowRegistrationMessage(false);
  };

  const handleView = (studentId) => {
    console.log(`Viewing CV for student with ID ${studentId}`);
    // Implement your view logic
  };

  const handleDownload = (studentId) => {
    console.log(`Downloading CV for student with ID ${studentId}`);
    // Implement your download logic
  };

  const studentCVs = [
    { id: 1, name: 'John Doe', skills: ['JavaScript', 'React', 'Node.js'] },
    { id: 2, name: 'Jane Smith', skills: ['HTML', 'CSS', 'React'] },
    { id: 3, name: 'Bob Johnson', skills: ['Python', 'Django', 'Flask'] },
    { id: 4, name: 'Alice Brown', skills: ['Java', 'Spring', 'Hibernate'] },
    { id: 5, name: 'Charlie Wilson', skills: ['C#', 'ASP.NET', 'MVC'] },
    { id: 6, name: 'Emma White', skills: ['Ruby', 'Rails', 'PostgreSQL'] },
    { id: 7, name: 'Frank Black', skills: ['Swift', 'iOS Development'] },
    { id: 8, name: 'Grace Miller', skills: ['Angular', 'TypeScript'] },
    { id: 9, name: 'Henry Davis', skills: ['PHP', 'Laravel'] },
    // Add more student CVs as needed
  ];

  return (
    <>
      <div><Navbar/></div>
      <div className="flex">
        <div><Sidebar/></div>
        <div className="flex flex-col items-center w-full mb-3">
          {/* Search Inputs */}
          <div className="flex items-center mb-8 mt-5">
            <input
              type="text"
              placeholder="Job title, skill, company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 p-2 w-96"
            />
            <button
              onClick={handleSearch}
              className="bg-black text-white ml-4 px-4 py-2"
            >
              Search
            </button>
          </div>

          {/* Registration Message Box
          {showRegistrationMessage && (
            <div className="flex items-center justify-center bg-amber-200 bg-opacity-75 p-4 rounded-md mt-4 text-center w-2/4 h-64">
              <div>
                <p className="text-black mb-2">
                  Complete your registration to access advanced features!
                </p>
                <Link to="/registration">
                  <button
                    onClick={handleRegistrationCompletion}
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Complete Registration
                  </button>
                </Link>
              </div>
            </div>
          )} */}

          {/* Student CV List Table View */}
          <table className="border-collapse w-2/3 mt-8">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Skills</th>
                <th className="border px-4 py-2">View</th>
                <th className="border px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {studentCVs.map((student) => (
                <StudentCVItem
                  key={student.id}
                  student={student}
                  handleView={handleView}
                  handleDownload={handleDownload}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div><Footer/></div>
    </>
  );
};

export default SearchCVPage;

