import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Alert from "./Alert/Alert";
import { Link } from "react-router-dom";
import logo from "../Assets/white_header1.png";
import "./SignIn.css";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/home");
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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

  return (
    <>
      <div className="">
        <Link to={"/"}>
          <div className="flex justify-item-left ">
            <img
              src={logo}
              alt=""
              className="w-94 my-2 logo-for-sign-in-page-width-set"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center mt-10">
          <h1 className="text-3xl font-bold Login-and-Apply-for-the-Internship-text">
            Login and Apply for the Internship
          </h1>
        </div>

        <div className="flex flex-col items-center px-6 py-8 md:flex-row md:justify-center md:px-0">
          <img
            src="./design.jpg"
            alt="design"
            className="w-full md:w-auto md:max-w-md"
          />

          <div className="w-auto bg-white rounded-lg shadow-md mt-8 md:mt-0 md:ml-8 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                {apiError && <Alert type="error">{apiError}</Alert>}
                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
