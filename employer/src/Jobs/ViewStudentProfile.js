import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

export default function ViewStudentProfile() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const candidateId = searchParams.get("candidateId");

  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/studentsdetails/userId/${id}`
        );
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, [id]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center mt-11">
        {studentData ? (
          <div className="flex-1 w-full max-w-4xl">
            {/* Image Section */}
            <div className="flex flex-col items-center mb-8">
              <img
                className="h-32 w-32 rounded-full object-cover mb-4"
                src={studentData.profile_pic}
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800">
                {`${studentData.firstName} ${studentData.lastName}`}
              </h1>
            </div>

            {/* Education Details Section */}
            <div className="bg-white shadow-md mb-8 p-6 rounded-lg">
              <h1 className="mb-2 text-xl font-bold text-gray-800">
                Education Details
              </h1>
              <p>Education: {studentData.education}</p>
              <p>Institute Name: {studentData.instituteName}</p>
              <p>Stream: {studentData.stream}</p>
              <p>Pass Out Year: {studentData.passOutYear}</p>
            </div>

            {/* Projects and Experience Section */}
            <div className="bg-white shadow-md mb-8 p-6 rounded-lg">
              <h1 className="mb-2 text-xl font-bold text-gray-800">
                Projects and Experience
              </h1>
              <p>Key Skills: {studentData.keySkills}</p>
              <p>Languages: {studentData.languages}</p>
              <p>Experience: {studentData.experience}</p>
              <p>Salary Expectations: {studentData.salaryExpectations}</p>
              <p>Project Name: {studentData.projectName}</p>
              <p>Project Summary: {studentData.projectSummary}</p>
            </div>

            {/* Additional Details Section */}
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h1 className="mb-2 text-xl font-bold text-gray-800">
                Additional Details
              </h1>
              <p>Email: {studentData.email}</p>
              <p>Birthdate: {studentData.birthdate}</p>
              <p>Permanent Address: {studentData.permanentaddress}</p>
              <p>City: {studentData.city}</p>
              <p>District: {studentData.district}</p>
              <p>Country: {studentData.country}</p>
              <p>Current Address: {studentData.currentaddress}</p>
              <p>Current District: {studentData.currentdistrict}</p>
              <p>Current Country: {studentData.currentcountry}</p>
            </div>

            {/* PDF and Certificate Links */}
            <div className="mb-4 mt-3 bg-white shadow-md p-6 rounded-lg flex justify-around">
              <a
                href={studentData.student_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="block underline"
              >
                <button className=" bg-amber-300 text-black p-2 ">

                  View Resume
                </button>
              </a>
              <a
                href={studentData.student_certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="block  underline"
              >
                <button className=" bg-amber-300 text-black p-2 ">
                  View Student Certificates
                </button>
              </a>
              <a

                target="_blank"
                rel="noopener noreferrer"
                className="block  underline"
              >
                <button className=" bg-amber-300 text-black p-2 ">
                  Shortlist
                </button>
              </a>


            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}