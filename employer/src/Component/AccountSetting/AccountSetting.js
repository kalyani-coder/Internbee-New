import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const AccountSettings = () => {
  const [email, setEmail] = useState('example@email.com');
  const [password, setPassword] = useState('***');
  const [contactNumber, setContactNumber] = useState('123-456-7890');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (field) => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      // Save changes or perform validation
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSignOut = () => {
    // Handle sign out logic
  };

  return (
    <> <div><Navbar/></div>
  
  <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-md mb-3" style={{ backgroundColor: '#FFBD59' }}>
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      {/* Email Section */}
      <div className="mb-4">
        <label htmlFor="email" className="text-sm font-medium text-black">
          Email
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="email"
            className="border p-2 w-full"
            value={email}
            readOnly={!isEditing}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <button
            className={`ml-2 px-4 py-2 ${isEditing ? 'bg-black' : 'bg-black'} text-white rounded hover:${
              isEditing ? 'bg-black' : 'bg-black'
            }`}
            onClick={() => handleEditClick('email')}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Password Section */}
      <div className="mb-4">
        <label htmlFor="password" className="text-sm font-medium text-black">
          Password
        </label>
        <div className="flex items-center">
          <input
            type="password"
            id="password"
            className="border p-2 w-full"
            value={password}
            readOnly={!isEditing}
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <button
            className={`ml-2 px-4 py-2 ${isEditing ? 'bg-black' : 'bg-black'} text-white rounded hover:${
              isEditing ? 'bg-black' : 'bg-black'
            }`}
            onClick={() => handleEditClick('password')}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Contact Number Section */}
      <div className="mb-4">
        <label htmlFor="contact" className="text-sm font-medium text-black">
          Contact Number
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="contact"
            className="border p-2 w-full"
            value={contactNumber}
            readOnly={!isEditing}
            onChange={(e) => handleInputChange('contactNumber', e.target.value)}
          />
          <button
            className={`ml-2 px-4 py-2 ${isEditing ? 'bg-black' : 'bg-black'} text-white rounded hover:${
              isEditing ? 'bg-black' : 'bg-black'
            }`}
            onClick={() => handleEditClick('contactNumber')}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      {/* Sign Out Button */}
      <button
        className="w-full mt-6 px-4 py-2 bg-gray-900 text-white rounded hover:bg-black"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
<div><Footer/></div>
    </>
  );
};

export default AccountSettings;