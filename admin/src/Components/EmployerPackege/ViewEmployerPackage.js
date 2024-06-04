import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import '../ResponsiveCss/Responsive.css';


const ViewEmployerPackages = () => {
  const [employers, setEmployers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [candidateDetails, setCandidateDetails] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewMoreClick = (candidate) => {
    openModal();
    // Set detailed information for the modal
    setCandidateDetails(candidate);
  };

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/employer");
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.error("Error fetching employer data:", error);
      }
    };

    fetchEmployers();
  }, []);

  const handlePendingClick = async (employerId) => {
    const isConfirmed = window.confirm('Are you sure you want to accept this request?');

    if (!isConfirmed) {
      return;
    }

    const apiUrl = `http://localhost:8000/api/employer/${employerId}`;
    const data = { paymentStatus: 'Accepted' };

    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('PaymentStatus updated to Accepted');

      } else {
        console.error('Failed to update paymentStatus');
      }
    } catch (error) {
      console.error('Error during PATCH request:', error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="displaycontent flex justify-between h-screen">
        <Sidebar />

        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="ViewEmployeeHeading text-3xl font-bold mb-4 mt-8 ml-20" >
              View Employer Packages
            </h1>

            <div className="mb-4 flex ml-20 serachboxviewemployer">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by package"
                className="border rounded py-2 px-3 mr-2"
              />
              <button
                className="ViewEmpBtn bg-black text-white py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
            <div className="flex gap-10">
              <div className="ViewEmployerSlider">
                <div className="ViewEmployerSlider2 table-wrapper relative right-28" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  <table className="table-candidates w-full bg-white border-2 border-gray-300">
                    <thead>
                      <tr>
                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Emp Email</th>
                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Employer Name</th>
                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Package</th>
                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Profile</th>
                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employers
                        .filter(
                          (employer) =>
                            employer.purchacepackageDate && employer.purchacepackageDate.trim() !== ""
                        )
                        .map((employer) => (
                          <tr key={employer._id}>
                            <td className="py-2 px-4 border-b text-lg">{employer.email}</td>
                            <td className="py-2 px-4 border-b text-lg">{employer.empName}</td>
                            <td className="py-2 px-4 border-b text-lg"></td>
                            <td className="py-2 px-4 border-b text-lg">
                              <button
                                onClick={() => handleViewMoreClick(employer)}
                                className="text-blue-500 hover:text-blue-700 mr-2"
                              >
                                View More
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => handlePendingClick(employer._id)}
                                className={`${employer.paymentStatus === 'Accepted'
                                  ? "bg-green-500"
                                  : employer.paymentStatus === 'Pending'
                                    ? "bg-red-500"
                                    : "bg-gray-500"
                                  } p-2 rounded-lg text-white`}
                              >
                                {employer.paymentStatus ? employer.paymentStatus : "Pending"}
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-center"></div>
            </div>

          </div>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 max-w-md w-full rounded-md">
            <h2 className="text-xl font-semibold mb-4">Student Details</h2>
            {/* Display detailed information here */}
            <div>
              <label className="block mb-2">First Name: {candidateDetails.empName}</label><hr />
              <label>Email: {candidateDetails.email}</label><hr />
              <label>number: {candidateDetails.number}</label><hr />
              <label>company Address: {candidateDetails.companyAddress}</label><hr />
              <label>purchacepackageDate: {candidateDetails.purchacepackageDate}</label><hr />
              <label>purchacepackageEndDate: {candidateDetails.purchacepackageEndDate}</label><hr />
              <label>packagePrice: {candidateDetails.packagePrice}</label><hr />
              <label>accountHolderName: {candidateDetails.accountHolderName}</label><hr />
              <label>paymentStatus: {candidateDetails.searches}</label><hr />
              <label>Remeaning internshipEnquiry: {candidateDetails.internshipEnquiry}</label><hr />
              <label>verifiedApplication: {candidateDetails.verifiedApplication}</label><hr />
              <label>ResumeView: {candidateDetails.ResumeView}</label><hr />
              <label>dedicatedCRM: {candidateDetails.dedicatedCRM}</label><hr />

            </div>
            <div className="flex justify-between mt-3">
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

      <Footer />
    </>
  );
};

export default ViewEmployerPackages;
