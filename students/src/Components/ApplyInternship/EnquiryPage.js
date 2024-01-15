import React, { useState, useEffect } from "react";
import axios from "axios";
import Internal_Navbar from "../Internal_Navbar";

function EnquiryPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("resolved");
  const [selectedInternship, setSelectedInternship] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const userId = localStorage.getItem("userId");

        const res = await axios.get(
          `http://localhost:8000/api/enquiry/studentId/${userId}?status=${filter}`
        );
        setEnquiries(res.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  const handleTabChange = (newFilter) => {
    setFilter(newFilter);
  };

  const fetchInternshipInfo = async (postId) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/postinternship/${postId}`
      );
      setSelectedInternship(res.data);
    } catch (error) {
      console.error("Error fetching internship info:", error);
    }
  };

  const openInternshipPopup = (postId) => {
    fetchInternshipInfo(postId);
  };

  const closeInternshipPopup = () => {
    setSelectedInternship(null);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="mb-20">
        <Internal_Navbar />
      </div>
      <div className="container mx-auto">
        <div className="mb-4 flex justify-center">
          <button
            className={`${
              filter === "resolved" ? "bg-blue-700" : "bg-blue-500"
            } text-white font-bold py-2 px-4 rounded mr-2`}
            onClick={() => handleTabChange("resolved")}
          >
            Resolved Enquiries
          </button>
          <button
            className={`${
              filter === "pending" ? "bg-green-700" : "bg-green-500"
            } text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleTabChange("pending")}
          >
            Pending Enquiries
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center m-5">
          {loading && (
            <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
            </div>
          )}

          {enquiries.map((enquiry) => (
            <div key={enquiry._id} className="bg-white p-4 rounded shadow-md">
              <p className="mb-2">
                <strong>Student:</strong> {enquiry.StudentName}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {enquiry.StudentEmail}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {enquiry.StudentPhone}
              </p>
              <p className="mb-2">
                <strong>Enquiry Date:</strong> {enquiry.EnquiryDate}
              </p>
              <p className="mb-2">
                <strong>Status:</strong> {enquiry.EnquiryStatus}
              </p>
              <h3 className="text-lg font-semibold mb-2 text-red-700">
                Enquiry : {enquiry.Enquiry}
              </h3>
              <p className="mb-2 text-green-700 font-semibold text-lg">
                <strong>Reply:</strong> {enquiry.EnquiryReply}
              </p>
              <button
                className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => openInternshipPopup(enquiry.postId)}
              >
                About Internship
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedInternship && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 m-2 rounded-md">
            <h2 className="text-xl font-bold mb-4">
              Internship Information for {selectedInternship.job_Title}
            </h2>
            <p>
              <strong>Job Title:</strong> {selectedInternship.job_Title}
            </p>
            <p>
              <strong>Location:</strong> {selectedInternship.location}
            </p>
            <p>
              <strong>Company Name:</strong> {selectedInternship.company_Name}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedInternship.start_Date}
            </p>
            <p>
              <strong>End Date:</strong> {selectedInternship.end_Date}
            </p>
            <p>
              <strong>Job Type:</strong> {selectedInternship.job_Type}
            </p>
            <p>
              <strong>Skills:</strong> {selectedInternship.skills}
            </p>
            <p>
              <strong>Position:</strong> {selectedInternship.position}
            </p>
            <p>
              <strong>Job Description:</strong>{" "}
              {selectedInternship.job_Description}
            </p>
            <p>
              <strong>Stipend:</strong> {selectedInternship.stipend}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={closeInternshipPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnquiryPage;
