import React, { useEffect, useState } from "react";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import axios from 'axios';
import jsPDF from 'jspdf';
import "./ViewResume.css";

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
 

  const generatePDF = () => {
    if (!resumeData || resumeData.length === 0) {
      return;
    }
  
    const { personalInformation, education, experience, portfolio } = resumeData[0];
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageHeight = doc.internal.pageSize.height;
    const margin = 10;
    const contentWidth = 190 - 2 * margin;
    const lineHeight = 10;
    const horizontalLineSpacing = 5; // Added spacing between horizontal lines
    const startX = 20;
    let startY = 30;
  
    // Define widths for columns
    const personalInfoWidth = 60;
    const careerProfileWidth = 60;
    const skillsWidth = 60;
  
    const wrapText = (text, x, y, maxWidth) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line, i) => {
        if (y + (i * lineHeight) > pageHeight - margin) {
          doc.addPage();
          y = margin + lineHeight;
        }
        doc.text(line, x, y + (i * lineHeight));
      });
      return y + (lines.length * lineHeight);
    };
  
    const addSectionTitle = (title, x, y) => {
      if (y + lineHeight > pageHeight - margin) {
        doc.addPage();
        y = margin + lineHeight;
      }
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(title, x, y);
      return y + lineHeight;
    };
  
    const addHorizontalLine = (x, y, width) => {
      if (y + lineHeight / 2 > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.setLineWidth(0.2);
      doc.line(x, y + lineHeight / 2, x + width, y + lineHeight / 2);
      return y + lineHeight + horizontalLineSpacing; // Add spacing after horizontal line
    };
  
    const addContent = (text, x, y, width) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      return wrapText(text, x, y, width);
    };
  
    // Add a border
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277);
  
    // Add personal information, Career Profile, and Skills in one line
    doc.setFontSize(17);
    doc.setFont('helvetica', 'bold');
    doc.text(`${personalInformation.firstname} ${personalInformation.lastname}`, startX, startY);
    startY += lineHeight;
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
  
    // Personal Information column
    let tempY = startY;
  
    // Add email with blue color and underline
    doc.setTextColor(0, 0, 255); // Set color to blue
    doc.setFont('helvetica', 'underline'); // Set font to underline
    tempY = addContent(personalInformation.emailaddress, startX, tempY, personalInfoWidth);
  
    // Reset text color and font
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    tempY = addContent(personalInformation.address, startX, tempY, personalInfoWidth);
    tempY = addContent(personalInformation.phonenumber, startX, tempY, personalInfoWidth);
  
    // Career Profile column
    let tempCareerY = startY;
    tempCareerY = addContent(personalInformation.careerProfile, startX + personalInfoWidth, tempCareerY, careerProfileWidth);
    tempCareerY = addContent(`Current Salary: ${personalInformation.currentSalary}`, startX + personalInfoWidth, tempCareerY, careerProfileWidth);
    tempCareerY = addContent(`Expectation: ${personalInformation.expectation}`, startX + personalInfoWidth, tempCareerY, careerProfileWidth);
  
    // Skills column
    let tempSkillsY = startY;
    tempSkillsY = addContent(`Skills: ${personalInformation.skills.join(', ')}`, startX + personalInfoWidth + careerProfileWidth, tempSkillsY, skillsWidth);
    tempSkillsY = addContent(`Level: ${personalInformation.level}`, startX + personalInfoWidth + careerProfileWidth, tempSkillsY, skillsWidth);
  
    startY = Math.max(tempY, tempCareerY, tempSkillsY);
  
    startY = addHorizontalLine(startX, startY, contentWidth);
  
    // Add Education
    startY = addSectionTitle('Education', startX, startY);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    education.forEach((edu, index) => {
      startY = addContent(`${edu.degree} percentage`, startX, startY, contentWidth);
      startY = addContent(`${edu.institute} ${edu.passOutYear}`, startX, startY, contentWidth);
    });
  
    startY = addHorizontalLine(startX, startY, contentWidth);
  
    // Add Experience
    startY = addSectionTitle('Experience', startX, startY);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    experience.forEach((exp, index) => {
      startY = addContent(`Company Name: ${exp.companyname} ${exp.location}`, startX, startY, contentWidth);
      startY = addContent(`Designation: ${exp.designation}`, startX, startY, contentWidth);
      startY = addContent(`About Company: ${exp.aboutcompany}`, startX, startY, contentWidth);
    });
  
    startY = addHorizontalLine(startX, startY, contentWidth);
  
    // Add Portfolio
    startY = addSectionTitle('Portfolio', startX, startY);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    portfolio.forEach((proj, index) => {
      startY = addContent(`Project Name: ${proj.projectname}`, startX, startY, contentWidth);
      startY = addContent(`Project Description: ${proj.projectdescription}`, startX, startY, contentWidth);
    });
    startY = addHorizontalLine(startX, startY, contentWidth);
  
    doc.save('resume.pdf');
  };
  


  if (!resumeData || resumeData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-24 mb-32">
        <div className="max-w-5xl w-full bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Resume</h1>

          <div className="printreusme border-2 border-black p-4">
            <div className="mb-6">
              <p className="p-1 text-2xl"><strong>{resumeData[0].personalInformation.firstname} {resumeData[0].personalInformation.lastname}</strong></p>
              <div className="flex justify-between">
                <div className="p-1">
                  <p>{resumeData[0].personalInformation.emailaddress} </p>
                  <p>{resumeData[0].personalInformation.address}</p>
                  <p>{resumeData[0].personalInformation.phonenumber}</p>
                </div>
                <div className="p-1">
                  <p>Career Profile: {resumeData[0].personalInformation.careerProfile}</p>
                  <p>Current Salary: {resumeData[0].personalInformation.currentSalary}</p>
                  <p>Expectation: {resumeData[0].personalInformation.expectation}</p>
                </div>
                <div className="p-1 relative right-7">
                  <h2 className="text-xl font-semibold">Skills:</h2>
                  <p>{resumeData[0].personalInformation.skills.join(', ')}</p>
                  <p>Level: {resumeData[0].personalInformation.level}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="mb-3 mt-3">
              <div className="p-1">
                <h2 className="text-xl font-semibold">Education</h2>
                {resumeData[0].education.map((edu, index) => (
                  <div key={index}>
                    <p>{edu.degree} percentage</p>
                    <p>{edu.institute} {edu.passOutYear}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3 mt-3">
              <div className="p-1">
                <h2 className="text-xl font-semibold">Experience</h2>
                {resumeData[0].experience.map((exp, index) => (
                  <div key={index}>
                    <p><strong>Company Name:</strong> {exp.companyname} {exp.location}</p>
                    <p><strong>Designation:</strong> {exp.designation}</p>
                    <p><strong>About Company:</strong> {exp.aboutcompany}</p>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="mb-3 mt-3">
              <div className="p-1">
                <h2 className="text-xl font-semibold">Portfolio</h2>
                {resumeData[0].portfolio.map((proj, index) => (
                  <div key={index}>
                    <p><strong>Project Name:</strong> {proj.projectname}</p>
                    <p><strong>Project Description:</strong> {proj.projectdescription}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center p-4">
            <button onClick={generatePDF} className="p-2">Print Resume</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewResume;
