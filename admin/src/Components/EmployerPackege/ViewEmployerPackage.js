import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ViewEmployerPackages = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    // Fetch employer data from the API
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
    // Confirm with the admin
    const isConfirmed = window.confirm('Are you sure you want to accept this request?');

    if (!isConfirmed) {
      return; // If not confirmed, do nothing
    }

    // Make a PATCH request to update paymentStatus to "Accepted"
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
        // Successfully updated paymentStatus, perform any other necessary actions
        console.log('PaymentStatus updated to Accepted');

        // You can force a re-render or update the state to immediately reflect the change
        // For example, if employers is the state containing the employer data:
        // setEmployers(updatedEmployers);

      } else {
        console.error('Failed to update paymentStatus');
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Error during PATCH request:', error);
      // Handle the error as needed
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />

        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">
              View Employer Packages
            </h1>

            <div className="mb-4 flex">
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
                className="bg-black text-white py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
            <div className="flex gap-10">
              <div>
                <table className="table-candidates w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Emp Email</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Employer Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Package</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                 
                  {employers
  .filter(
    (employer) =>
      employer.purchacepackageDate && employer.purchacepackageDate.trim() !== "" // Check if purchacepackageDate is not empty
  )
  .map((employer) => (
  <tr key={employer._id}>
    <td className="py-2 px-4 border-b text-lg">{employer.email}</td>
    <td className="py-2 px-4 border-b text-lg">{employer.empName}</td>
    <td className="py-2 px-4 border-b text-lg">{/* Display package details */}</td>
    <td className="py-2 px-4 border-b text-lg">
      <button className="text-blue-500 hover:text-blue-700 mr-2">
        View More
      </button>
    </td>
    <td>
    <button
            onClick={() => handlePendingClick(employer._id)}
            className={`${
              employer.paymentStatus === 'Accepted'
                ? "bg-green-500"
                : employer.paymentStatus === 'Pending'
                  ? "bg-red-500"
                  : "bg-gray-500" // Default color if status is neither Accepted nor Pending
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

              <div className="flex justify-center">
                {/* Additional content */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewEmployerPackages;
