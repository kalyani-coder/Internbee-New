import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Alert from './Alert/Aleart';
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [apiError, setApiError] = useState(null);


  // const onSubmit = async (data) => {
  //   try {
  //     const response = await fetch('https://backend.internsbee.com/api/auth/signin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();

  //       // Assuming the response contains the userId
  //       // if (responseData.userId) {
  //       //   // The credentials are correct, navigate to the home page
  //       //   localStorage.setItem('userId', responseData.userId);
  //       //   navigate('/privacypolicy');
  //       // }
  //       if (responseData.userId) {
  //         localStorage.setItem('userId', responseData.userId);
  //       }
  //       if (responseData.fullName) {
  //         localStorage.setItem('fullName', responseData.fullName);
  //       }
  //       if(responseData.email){
  //         localStorage.setItem("email" ,responseData.email)
  //       }
  //       if(responseData.verified){
  //         localStorage.setItem("verified" ,responseData.verified)
  //       }

  //       if(responseData.verified){
  //         localStorage.setItem("number" ,responseData.number)
  //         navigate('/privacypolicy');
  //       }
        
  //       else {
        
  //         // Handle the case where userId is missing in the response
  //         setError('email', {
  //           type: 'manual',
  //           message: 'Invalid credentials',
  //         });
  //       }
  //     } else {
  //       // The credentials are incorrect, handle the error (e.g., show an error message)
  //       const errorData = await response.json();
  //       setApiError(errorData.error);
  //       setError('email', {
  //         type: 'manual',
  //         message: errorData.error || 'User Not Found. Please Sign up',
  //       });
  //       console.error('Invalid credentials');
  //     }
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //   }
  // };



  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://backend.internsbee.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
  
        if (responseData.userId) {
          localStorage.setItem('userId', responseData.userId);
        }
   
        if (responseData.email) {
          localStorage.setItem('email', responseData.email);
        }
        navigate('/privacypolicy'); 
       
       
      } else {
        // The credentials are incorrect, handle the error (e.g., show an error message)
        const errorData = await response.json();
        setApiError(errorData.error);
        setError('email', {
          type: 'manual',
          message: errorData.error || 'User Not Found. Please Sign up',
        });
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  
  

  return (
    <>
    <div className="">
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-4xl font-bold">Login and Apply for the Internship</h1>
      </div>
  
      <div className="flex flex-col items-center px-6 py-8 md:flex-row md:justify-center md:px-0">
        <img src="./design.jpg" alt="design" className="w-full md:w-auto md:max-w-md" />
  
        <div className="w-auto bg-white rounded-lg shadow-md mt-8 md:mt-0 md:ml-8 xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
              Sign in to your account
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                    className={`bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-black'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    placeholder="name@company.com"
                    required
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register('password', { required: 'Password is required' })}
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-black'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-700 dark:text-black dark:focus:ring-black dark:focus:border-black`}
                    required
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-black dark:text-black">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                {apiError && (
                  <Alert type="error">{apiError}</Alert>
                )}
                <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-black">
                  Don’t have an account yet? <Link to="/register"> <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></Link>
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
