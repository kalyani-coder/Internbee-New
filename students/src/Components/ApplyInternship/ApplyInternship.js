// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import Internal_Navbar from "../Internal_Navbar";

const ApplyInternship = () => {
  const { internshipId } = useParams();
  const [internship, setInternship] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationCounter, setApplicationCounter] = useState(0);

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
        setInternship(data);

        // Fetch the application count from the backend
        const applicationCountResponse = await axios.get(
          `http://localhost:8000/api/applicationcount/${internshipId}`
        );
        setApplicationCounter(applicationCountResponse.data.count);
      } catch (error) {
        console.error("Error fetching internship data:", error);
      }
    };

    fetchInternshipData();
  }, [internshipId]);

  const handleConfirmation = async () => {
    setIsSubmitting(true);

    try {
      if (isValidPackage()) {
        const formData = {
          postId: internshipId,
          InternId: localStorage.getItem("userId"),
        };

        const response = await axios.post(
          "http://localhost:8000/api/applyinternship/",
          formData
        );

        console.log("Response:", response.data);

        if (response.data.success) {
          setApplicationCounter(applicationCounter + 1);
          alert("Applied Successfully");
        } else {
          alert(response.data.message || "Application Failed");
        }

        setShowConfirmation(false);
      } else {
        alert("You do not have a valid package.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isValidPackage = () => {
    // Placeholder logic, replace with your own logic
    // For example, check if the user has a monthly package
    return true;
  };

  return (
    <>
      <div>
        <Internal_Navbar />
      </div>
      <div className="mx-auto w-full max-w-2xl p-6">
        <div className="flex-grow w-full mt-32">
          {isSubmitting && (
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
          <hr className="m-3" />

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
          <hr className="m-3" />
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


          </div>
          <hr className="m-3" />
          <div className="flex justify-end">
            <button
              onClick={() => setShowConfirmation(true)}
              className="bg-amber-300 text-black p-2 rounded-lg"
            >
              Apply Now
            </button>
          </div>
          <div className="flex justify-end">
            <p className="mr-4">
              Applications Successfully Applied: {applicationCounter}
            </p>
          </div>
          {showConfirmation && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <p className="text-xl">Confirm your application?</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    disabled={isSubmitting}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmation}
                    disabled={isSubmitting}
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
    </>
  );
};

export default ApplyInternship;
