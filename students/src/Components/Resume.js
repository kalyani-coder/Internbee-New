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
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

  // Validation function
  const validate = (data) => {
    const errors = {};
    const firstNameRegex = /^[a-zA-Z\s]+$/;
    const lastNameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstNameRegex.test(data.personalInformation?.firstname)) {
      errors.firstname = "First Name must contain only characters";
    }
    if (!lastNameRegex.test(data.personalInformation?.lastname)) {
      errors.lastname = "Last Name must contain only characters";
    }
    if (!emailRegex.test(data.personalInformation?.emailaddress)) {
      errors.emailaddress = "Email is not valid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async (data) => {
    try {
      const studentId = localStorage.getItem("userId");
      const response = await axios.post("http://localhost:8000/api/newresume", {
        data,
        studentId: studentId,
      });
      console.log("Resume saved successfully:", response.data);
      navigate("/success");
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code that falls out of the range of 2xx
        console.error("Server responded with error:", error.response.data);
        console.error("Status code:", error.response.status);
      } else if (error.request) {
        // Request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      console.error("Error saving resume:", error);
      // Optionally, display an error message to the user or handle the error state
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
              <form onSubmit={handleSubmit(onSubmit)}>{/* Attach handleSubmit to form */}
                <h1 className="text-xl font-bold m-4 ">Personal Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="firstname" className="block text-l font-medium">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="firstname"
                      {...register("personalInformation.firstname", { required: "This field is required" })}
                    />
                    {errors.personalInformation?.firstname && <div className="text-red-500">{errors.personalInformation.firstname.message}</div>}
                    {formErrors.firstname && <div className="text-red-500">{formErrors.firstname}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className="block text-l font-medium">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="lastname"
                      {...register("personalInformation.lastname", { required: "This field is required" })}
                    />
                    {errors.personalInformation?.lastname && <div className="text-red-500">{errors.personalInformation.lastname.message}</div>}
                    {formErrors.lastname && <div className="text-red-500">{formErrors.lastname}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailaddress" className="block text-l font-medium">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="emailaddress"
                      {...register("personalInformation.emailaddress", { required: "This field is required" })}
                    />
                    {errors.personalInformation?.emailaddress && <div className="text-red-500">{errors.personalInformation.emailaddress.message}</div>}
                    {formErrors.emailaddress && <div className="text-red-500">{formErrors.emailaddress}</div>}
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
                    Degree<span className="text-red-500">*</span>
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
                    Specialization<span className="text-red-500">*</span>
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
                <h1 className="text-xl font-bold m-4 ">Education</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="Name" className="block text-l font-medium">
                    Degree<span className="text-red-500">*</span>
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
                    Specialization<span className="text-red-500">*</span>
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
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-3 mt-2 md:mt-0 text-white border rounded-md bg-amber-500 hover:bg-black p-2 submit-your-application"
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
