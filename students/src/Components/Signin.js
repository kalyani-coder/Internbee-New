import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from "./Alert/Alert";
import { Link } from "react-router-dom";
import logo from "../Assets/white_header1.png";
import "./SignIn.css";
const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [apiError, setApiError] = useState(null);
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [showResetPasswordPopup, setShowResetPasswordPopup] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/home");
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        // Store user data in localStorage
        localStorage.setItem("userId", responseData.userId);
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("email", responseData.email);

        // Check if user details exist in studentsdetails API
        const userId = responseData.userId;
        const checkDetailsResponse = await fetch(
          `http://localhost:8000/api/studentsdetails/userId/${userId}`
        );
        const checkDetailsData = await checkDetailsResponse.json();

        if (checkDetailsResponse.ok) {
          // If user details exist, navigate to home page
          navigate("/home");
        } else {
          // If user details don't exist, navigate to profile page
          navigate("/profile");
        }
      } else {
        // Handle invalid credentials
        const errorData = await response.json();
        console.error("Invalid credentials:", errorData.error);
        // Handle the error, show an error message, etc.
      }
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle other errors, show an error message, etc.
    }
  };
  const handleSavePasswordClick = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/employer/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowResetPasswordPopup(false);
        // Show success alert or navigate to another page
      } else {
        const errorData = await response.json();
        console.error("Error saving new password:", errorData.error);
      }
    } catch (error) {
      console.error("Error saving new password:", error);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const closeForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(false);
  };
  const handleSendOtpClick = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/employer/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        closeForgotPasswordPopup();
        setShowResetPasswordPopup(true); // Update state to show the Reset Password form
      } else {
        const errorData = await response.json();
        setApiError(errorData.error);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:px-0">
          <div className="w-auto md:mt-0 md:ml-8 xl:p-0 mt-40" 
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border border-black bg-white">
              <h1 className="text-lg font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: "Email is required" })}
                    className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-black"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    placeholder="name@company.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-black"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    required
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className=" items-center justify-between signin-rememberme">
                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm card-remember">
                      <label
                        for="remember"
                        className="text-black dark:text-black"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Link to="/resetpass">
                    <p

                      href="#"
                      className="text-sm font-medium text-primary-600
                    hover:underline dark:text-primary-500"
                    >
                      {" "}
                      Forgot password?
                    </p>
                  </Link>
                </div>
                {apiError && <Alert type="error">{apiError}</Alert>}
                <button
                  type="submit"
                  className="w-full text-black bg-orange-400  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-black">
                  Don’t have an account yet?{" "}
                  <Link to="/register">
                    {" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
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
      {showForgotPasswordPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <button
              onClick={closeForgotPasswordPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <Link to={'/resetpass'}>
              <h1 className="text-lg font-bold leading-tight tracking-tight text-black">
                Forgot Password
              </h1>
            </Link>
            <form
              onSubmit={handleSubmit(handleSendOtpClick)}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="forgotEmail"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Registered Email
                </label>
                <input
                  type="email"
                  name="forgotEmail"
                  id="forgotEmail"
                  {...register("forgotEmail", {
                    required: "Email is required",
                  })}
                  className={`bg-gray-50 border ${errors.forgotEmail ? "border-red-500" : "border-black"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                  placeholder="name@company.com"
                  required
                />
                {errors.forgotEmail && (
                  <p className="text-red-500">{errors.forgotEmail.message}</p>
                )}
              </div>
              {!showResetButton && (
                <button
                  type="button"
                  onClick={() => {
                    // Handle sending OTP logic here
                    handleSendOtpClick();
                    setShowResetButton(true);
                  }}
                  className={`w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-black`}
                >
                  Send OTP
                </button>
              )}

              {showResetButton && (
                <>
                  <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      New Password
                    </label>
                    <input
                      type="password"
                      className={`bg-gray-50 border ${errors.forgotEmail ? "border-red-500" : "border-black"
                        } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                      required
                    />
                    {errors.forgotEmail && (
                      <p className="text-red-500">
                        {errors.forgotEmail.message}
                      </p>
                    )}
                  </div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    {...register("otp", { required: "OTP is required" })}
                    className={`bg-gray-50 border ${errors.otp ? "border-red-500" : "border-black"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    placeholder="Enter OTP"
                    required
                  />
                  {errors.otp && (
                    <p className="text-red-500">{errors.otp.message}</p>
                  )}
                </>
              )}

              {showResetButton && (
                <button
                  type="button"
                  onClick={() => {
                    // Handle resetting password logic here
                    handleSavePasswordClick();
                  }}
                  className={`mt-4 w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-black`}
                >
                  Reset Password
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
