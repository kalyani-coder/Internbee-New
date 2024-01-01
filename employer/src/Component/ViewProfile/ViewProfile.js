// src/components/ViewProfilePage.js
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const ViewProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Software Engineer',
    companyEmail: 'john.doe@company.com',
    phoneNo: '123-456-7890',
    address: '123 Main St, Cityville',
    companyName: 'ABC Corp',
    companyLocation: 'Cityville, USA',
    companyDescription: 'A software development company.',
    profilePic: 'https://example.com/profile-pic.jpg',
  });

  const [editMode, setEditMode] = useState({
    personalInfo: false,
    contactDetails: false,
    companyDetails: false,
    profilePicture: false,
  });

  const handleEditClick = (section) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [section]: true,
    }));
  };

  const handleSaveUpdate = () => {
    console.log('Save/Update button clicked');
    setEditMode({
      personalInfo: false,
      contactDetails: false,
      companyDetails: false,
      profilePicture: false,
    });
    // Add logic to save or update the profile data (e.g., make an API call)
  };

  const handleChange = (e) => {
    // Handle changes for editable fields
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <> <div><Navbar/></div>
    
    <div className="max-w-4xl mx-auto mt-5 bg-amber-300 pl-7 p-7"> 
      <h2 className="text-3xl font-semibold mb-6">View Profile</h2>

      {/* Personal Information Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          Personal Information
          {!editMode.personalInfo && (
            <button onClick={() => handleEditClick('personalInfo')} className="text-blue-500">
              Edit
            </button>
          )}
        </h3>
        {editMode.personalInfo ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={profileData.jobTitle}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={profileData.jobTitle}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Contact Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          Contact Details
          {!editMode.contactDetails && (
            <button onClick={() => handleEditClick('contactDetails')} className="text-blue-500">
              Edit
            </button>
          )}
        </h3>
        {editMode.contactDetails ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
                  Company Email
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={profileData.companyEmail}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={profileData.phoneNo}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">
                  Company Email
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={profileData.companyEmail}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={profileData.phoneNo}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profileData.address}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Company Details Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          Company Details
          {!editMode.companyDetails && (
            <button onClick={() => handleEditClick('companyDetails')} className="text-blue-500">
              Edit
            </button>
          )}
        </h3>
        {editMode.companyDetails ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={profileData.companyName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700">
                  Company Location
                </label>
                <input
                  type="text"
                  id="companyLocation"
                  name="companyLocation"
                  value={profileData.companyLocation}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={profileData.companyDescription}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={profileData.companyName}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="companyLocation" className="block text-sm font-medium text-gray-700">
                  Company Location
                </label>
                <input
                  type="text"
                  id="companyLocation"
                  name="companyLocation"
                  value={profileData.companyLocation}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700">
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  value={profileData.companyDescription}
                  readOnly
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Profile Picture Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          Profile Picture
          {!editMode.profilePicture && (
            <button onClick={() => handleEditClick('profilePicture')} className="text-blue-500">
              Edit
            </button>
          )}
        </h3>
        {editMode.profilePicture ? (
          <>
            <div className="mb-4">
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                onChange={(e) => console.log(e.target.files[0])}
                accept="image/*"
                className="mt-1 p-2 border border-black rounded-md w-full"
                style={{ width: '60%' }}
              />



            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={(e) => console.log(e.target.files[0])}
              accept="image/*"
              className="mt-1 p-2 border border-black rounded-md w-full"
              style={{width:"60%"}}
            />
            </div>
          </>
        )}
      </div>

      {/* Save/Update Button */}
      {Object.values(editMode).some((value) => value) && (
        <div className="flex justify-end">
          <button
            onClick={handleSaveUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save/Update
          </button>
        </div>
      )}
    </div>
    <div><Footer/></div>
    </>
  );
};

export default ViewProfilePage;
