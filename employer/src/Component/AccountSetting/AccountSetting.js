import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const AccountSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    email: '',
    password: '',
    contactNumber: '',
  });
  const [tempEmployeeData, setTempEmployeeData] = useState({
    email: '',
    password: '',
    contactNumber: '',
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) throw new Error('Employee ID not found');

        const response = await axios.get(`http://localhost:8000/api/employer/${userId}`);
        const { email, password, number } = response.data;

        setEmployeeData({ email, password, contactNumber: number });
        setTempEmployeeData({ email, password, contactNumber: number });
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error('Employee ID not found');

      const response = await axios.patch(`http://localhost:8000/api/employer/${userId}`, {
        email: tempEmployeeData.email,
        password: tempEmployeeData.password,
        number: tempEmployeeData.contactNumber,
      });

      alert('Employee data updated:', response.data);
      console.log('Employee data updated:', response.data);
      setEmployeeData(tempEmployeeData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating employee data:', error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempEmployeeData(employeeData);
  };

  const handleInputChange = (field, value) => {
    setTempEmployeeData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSignOut = () => {
    // Handle sign out logic
  };

  const { email, password, contactNumber } = tempEmployeeData;


  return (
    <div>
      <Navbar />
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <div className="accsec max-w-md mx-auto mt-8 p-6 rounded-md shadow-md mb-3 md:mb-0 md:mt-28 md:w-2/3 lg:w-1/3" style={{ backgroundColor: '#FFBD59', width: "100%", height:"100%" }}>
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
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
            </div>
          </div>

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
            </div>
          </div>

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
            </div>
          </div>
          <div className='flex justify-center'>
            {isEditing ? (
              <>
                <button
                  className="ml-2 px-4 py-2 bg-black text-white rounded hover:bg-black"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="ml-2 px-4 py-2 bg-black text-white rounded hover:bg-black"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
