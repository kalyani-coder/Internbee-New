import React, { useState, useEffect } from "react";
import HomeNav from "../HomeNav/HomeNav";
import axios from "axios";
import { Link } from "react-router-dom";
import "../UpdatedNav/Internal_Navbar";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar";
import "../ResponsiveCss/ResponsiveCss.css";
import Footer from './../Footer';

const ViewProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [editedSkills, setEditedSkills] = useState("");

  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [editedExperience, setEditedExperience] = useState("");

  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [editedEducation, setEditedEducation] = useState({
    education: "",
    instituteName: "",
    stream: "",
    passOutYear: "",
    percentage: "",
  });

  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [editedPersonal, setEditedPersonal] = useState({
    languages: "",
    permanentaddress: "",
    city: "",
    district: "",
    birthdate: "",
  });

  const [isEditingProjects, setIsEditingProjects] = useState(false);
  const [editedProjects, setEditedProjects] = useState({
    projectName: "",
    projectSummary: "",
  });

  const userId = localStorage.getItem("userId");

  const toggleEditPopup = (setEditState) => {
    setEditState((prevState) => !prevState);
  };

  const handleSubmit = async (event, data, setEditState, endpoint) => {
    event.preventDefault();

    try {
      await axios.patch(`http://localhost:8000/api/studentsdetails/userId/${userId}`, data);
      setEditState(false);
      // Fetch the updated user details after a successful update
      const response = await axios.get(`http://localhost:8000/api/studentsdetails/userId/${userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error editing details:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8000/api/studentsdetails/userId/${userId}`)
        .then((response) => {
          setUserDetails(response.data);
          // Update editedEducation state with user's education details
          setEditedEducation({
            education: response.data.education || "",
            instituteName: response.data.instituteName || "",
            stream: response.data.stream || "",
            passOutYear: response.data.passOutYear || "",
            percentage: response.data.percentage || "",
          });
          // Update other edit states with user's details
          setEditedSkills(response.data.keySkills || "");
          setEditedExperience(response.data.experience || "");
          setEditedPersonal({
            languages: response.data.languages || "",
            permanentaddress: response.data.permanentaddress || "",
            city: response.data.city || "",
            district: response.data.district || "",
            birthdate: response.data.birthdate || "",
          });
          setEditedProjects({
            projectName: response.data.projectName || "",
            projectSummary: response.data.projectSummary || "",
          });
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userId]);


  return (
    <>
      <div>
        <Internal_Navbar />
      </div>
      <div className="mt-28 mb-24">
        <div className="flex justify-center">
          <div className="border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg">
            <div className="flex flex-col sm:flex-row justify-center gap-10 p-2 sm:gap-8 md:gap-20">
              <div className="p-2 flex justify-center">
                <img
                  src={
                    userDetails && userDetails.profile_pic
                      ? userDetails.profile_pic
                      : "/dummy-profile-image.jpg"
                  }
                  alt="Profile"
                  className="rounded-full w-[6rem] h-[6rem] sm:w-[9rem] sm:h-[9rem] border-4 border-yellow-500"
                />
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start sm:relative sm:top-7 sm:right-4">
                <h2 className="text-xl sm:text-2xl font-bold text-amber-500">
                  {userDetails &&
                    `${userDetails.firstName} ${userDetails.lastName}`}
                </h2>
                <div className="text-center sm:text-left">
                  <p className="text-gray-600">
                    Address: {userDetails && userDetails.permanentaddress}
                  </p>
                  <p className="text-gray-600">
                    Contact: {userDetails && userDetails.contact}
                  </p>
                  <div className="flex justify-center sm:justify-start">
                    <p className="text-amber-500 underline text-lg sm:text-xl p-2 hover:text-black cursor-pointer">
                      Edit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-7 mt-4">
          <div className="border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-2">
            <div className="p-2 text-center relative top-3">
              <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 text-center sm:text-left">Resume</h1>
              <p className="text-amber-500 underline text-lg sm:text-xl p-2 hover:text-black cursor-pointer">
                {userDetails && userDetails.student_PDF && (
                  <a
                    href={userDetails.student_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    View Resume
                  </a>
                )}
              </p>
            </div>
          </div>
          <div className="border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-2">
            <div className="text-center relative top-2">
              <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 text-center sm:text-left">Experience</p>
              <div className="text-gray-700">
                {userDetails && userDetails.experience ? (
                  <p>{userDetails.experience}</p>
                ) : (
                  <p>No experience data available</p>
                )}
                <div className="flex justify-center">
                  <p className="text-amber-500 underline text-lg sm:text-xl p-2 hover:text-black cursor-pointer">
                    Edit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg p-4 flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 text-center sm:text-left">Skills</p>
            <div className="flex flex-col items-center sm:flex-row sm:gap-4 sm:items-start">
              {userDetails &&
                userDetails.keySkills &&
                typeof userDetails.keySkills === "string" ? (
                userDetails.keySkills.split(",").map((skill, index) => (
                  <div key={index} className="text-gray-700 mb-1 sm:mb-0 text-center sm:text-left">
                    {skill.trim()}
                  </div>
                ))
              ) : (
                <p className="text-gray-700 text-center sm:text-left">No skills available</p>
              )}
            </div>
            <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 text-center sm:text-left">
              Edit
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-4 gap-4">
          <div className="border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-4">
            <p className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">
              Project Details
            </p>
            <div className="text-center sm:text-left">
              {userDetails && userDetails.projectName ? (
                <>
                  <p>Project Name: {userDetails.projectName}</p>
                  <p className="font-bold">Project Summary: {userDetails.projectSummary}</p>
                </>
              ) : (
                <p>No project details available</p>
              )}
            </div>
            <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 text-center sm:text-left">
              Edit
            </p>
          </div>
          <div className="border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-4">
            <p className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">
              Education Details
            </p>
            <div className="text-center sm:text-left">
              {userDetails ? (
                <>
                  <p>Education Level: {userDetails.education}</p>
                  <p>Institute Name: {userDetails.instituteName}</p>
                  <p>Stream: {userDetails.stream}</p>
                  <p>Pass Out Year: {userDetails.passOutYear}</p>
                  <p>Percentage/CGPA: {userDetails.percentage}</p>
                </>
              ) : (
                <p>No education details available</p>
              )}
            </div>
            <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 text-center sm:text-left">
              Edit
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4 s:m-4 md:m-4 lg:m-4">
          <div className="border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg p-4  items-center sm:flex-row sm:justify-between">
            <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 text-center sm:text-left">Personal Details</p>
            <div className="items-center sm:flex-row sm:gap-4 sm:items-start">
              {userDetails && userDetails.languages ? (
                <>
                  <p>Languages: {userDetails.languages}</p>
                  <p>Permanent Address: {userDetails.permanentaddress}</p>
                  <p>City: {userDetails.city}</p>
                  <p>District: {userDetails.district}</p>
                  <p>Birth Date: {userDetails.birthdate}</p>
                </>
              ) : (
                <p>No personal details available</p>
              )}
            </div>
            <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 text-center sm:text-left">
              Edit
            </p>
          </div>
        </div>
      </div>


      <div>
        <Footer />
      </div>
    </>
  );
};

export default ViewProfile;

