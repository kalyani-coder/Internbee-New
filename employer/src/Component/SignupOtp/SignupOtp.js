import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupOtp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);
  const [employerData, setEmployerData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch employer data from local storage
      const userId = localStorage.getItem('userId');
  
      // Fetch employer data from the API
      const response = await fetch(`https://backend.internsbee.com/api/employer/${userId}`);
      const employerData = await response.json();
  
      // Check if the entered OTP matches the OTP stored in the API
      if (employerData.signupotp && employerData.signupotp.toString() === otp) {
        // Send thanking email
        const thankingResponse = await fetch('https://backend.internsbee.com/api/employer/registrationemail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: employerData.email,
            empName: employerData.empName,
          }),
        });
        if (thankingResponse.ok) {
          setSuccessMessage('Verification successful ✔');
          setTimeout(() => {
            navigate('/privacypolicy'); // Navigate to the privacypolicy page on successful verification
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
      {/* <div className="flex items-center justify-center h-screen border-3">
        <div className="w-full max-w-md">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:border-black">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black">
                Enter Your OTP
              </h1>
              <form  onSubmit={handleSubmit} className="space-y-4">
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}




      <div className="">
       
        <div className="flex justify-center items-center mt-10">
        </div>

        <div className="flex items-center justify-between px-6 py-8 mr-40 ">
          <img src="./login.jpg" alt="design" className="" />

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark: dark:border-black">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
                Verify your email account
              </h1>
              <form  onSubmit={handleSubmit} className="space-y-4">
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
