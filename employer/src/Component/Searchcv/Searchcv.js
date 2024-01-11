import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import StudentDetailsPopup from "./StudentDetailsPopup";

const StudentCVItem = ({ student, handleView, handleDownload }) => (
  <tr key={student._id}>
    <td className="border px-4 py-2">{`${student.firstName} ${student.lastName}`}</td>
    <td className="border px-4 py-2">{student.keySkills}</td>
    <td className="border px-4 py-2">
      <button
        className="bg-amber-300 text-black px-4 py-2 mr-2"
        onClick={() => handleView(student)}
      >
        View
      </button>
    </td>
    <td className="border px-4 py-2">
      <button
        className="bg-black text-white px-4 py-2 hover:bg-gray-800"
        onClick={() => handleDownload(student)}
      >
        Download
      </button>
    </td>
  </tr>
);

const SearchCVPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [studentCVs, setStudentCVs] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleSearch = async () => {
    try {
      // Fetch data from your API using axios
      const response = await axios.post("http://localhost:8000/api/search", {
        skill: searchQuery,
      });
      setStudentCVs(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Initial data fetch, you can remove this if not needed on component mount
    handleSearch();
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleView = (student) => {
    setSelectedStudent(student);
  };
  const closePopup = () => {
    setSelectedStudent(null);
  };

 const handleDownload = (student) => {
   // Assuming student_PDF is a valid URL or file path
   const url = student.student_PDF;

   // Trigger a download using browser functionality
   const link = document.createElement("a");
   link.href = url;
   link.download = "student_file.pdf"; // Optional filename for download
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
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
                  key={student._id}
                  student={student}
                  handleView={handleView}
                  handleDownload={handleDownload}
                />
              ))}
            </tbody>
          </table>
          {selectedStudent && (
            <StudentDetailsPopup
              student={selectedStudent}
              onClose={closePopup}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchCVPage;
