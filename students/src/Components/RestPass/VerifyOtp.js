import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../Assets/white_header1.png";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId"); // You can fetch this dynamically from local storage if needed

      const response = await axios.post(
        `http://localhost:8000/api/auth/verifyotp/${userId}`,
        {
          otp: otp,
          resetPassword: password,
        }
      );

      setMessage(response.data.message);
      alert("success");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data);
      setMessage("Something went wrong.");
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

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Enter Your OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black"
                    placeholder="Enter OTP"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black"
                    placeholder="Enter New Password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>

              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
