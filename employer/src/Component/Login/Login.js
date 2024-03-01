import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../ResponsiveCss/ResponsiveCss.css";
import logo from "../../Assets/white_header1.png";
// import "./Login.css";

const Login = () => {
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://backend.internsbee.com/api/employer/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", responseData.userId);
        localStorage.setItem("empName", responseData.empName);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("number", responseData.number);

        navigate("/home");
      } else {
        if (response.status === 404) {
          setError("email", {
            type: "manual",
            message: "User Not Found. Please Sign up",
          });
        } else if (response.status === 401) {
          setError("email", {
            type: "manual",
            message: "Invalid credentials",
          });
        } else {
          setError("email", {
            type: "manual",
            message: "Something went wrong. Please try again later",
          });
        }
        console.error("Error signing in:", responseData.error);
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setError("email", {
        type: "manual",
        message: "Something went wrong. Please try again later",
      });
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
        "https://backend.internsbee.com/api/employer/send-otp",
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

  const handleSavePasswordClick = async (data) => {
    try {
      const response = await fetch(
        "https://backend.internsbee.com/api/employer/reset-password",
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

  return (
    <>
      <div className="my-0">
        <Link to={"https://internsbee.com"}>
          <div className="flex justify-item-left ">
            <img src={logo} alt="" className="imglogin w-94 my-1" />
          </div>
        </Link>

        <div className="flex justify-center items-center">
          {/* <h1 className="text-4xl font-bold">Login to your Account</h1> */}
        </div>

        <div className="LoginMainDiv flex items-center justify-between px-6 py-8 mr-40 ">
          <img
            src="./login.jpg"
            alt="design"
            className=""
            style={{ height: 400 }}
          />

          <div className="login-content-employer">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark: dark:border-black mt-0">
              <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                  Sign in to your account
                </h1>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:space-y-6"
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
                      className={`bg-gray-50 border ${
                        errors.email ? "border-red-500" : "border-black"
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
                      className={`bg-gray-50 border ${
                        errors.password ? "border-red-500" : "border-black"
                      } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                      required
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-black dark:text-black"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={handleForgotPasswordClick}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-black"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-black">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
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
            <h1 className="text-lg font-bold leading-tight tracking-tight text-black">
              Forgot Password
            </h1>
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
                  className={`bg-gray-50 border ${
                    errors.forgotEmail ? "border-red-500" : "border-black"
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
                      className={`bg-gray-50 border ${
                        errors.forgotEmail ? "border-red-500" : "border-black"
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
                    className={`bg-gray-50 border ${
                      errors.otp ? "border-red-500" : "border-black"
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
    </>
  );
};

export default Login;
