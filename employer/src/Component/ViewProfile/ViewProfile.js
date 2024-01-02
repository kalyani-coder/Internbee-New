// src/components/ViewProfilePage.js
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';

const ViewProfilePage = () => {
  // State to manage the visibility of the Edit Profile Modal
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Dummy data for the user's profile
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Software Engineer',
    companyEmail: 'contact@company.com',
    phoneNumber: '(123) 456-7890',
    address: '123 Main St, City, Country',
    companyName: 'ABC Corporation',
    companyLocation: 'City, Country',
    companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.',
    // ... other profile data
  });

  // State to store edited data
  const [editedData, setEditedData] = useState({ ...profileData });

  // Function to open the Edit Profile Modal and populate input fields with existing data
  const openEditModal = () => {
    setEditedData({ ...profileData });
    setEditModalOpen(true);
  };

  // Function to close the Edit Profile Modal
  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  // Function to save the edited data
  const saveEditedData = () => {
    // Implement your patch method here with the editedData
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
          <div className="flex items-center justify-center">
            <img
              src="path-to-your-profile-image.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-amber-300"
            />
          </div>

          {/* Display user's name and job title */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h1>
            <p className="text-gray-600">{profileData.jobTitle}</p>
          </div>

          {/* Personal Information */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">First Name</label>
                <p>{profileData.firstName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Last Name</label>
                <p>{profileData.lastName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <p>{profileData.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Job Title</label>
                <p>{profileData.jobTitle}</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Company Email</label>
                <p>{profileData.companyEmail}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Phone Number</label>
                <p>{profileData.phoneNumber}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Address</label>
                <p>{profileData.address}</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Company Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Company Name</label>
                <p>{profileData.companyName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Company Location
                </label>
                <p>{profileData.companyLocation}</p>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Company Description
              </label>
              <p>{profileData.companyDescription}</p>
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
        <div className=" fixed inset-0 w-full bg-gray-500 bg-opacity-75 flex items-center justify-center">



          <div className="bg-white p-6 rounded-md w-3/5 max-h-[80vh] overflow-auto">
            <div className="text-center text-lg font-bold"> <h2>Edit Profile </h2></div>
            {/* Input fields for editing */}
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={editedData.firstName}
              onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Last Name</label>
            <input
              type="text"
              value={editedData.lastName}
              onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />


            <label className=" mt-2 block text-sm font-medium text-gray-700">email</label>
            <input
              type="text"
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Job Title </label>
            <input
              type="text"
              value={editedData.jobTitle}
              onChange={(e) => setEditedData({ ...editedData, jobTitle: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />


            <label className="block text-sm font-medium text-gray-700">Company Email</label>
            <input
              type="text"
              value={editedData.companyEmail}
              onChange={(e) => setEditedData({ ...editedData, companyEmail: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Phone Number</label>
            <input
              type="text"
              value={editedData.phoneNumber}
              onChange={(e) => setEditedData({ ...editedData, phoneNumber: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />


            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={editedData.address}
              onChange={(e) => setEditedData({ ...editedData, address: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Company Name</label>
            <input
              type="text"
              value={editedData.companyName}
              onChange={(e) => setEditedData({ ...editedData, companyName: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700">Company Location</label>
            <input
              type="text"
              value={editedData.companyLocation}
              onChange={(e) => setEditedData({ ...editedData, companyLocation: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />

            <label className="block text-sm font-medium text-gray-700 mt-4">Company Description</label>
            <input
              type="text"
              value={editedData.companyDescription}
              onChange={(e) => setEditedData({ ...editedData, companyDescription: e.target.value })}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-200 focus:border-amber-500 block w-full shadow-sm sm:text-sm"
            />



            {/* Add similar input fields for other profile data */}

            {/* Save and Cancel buttons */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={saveEditedData}
                className="p-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-200 mr-2"
              >
                Save
              </button>
              <button
                onClick={closeEditModal}
                className="p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-amber-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer component */}
      <Footer />
    </>
  );
};

export default ViewProfilePage;
