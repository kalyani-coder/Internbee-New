import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const ViewProfile = () => {
  const [adminDetails, setAdminDetails] = useState(null);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch('https://backend.internsbee.com/api/adminlogin');
        const data = await response.json();
        setAdminDetails(data);
      } catch (error) {
        console.error('Error fetching admin details:', error);
      }
    };

    fetchAdminDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex items-center justify-center w-full">
          {adminDetails && (
            <div className="bg-white p-8 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Admin Details</h2>
              <p>
                <strong>Name:</strong> {adminDetails.empName}
              </p>
              <p>
                <strong>Email:</strong> {adminDetails.email}
              </p>
              {/* Add other details you want to display */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
