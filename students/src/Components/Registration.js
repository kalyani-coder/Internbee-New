import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMobile,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"; // Import the Alert component
import logo from "../Assets/white_header1.png";
import "./Registration.css";
import Alert from "./Alert/Alert";
const Registration = ({ onClose }) => {
  const [showEmailOtpInput, setShowEmailOtpInput] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");

  const [showMobileOtpInput, setShowMobileOtpInput] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    const { confirmPassword, ...postData } = data;

    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: postData.fullName,
            email: postData.email,
            password: postData.password,
            number: postData.number,
            userType: "student",
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("email", postData.email);
        // Reset form and show success message
        navigate("/signupotp");
      } else {
        const errorResponse = await response.json();
        if (response.status === 409) {
          setError("email", { type: "manual", message: errorResponse.error });
        } else {
          console.error("Unknown error occurred");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendEmailOTP = () => {
    setShowEmailOtpInput(true);
  };

  const sendMobileOTP = () => {
    setShowMobileOtpInput(true);
  };

  const verifyEmailOTP = () => {
    alert("Email OTP Verified Successfully!");
  };

  const verifyMobileOTP = () => {
    alert("Mobile OTP Verified Successfully!");
  };

  const handleGoogleRegistration = () => {
    alert("Registering with Google...");
  };

  return (
    <div>
      
      <div class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 bg-white p-4 border">

        <div class="flex justify-center flex-col lg:flex-row items-center mt-0">


          <div class="">
            <h1 class="text-3xl font-semibold mb-4 text-center">
              Student Registration
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Input */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <FaUser className="mr-2 inline-block" size={25} />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className="px-2 mt-1 p-2 flex-grow border rounded"
                      placeholder="Enter The Full Name"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                {errors && errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <FaEnvelope className="mr-2 inline-block" size={25} />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1 p-1 flex-grow border rounded"
                      placeholder="Enter Email"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {/* <button
                                    type="button"
                                    onClick={sendEmailOTP}
                                    className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                                >
                                    Send OTP
                                </button> */}
                </div>

                {errors && errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Email OTP Input */}
              {/* ... (similar structure as other OTP inputs) */}

              {/* Mobile Input */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center">
                  <div>
                    <FaMobile className="mr-2 inline-block" size={25} />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="text"
                      id="number"
                      name="number"
                      {...register("number", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/i,
                          message: "Invalid mobile number",
                        },
                      })}
                      className="mt-1 p-2 flex-grow border rounded"
                      placeholder="Enter Mobile No"
                      style={{ width: "100%" }}
                    />
                  </div>
                  {/* <button
                                    type="button"
                                    onClick={sendMobileOTP}
                                    className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                                >
                                    Send OTP
                                </button> */}
                </div>

                {errors && errors.mobile && (
                  <p className="text-red-500">{errors.mobile.message}</p>
                )}
              </div>

              {/* Mobile OTP Input */}
              {/* ... (similar structure as other OTP inputs) */}

              {/* Password Input */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center">
                  <div>
                    <FaLock className="mr-2 inline-block" size={25} />
                  </div>
                  <div className="flex-grow">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="px-2 mt-1 p-2 flex-grow border rounded"
                      placeholder="Password"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors && errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="flex flex-col mb-4">
                <div className="flex items-center">
                  <div>
                    <FaLock className="mr-2 inline-block" size={25} />
                  </div>
                  <div className="flex-grow">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                      className="mt-1 p-2 flex-grow border rounded"
                      placeholder="Confirm Password"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors && errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-black bg-orange-400  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-black">
                Already have an account ?
                <Link to="/login">
                  {" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Log in{" "}
                  </a>
                </Link>
              </p>
            </form>
            <button onClick={onClose} className="w-full text-black bg-white  border-1 border-solid border-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Close
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Registration;
