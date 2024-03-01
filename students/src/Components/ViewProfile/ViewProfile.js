import React, { useState, useEffect } from "react";
import HomeNav from "../HomeNav/HomeNav";
import axios from "axios";
import { Link } from "react-router-dom";
// import Internal_Navbar from '../InternalNavbar';
import "../UpdatedNav/Internal_Navbar";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar";
import "../ResponsiveCss/ResponsiveCss.css";

const ViewProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [editedSkills, setEditedSkills] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedExperience, setEditedExperience] = useState("");

  const userId = localStorage.getItem("userId");

  const toggleEditPopup = () => {
    setIsEditing(!isEditing);
    setEditedSkills("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.patch(
        `https://backend.internsbee.com/api/studentsdetails/userId/${userId}`,
        {
          keySkills: editedSkills,
        }
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing skills:", error);
    }
  };

  useEffect(() => {
    // Retrieve user ID from local storage
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Fetch user details from the API based on the user ID
      axios
        .get(
          `https://backend.internsbee.com/api/studentsdetails/userId/${userId}`
        )
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [userData, setUserData] = useState({
    userId: "",
    user_number: "",
    firstName: "",
    lastName: "",
    user_email: "",
    email: "",
    birthdate: "",
    permanentaddress: "",
    city: "",
    district: "",
    country: "",
    currentaddress: "",
    currentcity: "",
    currentdistrict: "",
    currentstate: "",
    gender: "",
    currentcountry: "",
    contact: "",

    education: "",
    instituteName: "",
    stream: "",
    passOutYear: "",
    percentage: "",

    education_12: "",
    instituteName_12: "",
    stream_12: "",
    passOutYear_12: "",
    percentage_12: "",

    education_10: "",
    instituteName_10: "",
    stream_10: "",
    passOutYear_10: "",
    percentage_10: "",

    keySkills: "",
    languages: "",
    experience: "",
    salaryExpectations: "",
    projectName: "",
    projectSummary: "",

    filename: "",
    path: "",
    profile_pic: "",
    student_PDF: "",
    pdfPath: "",
    student_certificate: "",
    certificatePath: "",
  });

  // Fetch user data by user id from local storage or API
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Make a request to fetch user details by userId
      // Example using fetch API:
      fetch(`https://backend.internsbee.com/api/studentsdetails/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, []); // Run this effect only once on component mount

  const handleEditProfileClick = () => {
    setPopupOpen(true);
  };

  const handleSaveClick = () => {
    // Perform the PATCH request to update user details
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`/api/studentsdetails/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle successful update
          console.log("Profile updated successfully:", data);
          setPopupOpen(false); // Close the popup after successful save
        })
        .catch((error) => console.error("Error updating profile:", error));
    }
  };

  const handleCancelClick = () => {
    // Close the popup without saving
    setPopupOpen(false);
  };
  return (
    <>
      <div>
        {/* <HomeNav /> *****/}
        <Internal_Navbar />
      </div>

      <div className="container mx-auto p-4 bg-gray-100 mt-24">
        {/* Profile Picture and Name Section */}
        <div className="ViewProfileCard flex justify-between mb-8 align-middle bg-white shadow-lg rounded-lg ">
          <div>
            <section className="cardsection flex items-center gap-16">
              {/* Display Profile Picture */}
              <img
                src={
                  userDetails && userDetails.profile_pic
                    ? userDetails.profile_pic
                    : "/dummy-profile-image.jpg"
                }
                alt="Profile"
                className="rounded-full w-20 h-20 mr-4 border-4 border-yellow-500"
              />
              {/* Display Name and Contact Details */}
              <div className="">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {userDetails &&
                    `${userDetails.firstName} ${userDetails.lastName}`}
                </h2>
                {/* <p className="text-gray-600">State: {userDetails && userDetails.gender}</p> */}

                <p className="text-gray-600">
                  Address : {userDetails && userDetails.currentaddress}
                </p>
                <p className="text-gray-600">
                  Contact: {userDetails && userDetails.contact}
                </p>
                <p className="text-gray-600">
                  State: {userDetails && userDetails.state}
                </p>
              </div>
            </section>
          </div>
          <div className="items-center flex subscribe-btn-for-the-view-profile-button-div-section">
            <Link to="/freeplan">
              <button
                className="border p-2 subscribe-btn-for-the-view-profile-button"
                style={{ backgroundColor: "#FFBD59" }}
              >
                Subscribe
              </button>
            </Link>

            <button
              className="border p-2 subscribe-btn-for-the-view-profile-button"
              style={{ backgroundColor: "#FFBD59" }}
              onClick={handleEditProfileClick}
            >
              Edit Profile
            </button>
            {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div
                  className="bg-white p-8  max-w-screen-md rounded-md  overflow-y-auto"
                  style={{ width: "80%", height: "70%" }}
                >
                  {/* User Details */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      First Name:
                    </label>
                    <input
                      type="text"
                      value={userData.firstName}
                      onChange={(e) =>
                        setUserData({ ...userData, firstName: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      value={userData.lastName}
                      onChange={(e) =>
                        setUserData({ ...userData, lastName: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      User Email:
                    </label>
                    <input
                      type="text"
                      value={userData.user_email}
                      onChange={(e) =>
                        setUserData({ ...userData, user_email: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Email:
                    </label>
                    <input
                      type="text"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Birthdate:
                    </label>
                    <input
                      type="text"
                      value={userData.birthdate}
                      onChange={(e) =>
                        setUserData({ ...userData, birthdate: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Permanent Address:
                    </label>
                    <input
                      type="text"
                      value={userData.permanentaddress}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          permanentaddress: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      City:
                    </label>
                    <input
                      type="text"
                      value={userData.city}
                      onChange={(e) =>
                        setUserData({ ...userData, city: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      District:
                    </label>
                    <input
                      type="text"
                      value={userData.district}
                      onChange={(e) =>
                        setUserData({ ...userData, district: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Country:
                    </label>
                    <input
                      type="text"
                      value={userData.country}
                      onChange={(e) =>
                        setUserData({ ...userData, country: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Current Address:
                    </label>
                    <input
                      type="text"
                      value={userData.currentaddress}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          currentaddress: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Current City:
                    </label>
                    <input
                      type="text"
                      value={userData.currentcity}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          currentcity: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Current District:
                    </label>
                    <input
                      type="text"
                      value={userData.currentdistrict}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          currentdistrict: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Current State:
                    </label>
                    <input
                      type="text"
                      value={userData.currentstate}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          currentstate: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Gender:
                    </label>
                    <input
                      type="text"
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Current Country:
                    </label>
                    <input
                      type="text"
                      value={userData.currentcountry}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          currentcountry: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Contact:
                    </label>
                    <input
                      type="text"
                      value={userData.contact}
                      onChange={(e) =>
                        setUserData({ ...userData, contact: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>
                  {/* Repeat similar blocks for other fields in the schema */}
                  {/* ... */}

                  {/* Educational Details */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Education:
                    </label>
                    <input
                      type="text"
                      value={userData.education}
                      onChange={(e) =>
                        setUserData({ ...userData, education: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Institute Name:
                    </label>
                    <input
                      type="text"
                      value={userData.instituteName}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          instituteName: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  {/* Repeat similar blocks for other educational fields */}
                  {/* ... */}

                  {/* Technical Details */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Key Skills:
                    </label>
                    <input
                      type="text"
                      value={userData.keySkills}
                      onChange={(e) =>
                        setUserData({ ...userData, keySkills: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Languages:
                    </label>
                    <input
                      type="text"
                      value={userData.languages}
                      onChange={(e) =>
                        setUserData({ ...userData, languages: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  {/* Repeat similar blocks for other technical fields */}
                  {/* ... */}

                  {/* Resume Details */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Filename:
                    </label>
                    <input
                      type="text"
                      value={userData.filename}
                      onChange={(e) =>
                        setUserData({ ...userData, filename: e.target.value })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600">
                      Profile Picture:
                    </label>
                    <input
                      type="text"
                      value={userData.profile_pic}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          profile_pic: e.target.value,
                        })
                      }
                      className="w-full border p-2 rounded-md"
                    />
                  </div>

                  {/* Repeat similar blocks for other resume fields */}
                  {/* ... */}

                  {/* Save and Cancel Buttons */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveClick}
                      className="bg-blue-500 text-white p-2 rounded-md mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="bg-gray-400 text-white p-2 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Resume Section */}
        <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Resume
          </h2>
          <div
            className="flex items-center "
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p className="text-left text-gray-700">
                {/* Display the resume file name or a link to view the resume */}
                {userDetails && userDetails.student_PDF && (
                  <a
                    href={userDetails.student_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                )}
              </p>
            </div>
            {/* Add the file upload button here */}

            {/* <div>
                            <p>Upload New Resume</p>
                            <input type="file" className="ml-4" />
                        </div> */}

            {/* <div className='items-center flex      subscribe-btn-for-the-view-profile-button-div-section'>
                            <Link>
                                <button className='border p-2 subscribe-btn-for-the-view-profile-button' style={{ backgroundColor: '#FFBD59', borderRadius: "5px" }}>Edit</button>
                            </Link>
                        </div> */}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Check if userDetails and keySkills are available before mapping */}
            {userDetails &&
            userDetails.keySkills &&
            typeof userDetails.keySkills === "string" ? (
              userDetails.keySkills.split(",").map((skill, index) => (
                <div key={index} className="text-gray-700">
                  {skill.trim()}
                </div>
              ))
            ) : (
              <p>No skills available</p>
            )}
            <div className="items-center flex subscribe-btn-for-the-view-profile-button-div-section">
              <button
                onClick={toggleEditPopup}
                className="border p-2 subscribe-btn-for-the-view-profile-button"
                style={{ backgroundColor: "#FFBD59", borderRadius: "5px" }}
              >
                Edit
              </button>
            </div>
          </div>
          {/* Popup for editing skills */}
          {isEditing && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Edit Skills</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={editedSkills}
                    onChange={(e) => setEditedSkills(e.target.value)}
                    className="border p-2 rounded-md mr-2"
                  />
                  <button
                    type="submit"
                    className="border p-2"
                    style={{ backgroundColor: "#FFBD59", borderRadius: "5px" }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={toggleEditPopup}
                    className="border p-2 ml-2"
                    style={{ backgroundColor: "#FFBD59", borderRadius: "5px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Experience
          </h2>
          <div className="text-gray-700">
            {/* Display the experience data */}
            {userDetails && userDetails.experience ? (
              <p>{userDetails.experience}</p>
            ) : (
              <p>No experience data available</p>
            )}
          </div>

          {/* <div className='items-center flex      subscribe-btn-for-the-view-profile-button-div-section'>
                            <Link>
                                <button className='border p-2 subscribe-btn-for-the-view-profile-button' style={{ backgroundColor: '#FFBD59', borderRadius: "5px" }}>Edit</button>
                            </Link>
                        </div> */}
        </section>

        {/* Education Details Section */}
        {/* <section className="mb-8 bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Education Details</h2>
                    <div className="text-gray-700">
                        {userDetails && userDetails.education ? (
                            <>
                                <p>Education Level: {userDetails.education}</p>
                                <p>Institute Name: {userDetails.instituteName}</p>
                                <p>Stream: {userDetails.stream}</p>
                                <p>Pass Out Year: {userDetails.passOutYear}</p>
                            </>
                        ) : (
                            <p>No education details available</p>
                        )}


                    </div>
                </section> */}

        <section className="mb-8 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Education Details
          </h2>
          <div className="text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Graduation details */}
            <div>
              <h3 className="text-lg font-bold mb-2">Graduation Details</h3>
              {userDetails && userDetails.education ? (
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

            {/* 12th details */}
            <div>
              <h3 className="text-lg font-bold mb-2">12th Details</h3>
              {userDetails && userDetails.education ? (
                <>
                  <p>Education Level: {userDetails.education_12}</p>
                  <p>Institute Name: {userDetails.instituteName_12}</p>
                  <p>Stream: {userDetails.stream_12}</p>
                  <p>Pass Out Year: {userDetails.passOutYear_12}</p>
                  <p>Percentage: {userDetails.percentage_12}</p>
                </>
              ) : (
                <p>No education details available</p>
              )}
            </div>

            {/* 10th details */}
            <div>
              <h3 className="text-lg font-bold mb-2">10th Details</h3>
              {userDetails && userDetails.education ? (
                <>
                  <p>Education Level: {userDetails.education_10}</p>
                  <p>Institute Name: {userDetails.instituteName_10}</p>
                  <p>Stream: {userDetails.stream_10}</p>
                  <p>Pass Out Year: {userDetails.passOutYear_10}</p>
                  <p>Percentage: {userDetails.percentage_10}</p>
                </>
              ) : (
                <p>No education details available</p>
              )}
            </div>
          </div>
        </section>

        {/* Personal Details Section */}
        <section className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Projects Details
          </h2>
          {userDetails && userDetails.projectName ? (
            <>
              <p>Project Name: {userDetails.projectName}</p>
              <p className="fw-bold">
                Project Summary: {userDetails.projectSummary}
              </p>
            </>
          ) : (
            <p>No education details available</p>
          )}
        </section>

        <section className="bg-white shadow-lg p-6 rounded-lg mt-5">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">
            Personal Details
          </h2>
          {userDetails && userDetails.languages ? (
            <>
              <p>Languages: {userDetails.languages}</p>
              <p>Currentaddress: {userDetails.currentaddress}</p>
              <p>City: {userDetails.city}</p>
              <p>District: {userDetails.district}</p>
              <p>Birth Date: {userDetails.birthdate}</p>
            </>
          ) : (
            <p>No education details available</p>
          )}
        </section>
      </div>
    </>
  );
};

export default ViewProfile;
