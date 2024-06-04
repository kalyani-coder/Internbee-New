import React, { useEffect, useState } from "react";

import "./HelpCenter.css";
import { MdContactPhone, MdFindInPage, MdOutlineManageAccounts, MdOutlineStart, MdTroubleshoot } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar"
import Footer from './../Footer';
import { FaTimes, FaPlus } from "react-icons/fa";

const HelpCenter = () => {
  const [currenthelps, setCurrenthelps] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("option1");

  useEffect(() => {
    const helpData = {
      gettingStarted: [
        {
          question: "What is internsbee.com?",
          answer: [
            "internsbee.com connects students and recent graduates with internship opportunities at top companies. Our platform helps you find internships that match your skills and career goals.",
          ],
        },
        {
          question: "How do I sign up?",
          answer: [
            "1. Go to our [sign-up page](#).",
            "2. Enter your email address and create a password.",
            "3. Complete your profile with your personal information, education, skills, and resume.",
            "4. Verify your email address to activate your account.",
          ],
        },
      ],
      findingInternships: [
        {
          question: "How do I search for internships?",
          answer: [
            "1. Log in to your account.",
            "2. Use the search bar on the homepage to enter keywords related to your desired position.",
            "3. Apply filters such as location, industry, and duration to narrow down your search.",
            "4. Click on an internship listing to view more details and apply.",
          ],
        },
        {
          question: "How do I apply for an internship?",
          answer: [
            "1. Once you find an internship that interests you, click on the listing.",
            "2. Review the job description and requirements.",
            "3. Click the Apply button.",
            "4. Follow the application instructions, which may include submitting a resume, cover letter, and other documents.",
          ],
        },
      ],
      managingAccount: [
        {
          question: "How do I update my profile?",
          answer: [
            "1. Log in to your account.",
            "2. Click on your profile picture or name at the top right corner.",
            "3. Select 'Edit Profile.'",
            "4. Update your information and click 'Save.'",
          ],
        },
        {
          question: "How do I change my password?",
          answer: [
            "1. Log in to your account.",
            "2. Go to the 'Account Settings' section.",
            "3. Click on 'Change Password.'",
            "4. Enter your current password and the new password.",
            "5. Click 'Save.'",
          ],
        },
        {
          question: "What if I forget my password?",
          answer: [
            "1. Go to the [login page](#).",
            "2. Click on 'Forgot Password.'",
            "3. Enter your email address and click 'Submit.'",
            "4. Follow the instructions in the email you receive to reset your password.",
          ],
        },
      ],
      applicationProcess: [
        {
          question: "How can I track my application status?",
          answer: [
            "1. Log in to your account.",
            "2. Go to the 'My Applications' section.",
            "3. View the status of each application (e.g., Submitted, Under Review, Accepted, Rejected).",
          ],
        },
        {
          question: "What should I do if I don't hear back from an employer?",
          answer: [
            "It’s common for employers to take a few weeks to review applications.",
            "You can send a polite follow-up email to inquire about the status of your application if you haven’t heard back within the expected timeframe.",
          ],
        },
      ],
      troubleshooting: [
        {
          question: "I can't log in to my account. What should I do?",
          answer: [
            "1. Ensure that you are using the correct email address and password.",
            "2. Check your internet connection.",
            "3. Try resetting your password if you have forgotten it.",
            "4. If the problem persists, contact our support team at [support email].",
          ],
        },
        {
          question: "I'm experiencing technical issues with the website. What should I do?",
          answer: [
            "1. Try refreshing the page or clearing your browser's cache.",
            "2. Ensure that your browser is up-to-date.",
            "3. If the issue continues, please report it to our support team with details about the problem and any error messages you have received.",
          ],
        },
      ],
      contactUs: [
        {
          question: "Contact Us",
          answer: [
            "If you need further assistance, you can reach our support team:",
            "**Email:** [support email]",
            "**Phone:** [support phone number]",
            "**Live Chat:** Available on our website from 9 AM to 5 PM, Monday to Friday.",
          ],
        },
      ],
    };

    setCurrenthelps(helpData);
  }, []);

  const togglehelp = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderHelps = (category) => {
    if (currenthelps[category]) {
      return currenthelps[category].map((help, index) => (
        <div
          className={`help ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <h3 className="help-title">{help.question}</h3>
          {Array.isArray(help.answer) ? (
            <ul className="help-text">
              {help.answer.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="help-text">{help.answer}</p>
          )}
          <button
            className="help-toggle"
            onClick={() => togglehelp(index)}
          >
            {activeIndex === index ? <FaTimes /> : <FaPlus />}
          </button>
        </div>
      ));
    }
    return <p>No helps available for this category.</p>;
  };

  return (
    <>
      <Internal_Navbar />
      <div className="flex justify-center">

          <div className="mt-14">
            <h2 className="flex justify-center p-4 relative top-10" style={{ fontSize: '32px' }}>Help Centre</h2>
            <p className="flex justify-center p-4 text-center">
              Welcome to the Help Centre for internsbee.com. We're here to assist you with any questions or issues you might have. Choose a category below to get started.
            </p>
            <div className="dropdown flex justify-center p-4">
              <select
                className="w-1/2 h-11 border-1 border-amber-400 p-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="option1">Getting Started</option>
                <option value="option2">Finding Internships</option>
                <option value="option3">Managing Your Account</option>
                <option value="option4">Application Process</option>
                <option value="option5">Troubleshooting</option>
                <option value="option6">Contact Us</option>
              </select>
            </div>
            <div className="faq-container p-4">
              {selectedCategory === "option1" && (
                <div>
                  <h1 className="flex gap-2" style={{ fontSize: '20px' }}><MdOutlineStart />Getting Started</h1>
                  {renderHelps("gettingStarted")}
                </div>
              )}
              {selectedCategory === "option2" && (
                <div>
                  <h1 className="flex gap-2" style={{ fontSize: '20px' }}><MdFindInPage />Finding Internships</h1>
                  {renderHelps("findingInternships")}
                </div>
              )}
              {selectedCategory === "option3" && (
                <div>
                  <h1 className="flex gap-2" style={{ fontSize: '20px' }}><MdOutlineManageAccounts />Managing Your Account</h1>
                  {renderHelps("managingAccount")}
                </div>
              )}
              {selectedCategory === "option4" && (
                <div>
                  <h1 className="flex gap-2" style={{ fontSize: '20px' }}><VscServerProcess />Application Process</h1>
                  {renderHelps("applicationProcess")}
                </div>
              )}
              {selectedCategory === "option5" && (
                <div>
                  <h1 className="flex gap-2" style={{ fontSize: '20px' }}><MdTroubleshoot />Troubleshooting</h1>
                  {renderHelps("troubleshooting")}
                </div>
              )}

            </div>
            <div>
              {selectedCategory === "option6" && (
                <div className="">
                  <h1 className="flex justify-center gap-2" style={{ fontSize: '20px' }}><MdContactPhone />Contact Us</h1>
                  <div className="row1 p-4 flex justify-center">
                    <div className="card1">
                      <h4 className="p-2">
                        If you need further assistance, you can reach our support team:
                      </h4>
                      <ul>
                        <li className="p-2">Email: [support email]</li>
                        <li className="p-2">Phone: [support phone number]</li>
                        <li className="p-2">Live Chat: Available on our website from 9 AM to 5 PM, Monday to Friday.</li>
                      </ul>

                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="flex justify-center p-2 text-center">We’re here to help you have the best experience on internsbee.com. Thank you for using our platform!</p>

            </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
