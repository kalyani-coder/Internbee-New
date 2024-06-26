import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupOtp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch student data from local storage
      const userId = localStorage.getItem('userId');

      // Fetch student data from the API
      const response = await fetch(`http://localhost:8000/api/auth/${userId}`);
      const studentData = await response.json();

      // Check if the entered OTP matches the OTP stored in the API
      if (studentData.signupotp && studentData.signupotp.toString() === otp) {
        // Send thanking email
        const thankingResponse = await fetch('http://localhost:8000/api/auth/registrationemailstudent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: studentData.email,
            fullName: studentData.fullName,
          }),
        });
        if (thankingResponse.ok) {
          setSuccessMessage('Verification successful ✔');
          setTimeout(() => {
            navigate('/privacypolicy'); 
          }, 2000);
        } else {
          setError('Something went wrong while sending the thanking email');
        }
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Something went wrong');
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10"></div>

        <div className="SignupOtp flex items-center justify-between px-6 py-8 mr-40 ">
          <img src="./design.jpg" alt="design" className="" />

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark: dark:border-black">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                Verify your email account
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                {successMessage && (
                  <div style={{ color: 'green' }}>{successMessage}</div>
                )}
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your OTP..."
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black"
                    required
                  />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="w-full text-black font-bold bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupOtp;
