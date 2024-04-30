import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch employer data from local storage
      const userId = localStorage.getItem('userId');
  
      // Fetch employer data from the API
      const response = await fetch(`http://localhost:8000/api/employer/${userId}`);
      const employerData = await response.json();
  
      // Check if the entered OTP matches the OTP stored in the API
      if (employerData.otp && employerData.otp.toString() === otp) {
        // Update verified status to true and reset OTP
        const patchResponse = await fetch(`http://localhost:8000/api/employer/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            verified: true,
            
          }),
        });
        if (patchResponse.ok) {
          setSuccessMessage('Verification successful ✔');
          setTimeout(() => {
            navigate('/privacypolicy'); // Navigate to the privacy policy page on successful verification
          }, 3000);
        } else {
          setError('Something went wrong while updating the verified status');
        }
      } else {
        // Update verified status to false
        const patchResponse = await fetch(`http://localhost:8000/api/employer/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            verified: false,
          }),
        });
        if (!patchResponse.ok) {
          setError('Something went wrong while updating the verified status');
        }
        setError('Invalid OTP');
        setTimeout(() => {
          setError(null);
        }, 2000);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Something went wrong');
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };
  

  return (
    <>
      <div className="flex items-center justify-center h-screen border-3">
        <div className="w-full max-w-md">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:border-black">
            <div className="p-6 space-y-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black">
                Enter Your OTP
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
