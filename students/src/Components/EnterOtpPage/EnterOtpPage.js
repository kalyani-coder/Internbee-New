import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const VerifyOtpPage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
    
            const userResponse = await fetch(`http://localhost:8000/api/auth/${userId}`);
            const userData = await userResponse.json();
    
            if (userData.otp && userData.otp.toString() === otp) {
                setSuccessMessage('Verification successful ✔');
                setTimeout(() => {
                    navigate('/privacypolicy');
                }, 3000);
                // Send PATCH request to update verified status
                await fetch(`http://localhost:8000/api/auth/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ verified: true }),
                });
            } else {
                setError('Invalid OTP');
                setTimeout(() => {
                    setError(null);
                }, 2000);
                // Send PATCH request to update verified status to false if OTP is invalid
                await fetch(`http://localhost:8000/api/auth/${userId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ verified: false }),
                });
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError('Something went wrong');
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
                                    <div style={{ color: 'green' }}>
                                        {successMessage}
                                    </div>
                                )}
                                <div>
                                    {/* <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                        Enter OTP
                                    </label> */}
                                    <input
                                        type="text"
                                        placeholder='Enter Your OTP...'
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

export default VerifyOtpPage;
