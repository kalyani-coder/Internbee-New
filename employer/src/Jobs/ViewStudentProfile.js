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
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={studentData.profile_pic}
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <h1 className="mb-2 text-xl font-bold  text-gray-800 ">
                  {`${studentData.firstName} ${studentData.lastName}`}
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
            </div>
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <div className="flex flex-col justify-start p-6">
                <h1 className="mb-2 text-xl font-bold  text-gray-800 ">
                  Education Details
                </h1>

                <p>Education: {studentData.education}</p>
                <p>Institute Name: {studentData.instituteName}</p>
                <p>Stream: {studentData.stream}</p>
                <p>Pass Out Year: {studentData.passOutYear}</p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <div className="flex flex-col justify-start p-6">
                <h1 className="mb-2 text-xl font-bold  text-gray-800 ">
                  Projects and Experience
                </h1>
                <p>Key Skills: {studentData.keySkills}</p>
                <p>Languages: {studentData.languages}</p>
                <p>Experience: {studentData.experience}</p>
                <p>Salary Expectations: {studentData.salaryExpectations}</p>
                <p>Project Name: {studentData.projectName}</p>
                <p>Project Summary: {studentData.projectSummary}</p>
              </div>
            </div>

            <a
              href={studentData.student_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 underline"
            >
              View Student PDF
            </a>
            <a
              href={studentData.student_certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 underline"
            >
              View Student Certificate
            </a>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
