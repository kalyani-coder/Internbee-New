// src/components/ViewProfilePage.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';

const ViewProfilePage = () => {
  
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    empName: '',
    password: '',
    email: '',
    number: '',
    companyAddress: '',
    Description: '',
  });

  const [editedData, setEditedData] = useState({ ...profileData });

  useEffect(() => {


    const fetchProfileData = async () => {

     
      try {
        const userId = await localStorage.getItem("userId");
        console.log(userId)
        const response = await fetch(`http://localhost:8000/api/empauth/${userId}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setProfileData(data);
        setEditedData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);


  const openEditModal = () => {
    setEditedData({ ...profileData });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const saveEditedData = () => {
    setProfileData({ ...editedData });
    closeEditModal();
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <div className='flex gap-10'>
        {/* Sidebar component */}
        <Sidebar />

        {/* Profile details container */}
        <div className="container mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
          {/* Display user's profile image */}

          <div className='text-center'>
            <h2 className="text-large font-bold "> Profile</h2>
          </div>

          {/* Display user's name and job title */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">{profileData.empName}</h1>
            {/* You may want to add a job title property to your profile data */}
            {/* <p className="text-gray-600">{profileData.jobTitle}</p> */}
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Company Name</label>
                <p>{profileData.empName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Company Email</label>
                <p>{profileData.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Phone Number</label>
                <p>{profileData.number}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Address</label>
                <p>{profileData.companyAddress}</p>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600">
                  Company Description
                </label>
                <p>{profileData.Description}</p>
              </div>
              {/* You may want to add more fields here */}
            </div>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={openEditModal}
            className="mt-6 p-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-200"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 w-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
          {/* ... rest of the modal code */}
        </div>
      )}

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default ViewProfilePage;
