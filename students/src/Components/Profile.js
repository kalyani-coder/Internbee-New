import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import "./ResponsiveCss/ResponsiveCss.css";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
const Profile = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [selectedPDF2, setSelectedPDF2] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setDateOfBirth] = useState("");

  const [gender, setGender] = useState("");
  const [permanentaddress, setPermanentAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [currentaddress, setCurrentAddress] = useState("");
  const [currentcity, setCurrentCity] = useState("");
  const [currentdistrict, setCurrentDistrict] = useState("");
  const [currentcountry, setCurrentCountry] = useState("");
  const [education, setEducation] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [stream, setStream] = useState("");
  const [passOutYear, setPassOutYear] = useState("");
  const [percentage, setPercentage] = useState("");
  const [contact, setContact] = useState("");
  const [postEducation, setPostEducation] = useState("");
  const [postInstituteName, setPostInstituteName] = useState("");
  const [postStream, setPostStream] = useState("");
  const [postPassOutYear, setPostPassOutYear] = useState("");
  const [postPrcentage, setPostPercentage] = useState("");
  const [keySkills, setKeySkills] = useState("");
  const [languages, setLanguages] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryExpectations, setSalaryExpectations] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [errors, setErrors] = useState({});
  const handleKeySkills = (event) => {
    setKeySkills(event.target.value);
  };
  const handleLanguages = (event) => {
    setLanguages(event.target.value);
  };
  const handleExperience = (event) => {
    setExperience(event.target.value);
  };
  const handleSalaryExpectations = (event) => {
    setSalaryExpectations(event.target.value);
  };
  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };
  const handleProjectSummary = (event) => {
    setProjectSummary(event.target.value);
  };
  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };
  const handleInstituteNameChange = (event) => {
    setInstituteName(event.target.value);
  };
  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };
  const handlePassOutYearChange = (event) => {
    setPassOutYear(event.target.value);
  };
  const handlePercentageChange = (event) => {
    setPercentage(event.target.value);
  };
  //
  const handlePostEducationChange = (event) => {
    setPostEducation(event.target.value);
  };
  const handlePostInstituteNameChange = (event) => {
    setPostInstituteName(event.target.value);
  };
  const handlePostStreamChange = (event) => {
    setPostStream(event.target.value);
  };
  const handlePostPassOutYearChange = (event) => {
    setPostPassOutYear(event.target.value);
  };
  const handlePostPercentageChange = (event) => {
    setPostPercentage(event.target.value);
  };
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const handlePDFChange = (event) => {
    setSelectedPDF(event.target.files[0]);
  };
  const handlePDFChange2 = (event) => {
    setSelectedPDF2(event.target.files[0]);
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handlePermanentAddressChange = (event) => {
    setPermanentAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCurrentAddressChange = (event) => {
    setCurrentAddress(event.target.value);
  };
  const handleCurrentCityChange = (event) => {
    setCurrentCity(event.target.value);
  };
  const handleCurrentDistrictChange = (event) => {
    setCurrentDistrict(event.target.value);
  };
  const handleCurrentCountryChange = (event) => {
    setCurrentCountry(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };
  const resetForm = () => {
    // Reset all state variables to their initial values
    setShowProfileDropdown(false);
    setSelectedImage(null);
    setSelectedPDF(null);
    setSelectedPDF2(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setDateOfBirth("");
    setPermanentAddress("");
    setCity("");
    setDistrict("");
    setCountry("");
    setState("");
    setCurrentAddress("");
    setCurrentCity("");
    setCurrentDistrict("");
    setCurrentCountry("");
    setContact("");
    setGender("");
    setEducation("");
    setInstituteName("");
    setStream("");
    setPassOutYear("");
    setPercentage("");
    setPostEducation("");
    setPostInstituteName("");
    setPostStream("");
    setPostPassOutYear("");
    setPostPercentage("");
    setKeySkills("");
    setLanguages("");
    setExperience("");
    setSalaryExpectations("");
    setProjectName("");
    setProjectSummary("");
  };
  const handleCancel = () => {
    // Call resetForm when cancel button is clicked
    resetForm();
  };
  const validate = () => {
    const errors = {};
    const firstNameRegex = /^[a-zA-Z\s]+$/;
    if (!firstName) {
        errors.firstName = 'First Name is required';
    } else if (!firstNameRegex.test(firstName)) {
        errors.firstName = 'First Name must contain only characters';
    }

    const lastNameRegex = /^[a-zA-Z\s]+$/;
    if (!lastName) {
        errors.lastName = 'Last Name is required';
    } else if (!lastNameRegex.test(lastName)) {
        errors.lastName = 'Last Name must contain only characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
        errors.email = 'Email is not valid';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
};
  const handleUpload = (e) => {
    if (!validate()) {
      return;
    }
    e.preventDefault();
    if (selectedImage || selectedPDF) {
      const formData = new FormData();
      if (selectedImage) formData.append("image", selectedImage);
      if (selectedPDF) formData.append("pdf", selectedPDF);
      if (selectedPDF) formData.append("pdf2", selectedPDF2);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("birthdate", birthdate);
      formData.append("gender", gender);
      formData.append("state", state);
      formData.append("permanentaddress", permanentaddress);
      formData.append("city", city);
      formData.append("district", district);
      formData.append("country", country);
      formData.append("currentaddress", currentaddress);
      formData.append("currentCity", currentcity);
      formData.append("currentdistrict", currentdistrict);
      formData.append("currentcountry", currentcountry);
      formData.append("contact", contact);
      formData.append("education", education);
      formData.append("instituteName", instituteName);
      formData.append("stream", stream);
      formData.append("passOutYear", passOutYear);
      formData.append("percentage", percentage);
      formData.append("posteducation", postEducation);
      formData.append("postinstituteName", postInstituteName);
      formData.append("stream", postStream);
      formData.append("postpassOutYear", postPassOutYear);
      formData.append("postpercentage", postPrcentage);
      formData.append("keySkills", keySkills);
      formData.append("languages", languages);
      formData.append("experience", experience);
      formData.append("salaryExpectations", salaryExpectations);
      formData.append("projectName", projectName);
      formData.append("projectSummary", projectSummary);
      const storedUserId = localStorage.getItem("userId");
      formData.append("userId", storedUserId);
      console.log(storedUserId);
      //  http://localhost:8000/api/studentsdetails
      fetch("http://localhost:8000/api/studentsdetails", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Files uploaded successfully:", data);
          alert("Profile Created Successfully", "success");
        })
        .catch((error) => {
          console.error("Error uploading files:", error);
          if (error.message.includes("User already has a profile")) {
            alert("User already has a profile", "error");
          } else {
            alert("User already has a profile", "error");
          }
        });
    }
  };
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-50">
      <div className="">
        <Internal_Navbar />
        {/* ///////////////////////////////////////////////////////// */}
        <div className="mainProfile flex justify-center ">
          <div className="CardSizeProfile w-2/3 border border-black bg-white p-4 mt-[113px] mb-10">
            <div className="flex justify-center">
              <div className="mt-6 text-3xl font-bold">
                <h4>Create Profile</h4>
              </div>
            </div>
            <div className="mt-6 text-2xl font-bold">
              <h6>1.Personal Details</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
            <div className="form-group">
            <label htmlFor="firstName">
                First Name<span className="text-red-500">*</span>
            </label>
            <input
                className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
            />
            {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="lastName">
                Last Name<span className="text-red-500">*</span>
            </label>
            <input
                className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                required
            />
            {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
        </div>
        <div className="form-group">
            <label htmlFor="email">
                Email<span className="text-red-500">*</span>
            </label>
            <input
                className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
              <div className="form-group">
                <label htmlFor="birthdate">
                  Birthdate<span className="text-red-500">*</span>
                </label>
                <input
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  onChange={handleDateOfBirthChange}
                  value={birthdate}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="permanentaddress"
                  className="block text-large font-medium"
                >
                  Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="permanentaddress"
                  name="permanentaddress"
                  value={permanentaddress}
                  onChange={handlePermanentAddressChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="permanentaddress"
                  className="block text-large font-medium"
                >
                  Contcat No<span className="text-red-500">*</span>
                </label>
                <input
                  type="Number"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="contact"
                  name="contact"
                  value={contact}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city" className="block text-large font-medium">
                  City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="district"
                  className="block text-large font-medium"
                >
                  District<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="district"
                  name="district"
                  value={district}
                  onChange={handleDistrictChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="country"
                  className="block text-large font-medium"
                >
                  Country<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="country"
                  name="country"
                  value={country}
                  onChange={handleCountryChange}
                  required
                />
              </div>
            </div>
            <br></br>
            <hr />
            <div className="mt-6 text-2xl font-bold">
              <h6>2. Post Graduation</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="education"
                  className="block text-large font-medium"
                >
                  Education<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="education"
                  name="education"
                  value={postEducation}
                  onChange={handlePostEducationChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="institutename"
                  className="block text-large font-medium"
                >
                  College Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="instituteName"
                  name="instituteName"
                  value={postInstituteName}
                  onChange={handlePostInstituteNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="stream"
                  className="block text-large font-medium"
                >
                  Stream<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="stream"
                  name="stream"
                  value={postStream}
                  onChange={handlePostStreamChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="passoutyear"
                  className="block text-large font-medium"
                >
                  Pass-out Year<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="passOutYear"
                  name="passOutYear"
                  value={postPassOutYear}
                  onChange={handlePostPassOutYearChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="percentage"
                  className="block text-large font-medium"
                >
                  Percentage / CGPA<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="percentage"
                  name="percentage"
                  value={postPrcentage}
                  onChange={handlePostPercentageChange}
                  required
                />
              </div>
            </div>
            <hr />
            <div className="mt-6 text-2xl font-bold">
              <h6>3. Educational Details Graduation</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="education"
                  className="block text-large font-medium"
                >
                  Education<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="education"
                  name="education"
                  value={education}
                  onChange={handleEducationChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="institutename"
                  className="block text-large font-medium"
                >
                  College Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="instituteName"
                  name="instituteName"
                  value={instituteName}
                  onChange={handleInstituteNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="stream"
                  className="block text-large font-medium"
                >
                  Stream<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="stream"
                  name="stream"
                  value={stream}
                  onChange={handleStreamChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="passoutyear"
                  className="block text-large font-medium"
                >
                  Pass-out Year<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="passOutYear"
                  name="passOutYear"
                  value={passOutYear}
                  onChange={handlePassOutYearChange}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="percentage"
                  className="block text-large font-medium"
                >
                  Percentage / CGPA<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="percentage"
                  name="percentage"
                  value={percentage}
                  onChange={handlePercentageChange}
                  required
                />
              </div>
            </div>
            <hr />
            <div className="mt-6 text-2xl font-bold">
              <h6>4.Technical Details</h6>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="keyskills"
                  className="block text-large font-medium"
                >
                  Key Skills<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                  id="keyskills"
                  name="keySkills"
                  value={keySkills}
                  onChange={handleKeySkills}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="languages"
                  className="block text-xl font-medium"
                >
                  Languages<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                  id="languages"
                  name="languages"
                  value={languages}
                  onChange={handleLanguages}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="experience"
                  className="block text-xl font-medium"
                >
                  Experience(if any)<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                  id="experience"
                  name="experience"
                  value={experience}
                  onChange={handleExperience}
                  required
                  placeholder="fresher or 1 year"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="salaryexpectations"
                  className="block text-xl font-medium"
                >
                  Salary Expectations<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                  id="salaryexpectations"
                  name="salaryExpectations"
                  value={salaryExpectations}
                  onChange={handleSalaryExpectations}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="projectname"
                  className="block text-xl font-medium"
                >
                  Project Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                  id="projectname"
                  name="projectName"
                  value={projectName}
                  onChange={handleProjectName}
                  required
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="projectsummary"
                  className="block text-xl font-medium"
                >
                  Project Summary<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectsummary"
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                  rows="4"
                  name="projectSummary"
                  value={projectSummary}
                  onChange={handleProjectSummary}
                  required
                />
              </div>
            </div>
            {/* here is the button for save  */}
            <hr />
            <div className="mt-6 text-2xl font-bold">
              <h6>5. Upload Documents</h6>
            </div>
            <div className="UploadResume  md:grid-cols-3 gap-10 mb-4">
              <div className="form-group">
                <label htmlFor="resume" className="block text-xl font-medium">
                  Resume<span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePDFChange}
                  required
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="profilePicture"
                  className="block text-xl font-medium mt-10"
                >
                  Profile Picture<span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2 pb-3 bottom-section-of-the-profile-resume-section mt-4">
              <button
                onClick={handleCancel}
                className="px-3 mt-2 md:mt-0 text-white border rounded-md bg-amber-500 hover:bg-black p-2 submit-your-application"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-3 mt-2 md:mt-0 text-white border rounded-md bg-amber-500 hover:bg-black p-2 submit-your-application"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
