import React, { useState, useEffect } from "react";
import HomeNav from "../HomeNav/HomeNav";
import axios from "axios";
import { Link } from "react-router-dom";
import "../UpdatedNav/Internal_Navbar";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar";
import "../ResponsiveCss/ResponsiveCss.css";
import Footer from './../Footer';
import "./ViewProfile.css"
const ViewProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const userId = localStorage.getItem("userId");

  const [editProfile, setEditProfile] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  const [editSkills, setEditSkills] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  const [editPersonal, setEditPersonal] = useState(false);

  const [formData, setFormData] = useState({
    profile_pic: "",
    firstName: "",
    lastName: "",
    permanentaddress: "",
    contact: "",
    experience: "",
    keySkills: "",
    projectName: "",
    projectSummary: "",
    education: "",
    instituteName: "",
    stream: "",
    passOutYear: "",
    percentage: "",
    languages: "",
    city: "",
    district: "",
    birthdate: "",
  });

  const toggleEditPopup = (field) => {
    switch (field) {
      case "profile":
        setEditProfile(!editProfile);
        break;
      case "experience":
        setEditExperience(!editExperience);
        break;
      case "skills":
        setEditSkills(!editSkills);
        break;
      case "project":
        setEditProject(!editProject);
        break;
      case "education":
        setEditEducation(!editEducation);
        break;
      case "personal":
        setEditPersonal(!editPersonal);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event, data, field) => {
    event.preventDefault();

    try {
      await axios.patch(`http://localhost:8000/api/studentsdetails/userId/${userId}`, data);

      // Fetch the updated user details after a successful update
      const response = await axios.get(`http://localhost:8000/api/studentsdetails/userId/${userId}`);
      setUserDetails(response.data);

      // Toggle off the edit state
      toggleEditPopup(field);
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
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userId]);

  const renderEditForm = (field) => {
    const formFields = {
      profile: ["firstName", "lastName", "permanentaddress", "contact"],
      experience: ["experience"],
      skills: ["keySkills"],
      project: ["projectName", "projectSummary"],
      education: ["education", "instituteName", "stream", "passOutYear", "percentage"],
      personal: ["languages", "permanentaddress", "city", "district", "birthdate"],
    };

    return (
      <form
        onSubmit={(event) => handleSubmit(event, formData, field)}
        className="p-2"
      >
        {formFields[field].map((key) => (
          <div key={key} className="mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {key}
            </label>
            <input
              type="text"
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className="mt-1 p-1 block w-full border rounded-md"
            />
          </div>
        ))}
        <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded-md">
          Save
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={() => toggleEditPopup(field)}
        >
          Cancel
        </button>
      </form>
    );
  };

  return (
    <>
      <div>
        <Internal_Navbar />
      </div>
      <div className="mt-28 mb-24">
        <div className="flex justify-center">
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg">
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
                    <p
                      className="text-amber-500 underline text-lg sm:text-xl p-2 hover:text-black cursor-pointer"
                      onClick={() => toggleEditPopup("profile")}
                    >
                      Edit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render edit form conditionally */}
        {editProfile && renderEditForm("profile")}

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-7 mt-4">
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-2">
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
          <div className=" border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-2">
            <div className="text-center relative top-2">
              <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-0 text-center sm:text-left">Experience</p>
              <div className="text-gray-700">
                {userDetails && userDetails.experience ? (
                  <p>{userDetails.experience}</p>
                ) : (
                  <p>No experience data available</p>
                )}
                <div className="flex justify-center">
                  <p
                    className="text-amber-500 underline text-lg sm:text-xl p-2 hover:text-black cursor-pointer"
                    onClick={() => toggleEditPopup("experience")}
                  >
                    Edit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Render edit form conditionally */}
        {editExperience && renderEditForm("experience")}

        <div className="flex justify-center mt-4">
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg p-4 flex flex-col items-center sm:flex-row sm:justify-between">
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
            <p
              className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 text-center sm:text-left"
              onClick={() => toggleEditPopup("skills")}
            >
              Edit
            </p>
          </div>
        </div>

        {/* Render edit form conditionally */}
        {editSkills && renderEditForm("skills")}

        <div className="flex flex-col sm:flex-row justify-center mt-4 gap-4">
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-4">
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
            <p
              className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 text-center sm:text-left"
              onClick={() => toggleEditPopup("project")}
            >
              Edit
            </p>
          </div>
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[40%] md:w-[19%] rounded-lg p-4">
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
            <p
              className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 text-center sm:text-left"
              onClick={() => toggleEditPopup("education")}
            >
              Edit
            </p>
          </div>
        </div>

        {/* Render edit form conditionally */}
        {editProject && renderEditForm("project")}
        {editEducation && renderEditForm("education")}

        <div className="flex justify-center mt-4 s:m-4 md:m-4 lg:m-4">
          <div className="viewcard border-2 border-amber-500 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-lg p-4  items-center sm:flex-row sm:justify-between">
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
            <p
              className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 text-center sm:text-left"
              onClick={() => toggleEditPopup("personal")}
            >
              Edit
            </p>
          </div>
        </div>

        {/* Render edit form conditionally */}
        {editPersonal && renderEditForm("personal")}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ViewProfile;
