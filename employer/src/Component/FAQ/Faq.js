import React, { useState } from "react";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";
import QuickNavbar from "../QuickNav/QuickNav";
import FaqNav from "../FaqNav/FaqNav";
import { FaPlus, FaTimes } from "react-icons/fa";
import "./Faq.css";

const FAQPage = () => {
  const faqData = [
    {
      question: "How do I apply for an internship?",
      answer:
        "To apply for an internship, navigate to the 'Apply for Internships' section on our portal.",
    },
    {
      question: "Is there any age restriction for applying to internships?",
      answer:
        "Generally, there is no specific age restriction for applying to internships. However, some internships may have specific eligibility criteria, so make sure to check the requirements for each internship posting.",
    },
    {
      question: "Can I apply for multiple internships at the same time?",
      answer:
        "Yes, you can apply for multiple internships simultaneously. Ensure that you meet the requirements for each internship, and submit separate applications for each position you are interested in.",
    },
    {
      question: "How long does the internship application process take?",
      answer:
        "The duration of the internship application process varies for each position. After submitting your application, the hiring process may include interviews, assessments, and other evaluation steps. Keep an eye on your application status for updates.",
    },
    {
      question:
        "What documents do I need to submit with my internship application?",
      answer:
        "The required documents may vary depending on the internship. Commonly requested documents include a resume, cover letter, and academic transcripts. Be sure to carefully review the application instructions provided for each internship.",
    },
    {
      question: "Can international students apply for internships?",
      answer:
        "Yes, in most cases, international students are eligible to apply for internships. However, some positions may have specific eligibility requirements, such as work authorization. Make sure to check the internship details and contact the employer for clarification if needed.",
    },
    {
      question: "Is there compensation for internship positions?",
      answer:
        "Internship compensation varies. Some internships offer stipends, while others may provide hourly wages. Unpaid internships are also common, especially in certain industries. Check the internship posting for information on compensation and benefits.",
    },
    {
      question: "How can I track the status of my internship application?",
      answer:
        "After submitting your application, you can typically log in to your account on our portal to track the status of your internship application. Check for updates, and if there is a specific contact provided, feel free to reach out for more information.",
    },
    {
      question: "Can I apply for internships after the deadline?",
      answer:
        "It is advisable to submit your internship application before the specified deadline. However, some employers may consider late applications depending on the circumstances. Contact the employer directly to inquire about their policy regarding late applications.",
    },
    {
      question:
        "What should I do if I encounter technical issues while applying?",
      answer:
        "If you encounter technical issues during the application process, try refreshing the page or clearing your browser cache. If the problem persists, contact our support team at support@internshipportal.com for assistance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [FAQPerPage] = useState(4);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const indexOfLastFAQ = currentPage * FAQPerPage;
  const indexOfFirstFAQ = indexOfLastFAQ - FAQPerPage;
  const currentFAQs = faqData.slice(indexOfFirstFAQ, indexOfLastFAQ);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);

  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <>
      <FaqNav />
      <div className="faq1 mb-40">
        <h1 className="faq-h1">Frequently Asked Questions</h1>
        <div className="flex justify-center">
          <div className="faq-container">
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
            {faqData.length > FAQPerPage && (
              <ul className="pagination mb-2 flex justify-center">
                <li className="page-item p-2">
                  <button
                    onClick={prevPage}
                    className="page-link text-orange-500 border-2 border-orange-500 hover:bg-orange-400 hover:text-black"
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({
                  length: Math.ceil(faqData.length / FAQPerPage),
                }).map((_, index) => (
                  <li key={index} className="page-item p-2">
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link text-orange-500 border-2 border-orange-500 hover:bg-orange-400 hover:text-black"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className="page-item p-2">
                  <button
                    onClick={nextPage}
                    className="page-link text-orange-500 border-2 border-orange-500 hover:bg-orange-400 hover:text-black"
                    disabled={indexOfLastFAQ >= faqData.length}
                  >
                    Next
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
