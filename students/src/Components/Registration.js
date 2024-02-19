import React, { useState } from "react";
import { FaUser, FaEnvelope, FaMobile, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import Alert from "./Alert/Aleart"; // Import the Alert component
import logo from "../Assets/white_header1.png";

const Registration = () => {
  const [showEmailOtpInput, setShowEmailOtpInput] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");

  const [showMobileOtpInput, setShowMobileOtpInput] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, setError, formState: { errors }, watch } = useForm();

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
      const response = await fetch("https://backend.internsbee.com/api/auth/signup", {
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
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem('userId', result.userId);
        localStorage.setItem('email', postData.email);
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
        <Link to={'/'}>
        <div className="flex justify-item-left ">
      <img src={logo} alt=""  className='w-94 my-1'/>
    </div>
    </Link>
        <div class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 ">
        <div class="flex flex-col items-center justify-center mt-1">
            <h1 class="text-2xl font-bold text-center">Register and Apply for the Internship</h1>
        </div>
    
        <div class="flex flex-col lg:flex-row items-center justify-between mt-0">
            <img src="./design.jpg" alt="design" class="w-full lg:w-1/2 xl:w-2/3" />
    
            <div class="p-3 rounded shadow-md bg-slate-50 w-full lg:w-1/2 xl:w-2/3 mt-8 lg:mt-0">
                <h1 class="text-3xl font-semibold mb-4 text-center">Student Registration</h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* Full Name Input */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center">
                                <div> <FaUser className="mr-2 inline-block" size={25} /></div>
                                <div className="flex-grow">
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        {...register("fullName", { required: "Full Name is required" })}
                                        className="px-2 mt-1 p-2 flex-grow border rounded"
                                        placeholder="Enter The Full Name"
                                        style={{ width: "100%" }}
                                    />

                                </div>
                            </div>
                           
                            {errors && errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}


                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center">
                                <div> <FaEnvelope className="mr-2 inline-block" size={25} /></div>
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
                           
                            {errors && errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        </div>

                        {/* Email OTP Input */}
                        {/* ... (similar structure as other OTP inputs) */}

                        {/* Mobile Input */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center">
                                <div><FaMobile className="mr-2 inline-block" size={25} /></div>
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
                        
                      
                            {errors && errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}


                        </div>

                        {/* Mobile OTP Input */}
                        {/* ... (similar structure as other OTP inputs) */}

                        {/* Password Input */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center">
                                <div><FaLock className="mr-2 inline-block" size={25} /></div>
                                <div className="flex-grow">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        {...register("password", { required: "Password is required" })}
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
                            {errors && errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password Input */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center">
                                <div><FaLock className="mr-2 inline-block" size={25} /></div>
                                <div className="flex-grow">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required",
                                            validate: (value) => value === watch('password') || "Passwords do not match",
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
                          
                            {errors && errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
                        >
                            Sign Up
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-black">
                            Already have an account ?<Link to="/login"> <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in </a></Link>
                        </p>
                    </form>
            </div>
        </div>
    </div>
    </div>
    
    );
};

export default Registration;