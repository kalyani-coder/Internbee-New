import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Message = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("pending"); 

  const fetchEnquiries = async () => {
    setLoading(true);

    try {
      const userId = localStorage.getItem("userId");
      const res = await axios.get(
        `https://internbee-backend-apis.onrender.com/api/enquiry/employerId/${userId}?status=${filter}`
      );
      setEnquiries(res.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [filter]);

  const fetchPostInfo = async (postId) => {
    try {
      const res = await axios.get(
        `https://internbee-backend-apis.onrender.com/api/postinternship/${postId}`
      );
      setSelectedPost(res.data);
    } catch (error) {
      console.error("Error fetching post info:", error);
    }
  };

  const handleViewPost = (postId) => {
    fetchPostInfo(postId);
    // Implement logic to show the popup/modal for the selected post
    console.log(`View Post clicked for ID: ${postId}`);
  };

  return (
    <>
     
      <div>
        <Navbar />
      </div>
    
      <div className="flex flex-col items-center justify-center text-center mt-10">
     
        {loading && (
          <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">Helpdesk</h1>
        <div className="mb-4">
          <button
            className={`${
              filter === "pending"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-700 text-white"
            } font-bold py-2 px-4 rounded mr-2`}
            onClick={() => setFilter("pending")}
          >
            New Enquiry
          </button>
          <button
            className={`${
              filter === "resolved"
                ? "bg-green-700 text-white"
                : "bg-green-500 hover:bg-green-700 text-white"
            } font-bold py-2 px-4 rounded`}
            onClick={() => setFilter("resolved")}
          >
            Resolved Enquiry
          </button>
        </div>

        <div className="w-full">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry._id}
              className="bg-white border border-gray-300 p-4 m-2 rounded-md w-3/4 mx-auto flex flex-col"
            >
              <h3 className="text-left mb-2 font-bold text-lg">
                student Enquiry: {enquiry.Enquiry}
              </h3>
              <h2 className="text-left mb-2 font-bold text-lg">
                Reply : {enquiry.EnquiryReply || "Resolve this "}
              </h2>
              <p className="text-left mb-2">Student: {enquiry.StudentName}</p>
              <p className="text-left mb-2">Email: {enquiry.StudentEmail}</p>
              <p className="text-left mb-2">Phone: {enquiry.StudentPhone}</p>
              <p className="text-left mb-2">
                Enquiry Date: {enquiry.EnquiryDate}
              </p>
              <p className="text-left mb-2">status : {enquiry.EnquiryStatus}</p>
              <div className="flex justify-end mb-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleViewPost(enquiry.postId)}
                >
                  View Post
                </button>
                <Link
                  to={{
                    pathname: `/resolve/${enquiry._id}`,
                  }}
                >
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    Resolve
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 m-2 rounded-md">
            <h2 className="text-xl font-bold mb-4">
              Post Information for {selectedPost.job_Title}
            </h2>
            <p>
              <strong>Job Title:</strong> {selectedPost.job_Title}
            </p>
            <p>
              <strong>Location:</strong> {selectedPost.location}
            </p>
            <p>
              <strong>Company Name:</strong> {selectedPost.company_Name}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedPost.start_Date}
            </p>
            <p>
              <strong>End Date:</strong> {selectedPost.end_Date}
            </p>
            <p>
              <strong>Job Type:</strong> {selectedPost.job_Type}
            </p>
            <p>
              <strong>Skills:</strong> {selectedPost.skills}
            </p>
            <p>
              <strong>Position:</strong> {selectedPost.position}
            </p>
            <p>
              <strong>Job Description:</strong> {selectedPost.job_Description}
            </p>
            <p>
              <strong>Stipend:</strong> {selectedPost.stipend}
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
