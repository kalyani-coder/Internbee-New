import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./../Footer";
// import Internal_Navbar from "../InternalNavbar";
// import AppliedInternNavBar from "../AppliedInternNavBar/Applied_Intern_Internal_Navbar";
// import Applied_Intern_Internal_Navbar from "../AppliedInternNavBar/Applied_Intern_Internal_Navbar";
import "../ResponsiveCss/ResponsiveCss.css";
import Internal_Navbar from "../UpdatedNav/Internal_Navbar";

const MonthlyPackages = () => {
  const [monthlyPackage, setMonthlyPackage] = useState(null);
  console.log(monthlyPackage);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/students/students-free-package"
      );
      const data = await response.json();
      setMonthlyPackage(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubscribe = async () => {
    const userId = localStorage.getItem("userId");

    if (!window.confirm("Are you sure you want to subscribe?")) {
      return;
    }

    try {
      // Fetch the user data first
      const userResponse = await fetch(
        `http://localhost:8000/api/auth/${userId}`
      );
      const userData = await userResponse.json();

      // Update the freePackage object
      userData.freePackage = {
        package_type: "free",
        freePackagePrice: monthlyPackage.freePackagePrice,
        searches: monthlyPackage.searches,
        verified_application: monthlyPackage.verified_application,
        dedicated_crm: monthlyPackage.dedicated_crm,
        opportunities: monthlyPackage.opportunities,
      };

      // Perform the patch request to update user's data
      const response = await fetch(
        `http://localhost:8000/api/auth/${userId}/freePackage`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData.freePackage), // Send only the freePackage object
        }
      );

      if (response.ok) {
        alert("Subscription successful!");
        // Refresh the freePackage data
        fetchData();

        // Log the updated freePackage object
        console.log("Updated freePackage:", userData.freePackage);
      } else {
        console.error("Failed to subscribe:", response.statusText);
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <>
      {/* <div><Internal_Navbar/></div>  */}
      <Internal_Navbar />

      <section className="text-black body-font flex">
        {/* <div><Sidebar /></div> */}
        <div className="container px-5 py-5 mx-auto ">
          <div className="flex flex-col text-center w-full mt-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
              Monthly Packages
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p> */}
            <div className="flex mx-auto border-2 border-amber-300 rounded overflow-hidden mt-6">
              <Link to={"/freeplan"}>
                <button className={`py-1 px-4 text-black focus:outline-none`}>
                  Freemium
                </button>
              </Link>
              <Link to={"/monthlyplan"}>
                <button
                  className={`py-1 px-4 text-black focus:outline-none border-b-2 border-indigo-600`}
                  title="This functionality is under development"
                >
                  Premium
                </button>
              </Link>
            </div>
          </div>

          {monthlyPackage && (
            <div className=" width-set-for-the-premium-or-freemium-packages mx-auto">
              <div className="Freecard p-4 xl:w-full w-full">
                <div className="Freecard h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                  <div className="Freecard p-4 w-full">
                    <div className="Freecards h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                      <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                        POPULAR
                      </span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        PRO
                      </h2>
                      <h1 className="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
                        <span className="preeHeading ">{`₹${monthlyPackage.freePackagePrice}`}</span>
                        <span className="text-lg ml-1 font-normal text-black">
                          /mo
                        </span>
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
                        {monthlyPackage.opportunities} Opportunities
                      </p>

                      <p className="flex items-center text-black mb-2">
                        {" "}
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
                        {monthlyPackage.verified_application} Verified Apply
                      </p>

                      <p className="flex items-center text-black mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-amber-300 text-white rounded-full flex-shrink-0">
                          {" "}
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

                      {/* <p className="text-xs text-black mt-3">
                        Literally you probably haven't heard of them jean
                        shorts.
                      </p> */}
                    </div>
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
