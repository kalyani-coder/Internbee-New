import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../ResponsiveCss/ResponsiveCss.css";
import logo from "../../Assets/white_header1.png";

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    empName: "",
    password: "",
    email: "",
    number: "",
    companyAddress: "",
    Description: "",
    paymentStatus: "",
    accountHolderName: "",
    packagePrice: "",
    purchacepackageEndDate: "",
    purchacepackageDate: "",
    searches: "",
    internshipEnquiry: "",
    verifiedApplication: "",
    ResumeView: "",
    dedicatedCIM: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://backend.internsbee.com/api/employer/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", responseData.userId);
        localStorage.setItem("userEmail", formData.email);
        console.log("Registration successful");
        // alert('Successful Signin');
        navigate("/signupotp");
      } else if (response.status === 409) {
        // Handle conflicts based on the error messages from the backend
        const { error } = responseData;
        if (error === "User already exists") {
          console.error("User already exists");
          alert("User already exists");
          // Handle UI logic for user conflict
        }
        if (!validateEmail(formData.email)) {
          console.error("Invalid email format");
          alert("Invalid email format");
          // Handle UI logic for invalid email format
          return;
        } else if (error === "Number already exists") {
          console.error("Number already exists");
          alert("Number already exists");
          // Handle UI logic for number conflict
        } else if (error === "Comapany Name already exists") {
          console.error("Company Name already exists");
          alert("Company Name already exists");
          // Handle UI logic for company name conflict
        } else {
          console.error("Registration failed with unknown error");
          // Handle UI logic for unknown conflict
        }
      } else {
        console.error("Registration failed with unknown error");
        // Handle UI logic for unknown error
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle UI logic for general error
    }
  };

  return (
    <>
      <Link to={"/"}>
        <div className="flex justify-item-left">
          <img src={logo} alt="" className="w-94 my-0" />
        </div>
      </Link>

      <div className="MainSignup flex h-screen items-center justify-between ">
        <img src="./signup.jpg" alt="design" className=" " />

        <div
          className=" SignupForm px-5 py-1 rounded shadow-md w-full bg-slate-50 mb-44 "
          style={{ width: "40rem" }}
        >
          <h1 className="text-xl font-semibold mb-1 text-center">
            Employer Registration
          </h1>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="empName"
                name="empName"
                placeholder="Enter Your Name"
                className="px-2 mt-0 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.empName}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-0">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Company Email"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col mb-0">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="px-2 mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            {/* Mobile Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Enter Mobile No"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.number}
              />
            </div>

            {/* Company Address Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                placeholder="Enter Company Address"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.companyAddress}
              />
            </div>

            {/* Description Input */}
            <div className="flex flex-col mb-0">
              <textarea
                id="Description"
                name="Description"
                placeholder="Enter Organization Details"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.Description}
              />
            </div>
            {/* Company Logo Input */}
            <div className="flex flex-col mb-0">
              <label htmlFor="companyLogoFile" className="mb-0 text-l">
                Upload Company Logo
              </label>
              <input
                type="file"
                id="companyLogoFile"
                name="companyLogoFile"
                accept="image/*"
                // onChange={handleFileChange}
                className="mt-1 p-1 border rounded"
              />
            </div>

            {/* Company Website Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="companyWebsite"
                name="companyWebsite"
                placeholder="Enter Company Website URL"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                value={formData.companyWebsite}
              />
            </div>
            {/* CRN Number Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="cinNumber"
                name="cinNumber"
                placeholder="Enter CIN Number"
                className="mt-1 p-1 flex-grow border rounded"
                onChange={handleChange}
                // value={formData.crnNumber}
              />
            </div>
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />

              <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2">
                Terms & Conditions Privacy Policy
              </a>
            </div>

            <button
              type="button"
              onClick={handleSubmit} // Call the submit function on button click
              className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-black">
              Already have an account ?{" "}
              <Link to={"/login"}>
                <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Log in
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
