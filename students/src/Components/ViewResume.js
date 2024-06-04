import React, { useEffect, useState } from "react";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import axios from 'axios';

const ViewResume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const studentId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:8000/api/resume/student/${studentId}`);
        setResumeData(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, []);

  if (!resumeData || resumeData.length === 0) {
    return <div>Loading...</div>;
  }

  const { personalInformation, education, experience, portfolio } = resumeData[0];

  return (
    <div className="bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-14 mb-32">
        <div className="max-w-4xl w-full bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Resume</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p><strong>First Name:</strong> {personalInformation.firstname}</p>
            <p><strong>Last Name:</strong> {personalInformation.lastname}</p>
            <p><strong>Email Address:</strong> {personalInformation.emailaddress}</p>
            <p><strong>Address:</strong> {personalInformation.address}</p>
            <p><strong>Phone Number:</strong> {personalInformation.phonenumber}</p>
            <p><strong>Gender:</strong> {personalInformation.gender}</p>
            <p><strong>Current Salary:</strong> {personalInformation.currentSalary}</p>
            <p><strong>Expectation:</strong> {personalInformation.expectation}</p>
            <p><strong>Career Profile:</strong> {personalInformation.careerProfile}</p>
            <p><strong>Skills:</strong> {personalInformation.skills.join(', ')}</p>
            <p><strong>Level:</strong> {personalInformation.level}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Institute:</strong> {edu.institute}</p>
                <p><strong>Pass Out Year:</strong> {edu.passOutYear}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <p><strong>Company Name:</strong> {exp.companyname}</p>
                <p><strong>Designation:</strong> {exp.designation}</p>
                <p><strong>Location:</strong> {exp.location}</p>
                <p><strong>About Company:</strong> {exp.aboutcompany}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold">Portfolio</h2>
            {portfolio.map((proj, index) => (
              <div key={index}>
                <p><strong>Project Name:</strong> {proj.projectname}</p>
                <p><strong>Project Description:</strong> {proj.projectdescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewResume;
