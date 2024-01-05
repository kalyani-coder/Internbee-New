import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [selectedInterval, setSelectedInterval] = useState('monthly');

  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };

  return (
    <>
      <div><Navbar /></div>

      <section className="text-gray-600 body-font flex">
        <div><Sidebar /></div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">Packages</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border-2 border-amber-300 rounded overflow-hidden mt-6">
              <button
                className={`py-1 px-4 bg-amber-300 text-black focus:outline-none ${selectedInterval === 'monthly' ? 'border-b-2 border-indigo-600' : ''}`}
                onClick={() => handleIntervalChange('monthly')}
              >
                Monthly
              </button>

              <button
                className={`py-1 px-4 text-black focus:outline-none ${selectedInterval === 'annually' ? 'border-b-2 border-indigo-600' : ''}`}
                onClick={() => handleIntervalChange('annually')}
              >
                Annually
              </button>
            </div>
          </div>

          {/* Conditionally render content based on the selected interval */}
          {selectedInterval === 'monthly' && (
            <div className="w-full md:w-1/2 mx-auto">
              <div className="p-4 xl:w-full md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                  <div className="p-4   w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                      <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                      <h1 className="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
                        <span>₹5500</span>
                        <span className="text-lg ml-1 font-normal text-black">/mo</span>
                      </h1>
                      <p className="flex items-center text-black mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-amber-300 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>15 Searches
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>8 Internship Enquiry
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>10 Verified Application
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>12 Resume View
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>Dedicated CRM
                      </p>
                      <Link to='/getpackage'>
                        <button className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </Link>
                      <p className="text-xs text-black mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedInterval === 'annually' && (
            <div className="w-full md:w-1/2 mx-auto">
              <div className="p-4 xl:w-full md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg  flex flex-col relative overflow-hidden">
                  <div className="p-4  w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
                        <span>₹8500</span>
                        <span className="text-lg ml-1 font-normal text-black">/yr</span>
                      </h1>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>30 searches
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>18 Internship Enquiry
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>30 Verified Application
                      </p>
                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>50 Resume View
                      </p>
                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>Dedicated CRM
                      </p>
                      <button className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Subscribe
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <p className="text-xs text-black mt-3">Literally you probably haven't heard of them jean shorts.</p>
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
}

export default Packages;
