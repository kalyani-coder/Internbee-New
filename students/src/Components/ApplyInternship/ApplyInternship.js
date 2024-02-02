// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Navbar";
import axios from "axios";
import Internal_Navbar from "../Internal_Navbar";

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
    setIsSubmitting(true);
  
    try {
      const userId = localStorage.getItem("userId");
  
      // Fetch user data from the API
      const userResponse = await axios.get(`https://internbee-backend-apis.onrender.com/api/auth/${userId}`);
      const userData = userResponse.data;
  
      console.log("User Data:", userData); // Log user data
  
      // Determine the type of package (free or monthly)
      const packageType = userData.freePackage ? "freePackage" : "monthlyPackage";
  
      const opportunities_Counter = userData.opportunities_Counter || 0;
      const opportunities = userData[packageType].opportunities || 0;
  
      console.log("Opportunities_Counter:", opportunities_Counter);
      console.log("Opportunities:", opportunities);
  
      // Check if any of the required fields is empty or null
      if (
        userData[packageType].freePackagePrice === "" ||
        userData[packageType].searches === null ||
        userData[packageType].verified_application === "" ||
        userData[packageType].dedicated_crm === "" ||
        userData[packageType].opportunities === null
      ) {
        console.log("Empty or null field detected:", userData);
        alert("You need to subscribe first. Please update your subscription.");
        return;
      }
  
      console.log("Before opportunities check:", opportunities_Counter, opportunities);
  
      console.log("User Data:", userData);
      console.log("Opportunities_Counter:", opportunities_Counter);
      console.log("Opportunities:", opportunities);
  
      if (opportunities_Counter >= opportunities) {
        alert("Apply limit reached. You can't apply for more jobs.");
        return;
      }
  
      console.log("After opportunities check. Proceeding with the application.");
  
      const formData = {
        postId: internshipId,
        InternId: userId,
      };
  
      const response = await axios.post(
        "https://internbee-backend-apis.onrender.com/api/applyinternship/",
        formData
      );
  
      if (response.data) {
        // Increment the internship_counter
        const updatedUserData = {
          ...userData,
          freePackage: {
            ...userData.freePackage,
            opportunities_Counter: (userData.freePackage.opportunities_Counter || 0) + 1,
            opportunities: userData[packageType].opportunities - 1,
          },
        };
  
        // Update user details with the incremented opportunities_Counter
        await axios.patch(`https://internbee-backend-apis.onrender.com/api/auth/${userId}`, updatedUserData);
  
        alert("Applied Successfully");
        setShowConfirmation(false); // Close the confirmation popup upon successful submission
      } else {
        // Handle the case where the response is not as expected
        alert("Error: Unable to apply for the internship");
      }
    } catch (error) {
      // Handle errors from the API
      console.error("Error:", error.message);
      console.log("Error details:", error.response.data); // Log the response details
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };
  







  return (
    <>
      <div>
        <Internal_Navbar />
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