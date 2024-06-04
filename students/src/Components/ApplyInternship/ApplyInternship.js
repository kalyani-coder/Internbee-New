import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar.js";
import "../ApplyInternship/Applyintern.css";
import Footer from "../Footer.js";

const ApplyInternship = () => {
  const { internshipId } = useParams();
  const [internship, setInternship] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInternshipData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/postinternship/${internshipId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setInternship(data);
      } catch (error) {
        console.error("Error fetching internship data:", error);
      }
    };

    fetchInternshipData();
  }, [internshipId]);

  if (!internship) {
    return <p>Loading...</p>;
  }

  const handleApply = async () => {
    setIsSubmitting(true);

    try {
      const userId = localStorage.getItem("userId");

      // Check if student ID exists in studentsdetails API
      const studentDetailsResponse = await axios.get(
        `http://localhost:8000/api/studentsdetails/${userId}`
      );

      if (studentDetailsResponse.data.redirectToProfile) {
        alert("Please complete your profile first.");
        return navigate("/profile");
      }

      const userResponse = await axios.get(
        `http://localhost:8000/api/auth/${userId}`
      );
      const userData = userResponse.data;

      const packageType = userData.freePackage ? "freePackage" : "monthlyPackage";

      const opportunities_Counter = userData.opportunities_Counter || 0;
      const opportunities = userData[packageType].opportunities || 0;

      if (
        userData[packageType].freePackagePrice === "" ||
        userData[packageType].searches === null ||
        userData[packageType].verified_application === "" ||
        userData[packageType].dedicated_crm === "" ||
        userData[packageType].opportunities === null
      ) {
        alert("You need to subscribe first. Please update your subscription.");
        return;
      }

      if (opportunities_Counter >= opportunities) {
        alert("Apply limit reached. You can't apply for more jobs.");
        return;
      }

      const formData = {
        postId: internshipId,
        InternId: userId,
      };

      const response = await axios.post(
        "http://localhost:8000/api/applyinternship/",
        formData
      );

      if (response.status === 201) {
        const updatedUserData = {
          ...userData,
          freePackage: {
            ...userData.freePackage,
            opportunities_Counter: (userData.freePackage.opportunities_Counter || 0) + 1,
            opportunities: 0,
          },
        };

        await axios.patch(
          `http://localhost:8000/api/auth/${userId}`,
          updatedUserData
        );

        alert("Application submitted successfully!");
      } else {
        alert("Error: Unable to apply for the internship");
      }
    } catch (error) {
      console.error("Error:", error.message);
      console.log("Error details:", error.response.data);
      if (error.response.data.message === "Student not found") {
        navigate("/profile");

      }

      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="bg-gray-50">
      <div>
        <Internal_Navbar />
      </div>
      <div className=" apply-card mx-auto max-w-2xl p-6">
        <div className="card w-full  rounded-md flex flex-grow  items-center justify-center bg-white shadow-md overflow-hidden mt-20">
          <div className="flex-grow px-6 py-4">
            <h2 className="card-title text-2xl font-semibold text-gray-800">
              {internship.job_Title}
            </h2>
            <p className="card-company text-xl text-gray-700">
              Company Name: {internship.company_Name}
            </p>

            <div className="fild flex  items-center my-4 gap-8">
              <div className="flex items-center p-2">
                <FaRegClock className="mr-2" />
                <p className="card-company text-xl text-gray-700">
                  Start Date: {internship.start_Date}
                </p>
              </div>
              <div className="flex items-center p-2">
                <FaMoneyBill className="mr-2" />
                <p className="card-location text-xl text-gray-700">
                  &#x20B9;{internship.stipend}
                </p>
              </div>
              <div className="flex items-center p-2">
                <FaMapMarkerAlt className="mr-2" />
                <p className="card-duration text-xl text-gray-700">
                  {internship.location}
                </p>
              </div>
              <div className="flex items-center p-2">
                <FaRegClock className="mr-2" />
                <p className="card-duration text-xl text-gray-700">
                  End Date: {internship.end_Date}
                </p>
              </div>
            </div>
            <div className="flex gap-32">
              <div>
                <p className="card-description text-base text-gray-700 mb-3">
                  Job Type: {internship.job_Type}
                </p>
              </div>
              <div className="flex items-center">
                <FaRegClock className="mr-2" />
                <p className="card-duration text-sm text-gray-700">
                  Duration : {internship.position}
                </p>
              </div>
            </div>
            <p className="card-description text-base text-gray-700 mb-3">
              {internship.job_Description}
            </p>
            <div className=" justify-between items-center">
              <p className="card-skills text-base text-gray-700">
                Skills: {internship.skills}
              </p>

              <button
                onClick={handleApply}
                className="bg-amber-400 text-black p-2 rounded-lg w-24 mt-4 mx-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyInternship;
