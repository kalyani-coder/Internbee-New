// FreePlan.js
import React from "react";
import { Link } from "react-router-dom";

import Internal_Navbar from "../Internal_Navbar";

const FreePlan = () => {
    return (

        <>
            <Internal_Navbar />
            {/* asjgdhdsj */}
            <div className="container px-5 py-24 mx-auto flex flex-col items-center">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetricald.</p>
                    <div className="flex items-center justify-center mt-5">
                        <Link to="/freeplan">
                            <button className="py-1 px-4 bg-amber-300 text-black border-r-2 focus:outline-none">Free</button>
                        </Link>
                        <Link to="/monthlyplan">
                            <button className="py-1 px-4 bg-amber-300 focus:outline-none">Monthly</button>
                        </Link>
                    </div>
                </div>

                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-amber-500 flex flex-col relative overflow-hidden">
                        {/* <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span> */}
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                            <span>Free</span>
                            <span className="text-lg ml-1 font-normal text-gray-500"></span>
                        </h1>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>5 Search
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>3 Verified Apply
                        </p>
                        <p className="flex items-center text-gray-600 mb-2">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Dedicated CRM
                        </p>
                        <p className="flex items-center text-gray-600 mb-6">
                            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>1 Opportunities
                        </p>
                        <button className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none rounded">
                            Subscribe
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FreePlan;
