import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Message.css";
import { MdFindInPage } from "react-icons/md";
import Footer from "../Footer/Footer";
import { FaTimes, FaPlus } from "react-icons/fa";

const Message = () => {
  const [currentFAQs, setCurrentFAQs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Fetch FAQs from backend or set faqData to fetch FAQs
    const faqData = [
      {
        question: "How do I apply for an internship?",
        answer:
          "To apply for an internship, navigate to the 'Apply for Internships' section on our portal.",
      },
    ];
    setCurrentFAQs(faqData);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <div>
            <h2 className="flex justify-center p-4 relative top-10" style={{ fontSize: '32px' }}>Help Centre</h2>
            <p className="flex justify-center p-4 text-center">Welcome to the Help Centre for internsbee.com We're here to assist you with any questions or issues you might have. Choose a category below to get started.</p>
          </div>
          <div className="dropdown flex justify-center p-4">
            <select className="w-1/2 h-11 border-1 border-amber-400 p-2" >
              <option value="option1">Filter Help Center</option>
              <option value="option2">Finding Internships</option>
              <option value="option3">Managing Your Account</option>
              <option value="option4">Application Process</option>
              <option value="option5">Troubleshooting</option>
              <option value="option6">Contact Us</option>
            </select>
          </div>
          <div className="row1 flex justify-center gap-7 p-4">
            <div className="card1">
              <h4>What is internsbee.com?</h4>
              <p>internsbee.com connects students and recent graduates with internship opportunities at top companies. Our platform helps you find internships that match your skills and career goals.</p>
            </div>
            <div className="card1">
              <h4>How do I sign up?</h4>
              <p>1. Go to our [sign-up page](#).<br />
                2. Enter your email address and create a password.<br />
                3. Complete your profile with your personal information, education, skills, and resume.<br />
                4. Verify your email address to activate your account.<br />
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-center">
              <h1 className="flex gap-2" style={{ fontSize: '20px' }}><MdFindInPage />Finding Internships</h1>
            </div>
            {currentFAQs.map((faq, index) => (
              <div
                className={`faq ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <h3 className="faq-title">{faq.question}</h3>
                <p className="faq-text">{faq.answer}</p>
                <button
                  className="faq-toggle"
                  onClick={() => toggleFAQ(index)}
                >
                  {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Message;
