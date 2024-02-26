

import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import '../ResponsiveCss/ResponsiveCss.css';
import logo from "../../Assets/white_header1.png";

const Registration = () => {

  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   empName: "",
  //   password: "",
  //   email: "",
  //   number: "",
  //   companyAddress: "",
  //   Description: "",
  //   paymentStatus: "",
  //   accountHolderName: "",
  //   packagePrice: "",
  //   purchacepackageEndDate: "",
  //   purchacepackageDate: "",
  //   searches: "",
  //   internshipEnquiry: "",
  //   verifiedApplication: "",
  //   ResumeView: "",
  //   dedicatedCIM: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  


  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("https://backend.internsbee.com/api/employer/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const responseData = await response.json();

  //     if (response.ok) {
  //       localStorage.setItem("userId", responseData.userId);
  //       localStorage.setItem("userEmail", formData.email);
  //       console.log("Registration successful");
  //       // alert('Successful Signin');
  //       navigate('/signupotp')
  //     } else if (response.status === 409) {
  //       // Handle conflicts based on the error messages from the backend
  //       const { error } = responseData;
  //       if (error === "User already exists") {
  //         console.error("User already exists");
  //         alert("User already exists")
  //         // Handle UI logic for user conflict
  //       } if (!validateEmail(formData.email)) {
  //         console.error("Invalid email format");
  //         alert("Invalid email format");
  //         // Handle UI logic for invalid email format
  //         return;
  //       } else if (error === "Number already exists") {
  //         console.error("Number already exists");
  //         alert("Number already exists")
  //         // Handle UI logic for number conflict
  //       } else if (error === "Comapany Name already exists") {
  //         console.error("Company Name already exists");
  //         alert("Company Name already exists")
  //         // Handle UI logic for company name conflict
  //       } else {
  //         console.error("Registration failed with unknown error");
  //         // Handle UI logic for unknown conflict
  //       }
  //     } else {
  //       console.error("Registration failed with unknown error");
  //       // Handle UI logic for unknown error
  //     }
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //     // Handle UI logic for general error
  //   }
  // };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };


  const [selectedFile, setSelectedFile] = useState(null);
  const [empName, setempName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setPass] = useState(null);
  const [companyAddress, setcompanyAddress] = useState(null);
  const [number, setnumber] = useState(null);
  const [Description, setDescription] = useState(null);
  const [company_Website_URL, seturl] = useState(null);
  const [enter_CIN_Number, setCin] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setempName(event.target.value);
  };
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handlecompanyAddressChange = (event) => {
    setcompanyAddress(event.target.value);
  };

  const handlenumberChange = (event) => {
    setnumber(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleurlChange = (event) => {
    seturl(event.target.value);
  };
  const handleCinChange = (event) => {
    setCin(event.target.value);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('empName', empName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('companyAddress', companyAddress);
      formData.append('number', number);
      formData.append('Description', Description);
      formData.append('company_Website_URL', company_Website_URL);
      formData.append('enter_CIN_Number', enter_CIN_Number);
  
      try {
        const response = await fetch('https://backend.internsbee.com/api/employer/signup', {
          method: 'POST',
          body: formData,
        });
  
        const responseData = await response.json();
  
        if (response.ok) {
          localStorage.setItem("userId", responseData.userId);
          localStorage.setItem("userEmail", email);
          console.log("Registration successful");
          navigate('/signupotp');
        } else if (response.status === 409) {
          const { error } = responseData;
          if (error === "User already exists") {
            alert("User already exists");
          } else if (!validateEmail(email)) {
            alert("Invalid email format");
          } else if (error === "Number already exists") {
            alert("Number already exists");
          } else if (error === "Company Name already exists") {
            alert("Company Name already exists");
          } else {
            alert("Registration failed with unknown error");
          }
        } else {
          console.error("Registration failed with unknown error");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    } else {
      console.error("All fields are required");
    }
  };
  
  

  return (
    <>
      <Link to={'https://internsbee.com'}>
        <div className="flex justify-item-left">
          <img src={logo} alt="" className='w-94 my-0' />
        </div>
      </Link>

      <div className="MainSignup flex h-screen items-center justify-between ">
        <img src="./signup.jpg" alt="design" className=" " />

        <div className=" SignupForm px-5 py-1 rounded shadow-md w-full bg-slate-50 mb-44 " style={{ width: '40rem' }}>
          <h1 className="text-xl font-semibold mb-1 text-center">
            Employer Registration
          </h1>

          <form className="space-y-3">
            {/* Full Name Input */}
            <div className="flex flex-col mb-0">
              <input
                type="text"
                id="empName"
                name="empName"
                placeholder="Enter Your Name"
                className="px-2 mt-0 p-1 flex-grow border rounded"
                value={empName}
                onChange={handleNameChange}
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
                value={email}
                onChange={handleemailChange}

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
                value={password}
                onChange={handlePassChange}

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
                value={number}
                onChange={handlenumberChange}

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
                value={companyAddress}
                onChange={handlecompanyAddressChange}

              />
            </div>

            {/* Description Input */}
            <div className="flex flex-col mb-0">
              <textarea
                id="Description"
                name="Description"
                placeholder="Enter Organization Details"
                className="mt-1 p-1 flex-grow border rounded"
                value={Description}
                onChange={handleDescriptionChange}

              />
            </div>
            {/* Company Logo Input */}
            <div className="flex flex-col mb-0">
              <label htmlFor="emp_image" className="mb-0 text-l">Upload Company Logo</label>
              <input
                type="file"
                accept="image/*"
                id="emp_image"
                name="emp_image"
                onChange={handleFileChange}
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
                value={company_Website_URL}
                onChange={handleurlChange}

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
                value={enter_CIN_Number}
                onChange={handleCinChange}

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

              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
              >
                Terms & Conditions Privacy Policy
              </a>
            </div>




            <button
  onClick={(event) => handleUpload(event)}
  className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
>
  Sign Up
</button>
            <p className="text-sm font-light text-gray-500 dark:text-black">
              Already have an account ?{" "}
              <Link to={"/login"}>
                <a

                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
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
