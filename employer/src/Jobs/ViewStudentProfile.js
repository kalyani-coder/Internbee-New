import React, { useEffect, useState } from "react";
import { useParams  , useLocation} from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";

export default function ViewStudentProfile() {

  const location = useLocation();
  const applyId = location.state.id;
  console.log(applyId);
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/studentsdetails/userId/${id}`);
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
      <div className="container mx-auto mt-8">
        {studentData ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">{`${studentData.firstName} ${studentData.lastName}`}</h1>
            <p>Email: {studentData.email}</p>
            <p>Birthdate: {studentData.birthdate}</p>
            <p>Permanent Address: {studentData.permanentaddress}</p>
            <p>City: {studentData.city}</p>
            <p>District: {studentData.district}</p>
            <p>Country: {studentData.country}</p>
            <p>Current Address: {studentData.currentaddress}</p>
            <p>Current District: {studentData.currentdistrict}</p>
            <p>Current Country: {studentData.currentcountry}</p>
            <p>Education: {studentData.education}</p>
            <p>Institute Name: {studentData.instituteName}</p>
            <p>Stream: {studentData.stream}</p>
            <p>Pass Out Year: {studentData.passOutYear}</p>
            <p>Key Skills: {studentData.keySkills}</p>
            <p>Languages: {studentData.languages}</p>
            <p>Experience: {studentData.experience}</p>
            <p>Salary Expectations: {studentData.salaryExpectations}</p>
            <p>Project Name: {studentData.projectName}</p>
            <p>Project Summary: {studentData.projectSummary}</p>
            {/* Display other details as needed */}
            <img src={studentData.profile_pic} alt="Profile Pic" className="max-w-full mt-4" />
            <a href={studentData.student_PDF} target="_blank" rel="noopener noreferrer" className="block mt-4 underline">
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
