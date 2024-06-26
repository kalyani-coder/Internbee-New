import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../ResponsiveCss/ResponsiveCss.css';
import logo from "../../Assets/white_header1.png";
const Login = ({onClose}) => {

  useEffect(() => {
    const StoredToken = localStorage.getItem('token');
    if (StoredToken) {
      navigate("/home")
    }
  })
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // direct navigate to home page if data save in localstorage


  useEffect(() => {
    const storedData = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const empName = localStorage.getItem("empName");
    const number = localStorage.getItem("number");

    if (storedData && email && empName && number) {
      navigate("/Home");
    }
  }, [navigate]);


  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/employer/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", responseData.userId);
        localStorage.setItem("empName", responseData.empName);
        localStorage.setItem("email", responseData.email);
        localStorage.setItem("number", responseData.number);

        // navigate(`/view-profile-page`);

        // navigate("/privacypolicy");
        navigate("/home")
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

  return (
    <>
      <div className=" my-0">
       

      
        <div className="LoginMainDiv flex items-center justify-between px-6 py-8 mr-40 ">
         
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
                    className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-black"
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
                    className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-black"
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
                  <Link to={"/resetpass"}>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-orange-400  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
              <button onClick={onClose} className="w-full text-black bg-white  border-1 border-solid border-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Close
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;





