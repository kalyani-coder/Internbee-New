import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Registration = () => {
     const [showErrorPopup, setShowErrorPopup] = useState(false);
     const [errorMessage, setErrorMessage] = useState("");
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



const onSubmit = async (data) => {
  const { confirmPassword, ...postData } = data;

  try {
    const response = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: postData.fullName,
        email: postData.email,
        password: postData.password,
        number: postData.number,
        userType: "employer",
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);

      // Redirect to another page after successful registration
      alert("Data Submitted Successfully!");
      navigate("/");
    } else {
      const errorResponse = await response.json();

      // Handle specific errors based on response status
      if (
        response.status === 409 &&
        errorResponse.error === "User already exists"
      ) {
        setError("email", { type: "manual", message: "User already exists" });
        setErrorMessage("User already exists");
        setShowErrorPopup(true);
      } else if (
        response.status === 409 &&
        errorResponse.error === "Number already exists"
      ) {
        setError("number", {
          type: "manual",
          message: "Number already exists",
        });
        setErrorMessage("Number already exists");
        setShowErrorPopup(true);
      } else {
        console.error("Unknown error occurred");
        setError("email", {
          type: "manual",
          message: "Something went wrong. Please try again.",
        });
        setErrorMessage("Something went wrong. Please try again.");
        setShowErrorPopup(true);
      }
    }
  } catch (error) {
    console.error("Error:", error);
    setError("email", {
      type: "manual",
      message: "Something went wrong. Please try again.",
    });
    setErrorMessage("Something went wrong. Please try again.");
    setShowErrorPopup(true);
  }
};

  const sendEmailOTP = () => {
    setShowEmailOtpInput(true);
  };

  const sendMobileOTP = () => {
    setShowMobileOtpInput(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  // const handleSignin = () => {
  //   navigate("/Signin");
  // };
  const handleHome = () => {
    navigate("/Home");
  };

  return (
    <div className="">
      {/* <div className="bg-slate-50 p-4 flex items-center justify-between border shadow-xl">
                <div className="flex items-center space-x-2">
                    <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                </div>

                <div className="items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleHome}>Home</a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" >Companies</a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" >Internships</a>
                </div>

                <div className="flex items-center space-x-6 mr-10">
                    <a href="#" className="px-6 py-2  text-xl font-bold border rounded-md bg-yellow-300">Login</a>
                    <a href="#" className="px-6 py-2  text-xl font-bold border rounded-md bg-yellow-300">Signup</a>
                </div>
            </div> */}
      {showErrorPopup && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Error
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => setShowErrorPopup(false)}
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-10">
        {/* <h1 className="text-4xl font-bold">Register and Apply for the Internship</h1> */}
      </div>

      <div className="h-screen w-full flex items-center justify-between">
        <img src="./signup.jpg" alt="design" className="" />

        <div
          className=" p-8 rounded shadow-md w-full bg-slate-50 mr-10"
          style={{ width: "40rem" }}
        >
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Employer Registration
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
                <button
                  type="button"
                  onClick={sendEmailOTP}
                  className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                >
                  Send OTP
                </button>
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
                <button
                  type="button"
                  onClick={sendMobileOTP}
                  className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                >
                  Send OTP
                </button>
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
                        value === watch("password") || "Passwords do not match",
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
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-black">
              Already have an account ?{" "}
              <Link to={'/login'}>
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                
                >
                Log in{""}
              </a>
                </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
