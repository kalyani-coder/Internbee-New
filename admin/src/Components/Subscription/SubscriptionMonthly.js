
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SubscriptionMonthly = () => {
  const [monthlyPackage, setMonthlyPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedPackage, setEditedPackage] = useState({
        monthlyPackage_Price: '',
        searches: '',
        internship_enquiry: '',
        verified_appication: '',
        resume_view: '',
        dedicated_crm: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/adminmonthlypackage');
        const data = await response.json();
        setMonthlyPackage(data[0]); // Assuming the response is an array with a single object
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setEditedPackage({
        ...monthlyPackage,
    });
};

const closeModal = () => {
    setIsModalOpen(false);
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedPackage((prevPackage) => ({
        ...prevPackage,
        [name]: value,
    }));
};

const savePackage = async () => {
    try {
        const response = await fetch(`http://localhost:8000/api/adminmonthlypackage/${monthlyPackage._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                searches: editedPackage.searches,
                monthlyPackage_Price: editedPackage.monthlyPackage_Price,
                internship_enquiry: editedPackage.internship_enquiry,
                verified_appication: editedPackage.verified_appication,
                resume_view: editedPackage.resume_view,
                dedicated_crm: editedPackage.dedicated_crm,
            }),
        });

        if (response.ok) {
            console.log('Package updated successfully');
            // Update the state locally after a successful response
            setMonthlyPackage((prevData) => ({ ...prevData, ...editedPackage }));
            closeModal();  // Assuming closeModal exists to close the modal
        } else {
            console.error('Failed to update package');
        }
    } catch (error) {
        console.error('Error updating package:', error);
    }
};

  return (
    <>
      <div><Navbar /></div>

      <section className="text-gray-600 body-font flex">
        <div><Sidebar /></div>
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">Monthly Packages</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border-2 border-amber-300 rounded overflow-hidden mt-6">
              <Link to={'/subscriptionmonthly'}>
                <button
                  className={`py-1 px-4 bg-amber-300 text-black focus:outline-none`}
                >
                  Monthly
                </button>
              </Link>
              <Link to={'/subscriptionannually'}>
                <button
                  className={`py-1 px-4 text-black focus:outline-none  'border-b-2 border-indigo-600'`}
                >
                  Annually
                </button>
              </Link>
            </div>
          </div>

          {monthlyPackage && (
            <div className="w-full md:w-1/2 mx-auto">
              <div className="p-4 xl:w-full md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                  <div className="p-4 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                      <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                      <h1 className="text-5xl text-black leading-none flex items-center pb-4 mb-4 border-b border-amber-300">
                        <span>{`₹${monthlyPackage.monthlyPackage_Price}`}</span>
                        <span className="text-lg ml-1 font-normal text-black">/mo</span>
                      </h1>
                      <p className="flex items-center text-black mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-amber-300 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>{monthlyPackage.searches}
                      </p>

                      <p className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>{monthlyPackage.internship_enquiry}
                      </p>

                      <p className="flex items-center text-gray-600 mb-2">                   <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>{monthlyPackage.verified_appication}
                      </p>


                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>{monthlyPackage.resume_view}
                      </p>


                      <p className="flex items-center text-gray-600 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>{monthlyPackage.dedicated_crm}
                      </p>

                     
                        <button onClick={openModal} className="flex items-center mt-auto text-black bg-amber-300 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Edit Package
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


      {isModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 max-w-md w-full rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Edit Package</h2>
                        <label className="block mb-2">Monthly Package Price</label>
                        <input
                            type="text"
                            name="monthlyPackage_Price"
                            value={editedPackage.monthlyPackage_Price}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />

                        <input
                            type="text"
                            name="searches"
                            value={editedPackage.searches}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />

                        <input
                            type="text"
                            name="internship_enquiry"
                            value={editedPackage.internship_enquiry}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />

                        <input
                            type="text"
                            name="verified_appication"
                            value={editedPackage.verified_appication}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />

                        <input
                            type="text"
                            name="resume_view"
                            value={editedPackage.resume_view}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />

                        <input
                            type="text"
                            name="dedicated_crm"
                            value={editedPackage.dedicated_crm}
                            onChange={handleInputChange}
                            className="border p-2 mb-4 w-full"
                        />
                        {/* Add similar input fields for other package details */}
                        <div className="flex justify-between">
                            <button
                                className="text-white bg-amber-300 px-4 py-2 rounded-md hover:bg-gray-500"
                                onClick={savePackage}
                            >
                                Save
                            </button>
                            <button
                                className="text-black bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-500"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}


      <div>
        <Footer />
      </div>
    </>
  );
};

export default SubscriptionMonthly;

