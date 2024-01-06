// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Navbar";
import axios from "axios";

const ApplyInternship = () => {
  const { internshipId } = useParams();
  const [internship, setInternship] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  useEffect(() => {
    const fetchInternshipData = async () => {
      try {
        const response = await fetch(
          `https://internbee-backend-apis.onrender.com/api/postinternship/${internshipId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        // console.log("Fetched Internship Data:", data);

        setInternship(data);
      } catch (error) {
        console.error("Error fetching internship data:", error);
      }
    };

    fetchInternshipData();
  }, [internshipId]);

  // If internship data is still being fetched, you can show a loading indicator
  if (!internship) {
    return <p>Loading...</p>;
  }
const handleConfirmation = async () => {
  setIsSubmitting(true); // Set submission state to true when starting the request

  try {
    const formData = {
      postId: internshipId,
      InternId: localStorage.getItem("userId"),
    };

    const response = await axios.post(
      "https://internbee-backend-apis.onrender.com/api/applyinternship/",
      formData
    );

    console.log("Response:", response.data);
    alert("Applied Successfully");

    // Perform further actions upon successful submission
    // For example, show a success message or redirect to a different page

    setShowConfirmation(false); // Close the confirmation popup upon successful submission
  } catch (error) {
    // Handle errors from the API
    if (error.response) {
      const errorMessage = error.response.data.message || "Server Error";
      console.error("Server Error:", errorMessage);
      alert(errorMessage);
      setShowConfirmation(false); 
    } else if (error.request) {
      console.error("Request Error:", error.request);
      alert("Request Error");
      setShowConfirmation(false); 
    } else {
      console.error("Error:", error.message);
      alert("An error occurred");
      setShowConfirmation(false); 
    }
  } finally {
    setIsSubmitting(false); 
    setShowConfirmation(false); 
    // Reset submission state regardless of success or failure
  }
};



  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mx-auto max-w-2xl p-6">
        <div className="card w-full m-6 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden mt-10">
          <div className="flex-grow px-6 py-4">
            {isSubmitting && ( // Display loading spinner if isSubmitting is true
              <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
              </div>
            )}
            <h2 className="card-title text-2xl font-semibold text-gray-800">
              {internship.job_Title}
            </h2>
            <p className="card-company text-xl text-gray-700">
              Company Name: {internship.company_Name}
            </p>

            <div className="flex  items-center my-4 gap-8">
              <div className="flex items-center ">
                <FaRegClock className="mr-2" />
                <p className="card-company text-xl text-gray-700">
                  Start Date: {internship.start_Date}
                </p>
              </div>
              <div className="flex items-center">
                <FaMoneyBill className="mr-2" />
                <p className="card-location text-xl text-gray-700">
                  &#x20B9;{internship.stipend}
                </p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <p className="card-duration text-xl text-gray-700">
                  {internship.location}
                </p>
              </div>
              <div className="flex items-center">
                <FaRegClock className="mr-2" />
                <p className="card-duration text-xl text-gray-700">
                  End Date: {internship.end_Date}
                </p>
              </div>
            </div>
            <p className="card-description text-base text-gray-700 my-4">
              Job Type: {internship.job_Type}
            </p>
            <p className="card-description text-base text-gray-700 my-4">
              {internship.job_Description}
            </p>
            <div className="flex justify-between items-center">
              <p className="card-skills text-base text-gray-700">
                Skills: {internship.skills}
              </p>

              <button
                onClick={() => setShowConfirmation(true)}
                className="bg-amber-300 text-black p-2 rounded-lg"
              >
                Apply Now
              </button>
            </div>
            {showConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-md">
                  <p className="text-xl">Confirm your application?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setShowConfirmation(false)}
                      disabled={isSubmitting} // Disable the button while submitting
                      className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirmation}
                      disabled={isSubmitting} // Disable the button while submitting
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyInternship;
