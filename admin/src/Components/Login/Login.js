import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Redirect to the dashboard or another authenticated page
      navigate('/admindashboard');
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/adminlogin/login', {
        email: email,
        password: password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token); // Store the token in localStorage

      // Redirect to the dashboard or another page upon successful login
      navigate('/admindashboard');
    } catch (err) {
      // Handle login error
      
        setError('Invalid email or password');

      
    }
  };

  return (
    <div className="MainLoginDiv flex items-center justify-between px-6 py-8 mr-40 mt-24">
    <img src="./adminsign-up.jpg" alt="design" className="" />

    <div className="w-full bg-white rounded-lg shadow  border-2 border-amber-500 md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
          Sign in to your Admin account
        </h1>
      <form className="space-y-4 md:space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black"
            placeholder="name@company.com"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Remember me and Forgot Password */}
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
              <label htmlFor="remember" className="text-black dark:text-black">
                Remember me
              </label>
            </div>
          </div>
          <a href="#" className="ForgetPasswordHeading text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
            Forgot password?
          </a>
        </div>

      <div className='flex justify-center'>
         {/* Sign In Button */}
         <button
         type="button"
         onClick={handleLogin}
         className="px-3 mt-2 md:mt-0 text-white border rounded-md bg-amber-500 hover:bg-black p-2 submit-your-application"
         >
         Sign in
       </button>
      </div>

        
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
