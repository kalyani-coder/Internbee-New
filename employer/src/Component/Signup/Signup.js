import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
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
    dedicatedCRM: "",
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
      const response = await fetch("https://backend.internsbee.com//api/employer/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Registration successful");
        alert('Successful Signin');
      } else if (response.status === 409) {
        // Handle conflicts based on the error messages from the backend
        const { error } = responseData;
        if (error === "User already exists") {
          console.error("User already exists");
          alert("User already exists")
          // Handle UI logic for user conflict
        } if (!validateEmail(formData.email)) {
          console.error("Invalid email format");
          alert("Invalid email format");
          // Handle UI logic for invalid email format
          return;
        } else if (error === "Number already exists") {
          console.error("Number already exists");
          alert("Number already exists")
          // Handle UI logic for number conflict
        } else if (error === "Comapany Name already exists") {
          console.error("Company Name already exists");
          alert("Company Name already exists")
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
    <div className="flex h-screen items-center justify-between">
      <img src="./signup.jpg" alt="design" className="" />

      <div className="p-8 rounded shadow-md w-full bg-slate-50" style={{ width: "40rem" }}>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Employer Registration
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="empName"
              name="empName"
              placeholder="Enter Your Name"
              className="px-2 mt-1 p-2 flex-grow border rounded"
              onChange={handleChange}
              value={formData.empName}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-4">
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
          <div className="flex flex-col mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="px-2 mt-1 p-2 flex-grow border rounded"
              onChange={handleChange}
              value={formData.password}
            />
          </div>



          {/* Mobile Input */}
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Enter Mobile No"
              className="mt-1 p-2 flex-grow border rounded"
              onChange={handleChange}
              value={formData.number}
            />
          </div>

          {/* Company Address Input */}
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              placeholder="Enter Company Address"
              className="mt-1 p-2 flex-grow border rounded"
              onChange={handleChange}
              value={formData.companyAddress}
            />
          </div>

          {/* Description Input */}
          <div className="flex flex-col mb-4">
            <textarea
              id="Description"
              name="Description"
              placeholder="Enter Company Description"
              className="mt-1 p-2 flex-grow border rounded"
              onChange={handleChange}
              value={formData.Description}
            />
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
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Log in
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
