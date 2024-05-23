import React, { useEffect, useState } from "react";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import axios from 'axios';
import jsPDF from 'jspdf';

const ViewResume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const studentId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:8000/api/resume/student/${studentId}`);
        console.log("resume Data " , response.data )
        setResumeData(response.data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, []);

  const printResumeAsPDF = () => {
    if (!resumeData || resumeData.length === 0) {
      return;
    }
  
    const doc = new jsPDF();
    const personalInformation = resumeData[0].personalInformation || {};
  
    const personalInfoForPDF = {
      firstname: personalInformation.firstname,
      lastname: personalInformation.lastname,
      emailaddress: personalInformation.emailaddress,
      address: personalInformation.address,
      phonenumber: personalInformation.phonenumber,
      careerProfile: personalInformation.careerProfile // Added careerProfile
    };
  
    let yPos = 20;
  
    doc.setFont("helvetica", "bold"); // Set font to bold
    doc.text(20, yPos, `${personalInfoForPDF.firstname} ${personalInfoForPDF.lastname}`);
    yPos += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal"); // Reset font to normal
    if (personalInfoForPDF.careerProfile) { // Added a check for careerProfile
      doc.text(20, yPos, `${personalInfoForPDF.careerProfile}`);
      yPos += 8;
    }
  
    doc.text(20, yPos, `${personalInfoForPDF.emailaddress}`);
    yPos += 8;
    doc.text(20, yPos, `${personalInfoForPDF.phonenumber}`);
    yPos += 8;
    doc.text(20, yPos, `${personalInfoForPDF.address}`);
    yPos += 20; // Move down a bit to draw the line
    doc.line(20, yPos, 200, yPos); // Draw a line
  
    yPos += 10; // Move down after the line
    doc.text(20, yPos, 'Education');
    const education = resumeData[0]?.education || [];
    education.forEach(edu => {
      yPos += 10;
      Object.entries(edu).forEach(([key, value]) => {
        if (key !== 'id') { // Exclude id field
          doc.text(20, yPos, `${value}`);
          yPos += 10;
        }
      });
    });
  
    yPos += 10;
    doc.text(20, yPos, 'Experience');
    const experience = resumeData[0]?.experience || [];
    experience.forEach(exp => {
      yPos += 10;
      Object.entries(exp).forEach(([key, value]) => {
        if (key !== 'id') { // Exclude id field
          doc.text(20, yPos, `${value}`);
          yPos += 10;
        }
      });
    });
  
    yPos += 10;
    doc.text(20, yPos, 'Portfolio');
    const portfolio = resumeData[0]?.portfolio || [];
    portfolio.forEach(port => {
      yPos += 10;
      Object.entries(port).forEach(([key, value]) => {
        if (key !== 'id') { // Exclude id field
          doc.text(20, yPos, `${value}`);
          yPos += 10;
        }
      });
    });
  
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S'); // Add border
    doc.save('resume.pdf');
  };
  
  

  if (!resumeData || resumeData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-14 mb-32">
        <div className="w-2/3 border border-black p-2 bg-white mt-[40px]">
          <div>
            <h1 className="text-3xl font-bold">View Resume</h1>
            <h2 className="text-xl font-bold">Personal Information</h2>
            <p>Full Name: {resumeData[0].personalInformation.firstname} {resumeData[0].personalInformation.lastname}</p>
            <p>Last Name: {resumeData[0].personalInformation.lastname}</p>
            <p>Email: {resumeData[0].personalInformation.emailaddress}</p>
            <p>Address: {resumeData[0].personalInformation.address}</p>
            <p>Phone Number: {resumeData[0].personalInformation.phonenumber}</p>
            <p>Gender: {resumeData[0].personalInformation.gender}</p>
            <p>Current Salary: {resumeData[0].personalInformation.currentSalary}</p>
            <p>Exectation: {resumeData[0].personalInformation.expectation}</p>
            <p>Career Profile: {resumeData[0].personalInformation.careerProfile}</p>
            <p>Skils: {resumeData[0].personalInformation.skills}</p>
            <p>Level: {resumeData[0].personalInformation.level}</p>
          </div>
          <div>
          <h2 className="text-xl font-bold">Education</h2>
          {resumeData[0]?.education.map((edu, index) => (
            <div key={index}>
              {Object.entries(edu).map(([key, value], index) => (
                key !== 'id' && <p key={index}>{key}: {value}</p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold">Experience</h2>
          {resumeData[0]?.experience.map((exp, index) => (
            <div key={index}>
              {Object.entries(exp).map(([key, value], index) => (
                key !== 'id' && <p key={index}>{key}: {value}</p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold">Portfolio</h2>
          {resumeData[0]?.portfolio.map((port, index) => (
            <div key={index}>
              {Object.entries(port).map(([key, value], index) => (
                key !== 'id' && <p key={index}>{key}: {value}</p>
              ))}
            </div>
          ))}
        </div>
        <div>
          <button onClick={printResumeAsPDF}>Print PDF</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default ViewResume;
