import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Resume = () => {
  const studentId = localStorage.getItem("userId")
  const [formState, setFormState] = useState({
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      address: '',
      careerProfile: '',
      skills: ''
    },
    education: {
      Name: '',
      education: '',
      institute: '',
      passOutYear: '',
      percentage: '',
    },
    education2: {
      Name2: '',
      education2: '',
      institute2: '',
      passOutYear2: '',
      percentage2: ''
    },
    experience: {
      companyName: '',
      designation: '',
      location: '',
      aboutCompany: ''
    },
    portfolio: {
      projectname: '',
      projectDescription: ''
    },
    StudentId: studentId // Ensure correct casing here
  });

  console.log("bhakti", formState)

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const [section, field] = id.split('-');

    setFormState((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      personalInformation: {
        ...formState.personalInformation,
        skills: formState.personalInformation.skills.split(',').map(skill => skill.trim())
      },
      education: formState.education,
      education2: formState.education2,
      experience: formState.experience,
      portfolio: formState.portfolio,
      StudentId: studentId // Include studentId in the formatted data
    };


    try {
      const response = await fetch('http://localhost:8000/api/newresume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });


      const result = await response.json();

      if (response.ok) {
        setMessage('Resume saved successfully!');
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };


  return (
    <div className=" bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-14 mb-32">
        <div className="w-[86.666667%] border border-black p-2 bg-white mt-[40px]">
          <div className="">
            <div className="flex-1 p-8">
              <h1 className="text-3xl font-bold">Resume Format </h1>
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold m-4">Personal Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="personalInformation-firstName" className="block text-l font-medium">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="personalInformation-firstName"
                      value={formState.personalInformation.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="personalInformation-lastName" className="block text-l font-medium">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="personalInformation-lastName"
                      value={formState.personalInformation.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="personalInformation-email" className="block text-l font-medium">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="personalInformation-email"
                      value={formState.personalInformation.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="personalInformation-address" className="block text-l font-medium">
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="personalInformation-address"
                      value={formState.personalInformation.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="personalInformation-phoneNumber" className="block text-l font-medium">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="personalInformation-phoneNumber"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.personalInformation.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="personalInformation-gender" className="block text-l font-medium">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="personalInformation-gender"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.personalInformation.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="personalInformation-skills" className="block text-l font-medium">
                      Skills<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="personalInformation-skills"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.personalInformation.skills}
                      onChange={handleChange}
                      placeholder="Separate skills with commas"
                    />
                  </div>
           
                  <div className="form-group">
                  <label htmlFor="personalInformation-careerProfile" className="block text-l font-medium">
                    Career Profile<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="personalInformation-careerProfile"
                    className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                    rows="3"
                    value={formState.personalInformation.careerProfile}
                    onChange={handleChange}
                  ></textarea>
                </div>
                </div>

                <h1 className="text-xl font-bold m-4">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="education-Name" className="block text-l font-medium">
                      Degree<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education-Name"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education.Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education-education" className="block text-l font-medium">
                      Specialization<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education-education"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education.education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education-institute" className="block text-l font-medium">
                      Institute<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education-institute"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education.institute}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education-passOutYear" className="block text-l font-medium">
                      Pass Out Year<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education-passOutYear"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education.passOutYear}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="education-percentage" className="block text-l font-medium">
                    Percentage<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="education-percentage"
                    className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                    value={formState.education.percentage}
                    onChange={handleChange}
                  />
                </div>
                </div>
                <h1 className="text-xl font-bold m-4">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="education2-Name2" className="block text-l font-medium">
                      Degree<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education2-Name2"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education2.Name2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education2-education2" className="block text-l font-medium">
                      Specialization<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education2-education2"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education2.education2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education2-institute2" className="block text-l font-medium">
                      Institute<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education2-institute2"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education2.institute2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education2-passOutYear2" className="block text-l font-medium">
                      Pass Out Year<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education2-passOutYear2"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education2.passOutYear2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="education2-percentage2" className="block text-l font-medium">
                      Percentage<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="education2-percentage2"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.education2.percentage2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold m-4">Experience</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="experience-companyName" className="block text-l font-medium">
                      Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="experience-companyName"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.experience.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience-designation" className="block text-l font-medium">
                      Designation<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="experience-designation"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.experience.designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience-location" className="block text-l font-medium">
                      Location<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="experience-location"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.experience.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience-aboutCompany" className="block text-l font-medium">
                      About Company<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="experience-aboutCompany"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      rows="3"
                      value={formState.experience.aboutCompany}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <h1 className="text-xl font-bold m-4">portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="portfolio-projectname" className="block text-l font-medium">
                      Project Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="portfolio-projectname"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      value={formState.portfolio.projectname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="portfolio-projectDescription" className="block text-l font-medium">
                      Project Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="portfolio-projectDescription"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      rows="3"
                      value={formState.portfolio.projectDescription}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-3 mt-2 md:mt-0 text-white border rounded-md bg-amber-500 hover:bg-black p-2 submit-your-application"
                  >
                    Save Resume
                  </button>
                </div>
                {message && <p className="mt-4 text-center">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Resume;
