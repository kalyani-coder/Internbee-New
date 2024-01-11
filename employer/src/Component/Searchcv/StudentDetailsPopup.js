// components/StudentDetailsPopup.js
import React from "react";

const StudentDetailsPopup = ({ student, onClose }) => {
  return (
    <div className="fixed m-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md max-w-full w-full">
        {/* Display student details here */}
        <h2 className="text-2xl font-bold mb-4">{`${student.firstName} ${student.lastName}`}</h2>
        {/* <p className="text-gray-600 mb-2">Email: {student.email}</p> */}
        <p className="text-gray-600 mb-2">Birthdate: {student.birthdate}</p>
        <p className="text-gray-600 mb-2">
          Permanent Address: {student.permanentaddress}
        </p>
        <p className="text-gray-600 mb-2">
          Current Address: {student.currentaddress}
        </p>
        <p className="text-gray-600 mb-2">Education: {student.education}</p>
        <p className="text-gray-600 mb-2">Institute: {student.instituteName}</p>
        <p className="text-gray-600 mb-2">Stream: {student.stream}</p>
        <p className="text-gray-600 mb-2">
          Pass Out Year: {student.passOutYear}
        </p>
        <p className="text-gray-600 mb-2">Key Skills: {student.keySkills}</p>
        <p className="text-gray-600 mb-2">Languages: {student.languages}</p>
        <p className="text-gray-600 mb-2">Experience: {student.experience}</p>
        <p className="text-gray-600 mb-2">
          Salary Expectations: {student.salaryExpectations}
        </p>
        <p className="text-gray-600 mb-2">
          Project Name: {student.projectName}
        </p>
        <p className="text-gray-600 mb-2">
          Project Summary: {student.projectSummary}
        </p>

        {/* Close button */}
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StudentDetailsPopup;
