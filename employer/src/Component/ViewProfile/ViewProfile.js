// src/components/ViewProfilePage.js
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import '../ResponsiveCss/ResponsiveCss.css';

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
        const response = await fetch(`https://backend.internsbee.com/api/employer/${userId}`);
        const data = await response.json();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveEditedData = async () => {
    try {
      const userId = await localStorage.getItem("userId");
      await fetch(`https://backend.internsbee.com/api/employer/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      setProfileData({ ...editedData });
      closeEditModal();
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className='displayBlock flex gap-10'>
        <Sidebar />

        <div className="container mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
          <div className='text-center'>
            <h2 className="text-large font-bold "> Profile</h2>
          </div>

          {/* <div className="mt-6">
            <h1 className="text-2xl font-bold">{profileData.empName}</h1>
          </div> */}

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Name</label>
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
                <label className="block text-sm text-gray-600">Company Description</label>
                <p>{profileData.Description}</p>
              </div>
            </div>
          </div>

          <button
            onClick={openEditModal}
            className="mt-6 p-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-200"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 w-full bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="empName"
                  value={editedData.empName}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Company Email</label>
                <input
                  type="text"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  value={editedData.number}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Address</label>
                <input
                  type="text"
                  name="companyAddress"
                  value={editedData.companyAddress}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600">Company Description</label>
                <input
                  type="text"
                  name="Description"
                  value={editedData.Description}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </div>

              <div className="flex">
                <button
                  type="button"
                  onClick={saveEditedData}
                  className="bg-amber-500 text-white p-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="ml-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ViewProfilePage;
