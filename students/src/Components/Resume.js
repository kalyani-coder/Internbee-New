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
  const { register, handleSubmit, watch } = useForm();
  const [birthdate, setBirthdate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBirthdateChange = (date) => {
    setBirthdate(date);
  };

  const studentId = localStorage.getItem("userId");

  const saveResume = async (data) => {
    try {
      // Prepare personal information data
      const personalInformation = {
        ...data.personalInformation,
        Student_Id: studentId // Assign userId to the Student_Id
      };
  
      // Save personal information
      const savedPersonalInformation = await savePersonalInformation(personalInformation);
  
      // Combine all resume data
      const resumeData = {
        personalInformation: savedPersonalInformation,
        education: data.education,
        experience: data.experience,
        portfolio: data.portfolio
      };
  
      // Now save the complete resume
      const response = await axios.post('http://localhost:8000/api/resume/', resumeData);
      console.log('Resume saved successfully:', response.data);
  
      // Redirect to View Resume page
      navigate("/viewresume");
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };
  

  const savePersonalInformation = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/resume/', { personalInformation: data });
      console.log('Personal Information saved successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error saving personal information:', error);
      throw error;
    }
  };

  const saveEducation = async (data) => {
    try {
      const response = await axios.patch('http://localhost:8000/api/resume/', { education: data });
      console.log('Education saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving education:', error);
    }
  };

  const saveExperience = async (data) => {
    try {
      const response = await axios.patch('http://localhost:8000/api/resume/', { experience: data });
      console.log('Experience saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving experience:', error);
    }
  };

  const savePortfolio = async (data) => {
    try {
      const response = await axios.patch('http://localhost:8000/api/resume/', { portfolio: data });
      console.log('Portfolio saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving portfolio:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await saveResume(data);
      
      // Save education
      await saveEducation(data.education);
      
      // Save experience
      await saveExperience(data.experience);
      
      // Save portfolio
      await savePortfolio(data.portfolio);
      
      console.log('Resume saved successfully');
    } catch (error) {
      console.error('Error saving resume:', error);
    }
  };
  
  return (
    <div className=" bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-14 mb-32">
        <div className="w-2/3 border border-black p-2 bg-white mt-[40px]">
          <div className="">
            <div className="flex-1 p-8">
              <h1 className="text-3xl font-bold">Resume Format </h1>
              <form onSubmit={handleSubmit(onSubmit)}>{/* Attach handleSubmit to form */}
                <h1 className="text-xl font-bold m-4 ">Personal Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  
                  <div className="form-group">
                    <label
                      htmlFor="firstname"
                      className="block text-l font-medium"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="firstname"
                      {...register("personalInformation.firstname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lastname"
                      className="block text-l font-medium"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="lastname"
                      {...register("personalInformation.lastname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailaddress" className="block text-l font-medium">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="emailaddress"
                      {...register("personalInformation.emailaddress", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="address"
                      className="block text-l font-medium"
                    >
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="address"
                      {...register("personalInformation.address", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="phonenumber"
                      className="block text-l font-medium"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phonenumber"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("personalInformation.phonenumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/, // Example pattern for a 10-digit phone number
                          message: "Invalid phone number format",
                        },
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender" className="block text-l font-medium">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("personalInformation.gender", {
                        required: "Please select a gender",
                      })}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
            
                  <div className="form-group">
                    <label
                      htmlFor="currentSalary"
                      className="block text-l font-medium"
                    >
                      Current Salary<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentSalary"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("personalInformation.currentSalary", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="expectation"
                      className="block text-l font-medium"
                    >
                      Expectation<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="expectation"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("personalInformation.expectation", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                 
                  <div className="form-group">
                    <label
                      htmlFor="careerProfile"
                      className="block text-l font-medium"
                    >
                      Career Profile<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="careerProfile"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      rows="3"
                      {...register("personalInformation.careerProfile", {
                        required: "This field is required",
                      })}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="skills" className="block text-l font-medium">
                      Skills<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="skills"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      placeholder="Separate skills with commas"
                      {...register("personalInformation.skills", {
                        required: "Skills are required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="level" className="block text-l font-medium">
                      Level<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="level"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("personalInformation.level", {
                        required: "Please select a level",
                      })}
                    >
                      <option value="">Select Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <h1 className="text-xl font-bold m-4 ">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="Name" className="block text-l font-medium">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="Name"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("education.Name", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="degree" className="block text-l font-medium">
                      Degree<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="degree"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("education.degree", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="institute"
                      className="block text-l font-medium"
                    >
                      Institute<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="institute"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("education.institute", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="passOutYear"
                      className="block text-l font-medium"
                    >
                      Pass Out Year<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="passOutYear"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("education.passOutYear", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                </div>
                <h1 className="text-xl font-bold m-4 ">Experience</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label
                      htmlFor="companyname"
                      className="block text-l font-medium"
                    >
                      Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyname"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("experience.companyname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="designation"
                      className="block text-l font-medium"
                    >
                      Designation<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="designation"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("experience.designation", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                 
                  <div className="form-group">
                    <label
                      htmlFor="location"
                      className="block text-l font-medium"
                    >
                      Location<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("experience.location", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="aboutcompany"
                      className="block text-l font-medium"
                    >
                      About Company<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="aboutcompany"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      rows="3"
                      {...register("experience.aboutcompany", {
                        required: "This field is required",
                      })}
                    ></textarea>
                  </div>
                </div>
                <h1 className="text-xl font-bold m-4 ">Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label
                      htmlFor="projectname"
                      className="block text-l font-medium"
                    >
                      Project Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="projectname"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("portfolio.projectname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label
                      htmlFor="projectdescription"
                      className="block text-l font-medium"
                    >
                      Project Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="projectdescription"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      rows="3"
                      {...register("portfolio.projectdescription", {
                        required: "This field is required",
                      })}
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save Resume
                  </button>
                </div>
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
