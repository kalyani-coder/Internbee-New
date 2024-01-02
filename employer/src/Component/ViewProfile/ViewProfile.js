// src/components/ViewProfilePage.js
import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';

const ViewProfilePage = () => {
  const profileImageSrc = 'path-to-your-profile-image.jpg';
  const firstName = 'John';
  const lastName = 'Doe';
  const email = 'john.doe@example.com';
  const jobTitle = 'Software Engineer';
  const companyEmail = 'contact@company.com';
  const phoneNumber = '(123) 456-7890';
  const address = '123 Main St, City, Country';
  const companyName = 'ABC Corporation';
  const companyLocation = 'City, Country';
  const companyDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.';

  return (

    <>

      <div>
        <Navbar />
      </div>

      <div className='flex gap-10'>
        <div>
          <Sidebar />
        </div>
        <div className="container mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-center">
            <img
              src={profileImageSrc}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-amber-300"
            />
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h1>
            <p className="text-gray-600">{jobTitle}</p>
          </div>

          {/* Personal Information */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">First Name</label>
                <p>{firstName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Last Name</label>
                <p>{lastName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <p>{email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Job Title</label>
                <p>{jobTitle}</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Contact Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Company Email</label>
                <p>{companyEmail}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Phone Number</label>
                <p>{phoneNumber}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Address</label>
                <p>{address}</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Company Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Company Name</label>
                <p>{companyName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">
                  Company Location
                </label>
                <p>{companyLocation}</p>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Company Description
              </label>
              <p>{companyDescription}</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />

    </>
  );
};

export default ViewProfilePage;
