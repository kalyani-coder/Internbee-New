import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../ResponsiveCss/ResponsiveCss.css";
import logo from "../../Assets/white_header1.png";

const RestPass = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(
        `https://backend.internsbee.com/api/employer/forgetpass/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      if (response.ok) {
        navigate("/verifyotp");
        // Handle success, maybe redirect user to a success page
      } else {
        // Handle error response
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Assuming API returns an error message
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
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

        <div className="flex justify-center items-center"></div>

        <div className="LoginMainDiv flex items-center justify-between px-6 py-8 mr-40 ">
          <img
            src="./login.jpg"
            alt="design"
            className=""
            style={{ height: 500 }}
          />

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark: dark:border-black mt-0">
            <div className="p-6 space-y-4 md:space-y-0 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                Verify your Email account
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
                    {...register("email", { required: true })}
                    className={`bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-black"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Email is required
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <Link to={"/reset"}></Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send OTP
                </button>
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestPass;
