import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "../ResponsiveCss/ResponsiveCss.css";
import { Link } from "react-router-dom";
import "./PackagesPage.css";
import Footer from "../Footer/Footer";

const MonthlyPackages = () => {
  const navigate = useNavigate();
  const [monthlyPackage, setMonthlyPackage] = useState(null);
  console.log(monthlyPackage);

  const handleSubscribe = () => {
    navigate("/getpackage", { state: { monthlyPackage } });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/adminmonthlypackage"
        );
        const data = await response.json();
        setMonthlyPackage(data[0]); // Assuming the response is an array with a single object
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <section className="displayBlock flex">
        <div>
          <Sidebar />
        </div>

        <div className=" flex flex-col text-center w-full mt-7">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Monthly Packages
          </h1>
         {/* < className="lg:w-2/3 mx-auto leading-relaxed text-base text-black Whatever-cardigan-tote-bag-tumblr-hexagon-brooklyn-asymmetrical">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.*/}
          
            <div className="flex mx-auto border-2 border-amber-300 rounded overflow-hidden mt-6">
            <Link to={"/packages"}>
              <button
                className={`py-1 px-4 bg-amber-300 text-black focus:outline-none`}
              >
                Monthly/Pro
              </button>
            </Link>
            <Link to={"/anuallypackage"}>
              <button
                className={`py-1 px-4 text-black focus:outline-none border-b-2 border-indigo-600`}
                title="This functionality is under development"
              >
                Monthly/Business
              </button>
            </Link>
          </div>


          {monthlyPackage && (
            <div className="main-packaage-for-the-packages-section-card-monthly w-full">
  <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
    <div className="MonthlyPad p-4 w-full flex justify-center">
      <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[42%]">
        <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
          POPULAR
        </span>
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          PRO
        </h2>
        <h1 className="text-4xl sm:text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
          <span>{`₹${monthlyPackage.monthlyPackage_Price}`}</span>
          <span className="text-lg ml-1 font-normal text-black">/mo</span>
        </h1>
        <p className="flex items-center text-black mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-amber-300 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {monthlyPackage.searches} Searches
        </p>

        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {monthlyPackage.internship_enquiry} Internship Enquiry
        </p>

        <p className="flex items-center text-gray-600 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {monthlyPackage.verified_appication}
        </p>

        <p className="flex items-center text-gray-600 mb-6">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {monthlyPackage.resume_view}
        </p>

        <p className="flex items-center text-gray-600 mb-6">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {monthlyPackage.dedicated_crm}
        </p>

        <button
          onClick={handleSubscribe}
          className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"
        >
          Subscribe
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

          )}
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default MonthlyPackages;
