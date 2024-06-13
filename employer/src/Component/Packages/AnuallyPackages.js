import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "../ResponsiveCss/ResponsiveCss.css";
import "./PackagesPage.css";
import Footer from './../Footer/Footer';
function AnuallyPackages() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="displayBlock flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mt-12 mb-2 text-black">
              Packages
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p> */}
            <div className="flex mx-auto border-2 border-amber-300 rounded overflow-hidden mt-6">
              <Link to="/monthlypackage">
                <button
                  className={`py-1 px-4 bg-amber-300 text-black focus:outline-none `}
                >
                  Monthly/Pro
                </button>
              </Link>
              <Link to="/anuallypackage">
                <button className={`py-1 px-4 text-black focus:outline-none `}>
                  Monthly/Business
                </button>
              </Link>
            </div>

            <div className="Anually w-full md:w-1/2 mx-auto">
              <div className="p-2 xl:w-full md:w-1/2 w-full main-anually-package-employer">
                <div className="main-packaage-for-the-packages-section-card h-full p-6 rounded-lg  flex flex-col relative overflow-hidden">
                  <div className="p-4 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden anual-package-employer">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                        BUSINESS
                      </h2>
                      <h1 className="main-package-amount-for-the-annually-package-price-container text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
                        <span className="main-package-amount-for-the-annually-package-price">
                          ₹8500
                        </span>
                        <span className="text-lg ml-1 font-normal text-black">
                          /yr
                        </span>
                      </h1>
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
                        30 searches
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
                        18 Internship Enquiry
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
                        30 Verified Application
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
                        50 Resume View
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
                        Dedicated CRM
                      </p>

                      <Link to="/getpackageanually">
                        <button className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
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
                      </Link>
                      {/* <p className="text-xs text-black mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AnuallyPackages;
