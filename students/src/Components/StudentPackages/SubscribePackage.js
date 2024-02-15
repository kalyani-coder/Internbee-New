import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Internal_Navbar from '../InternalNavbar';


const SubscribePackage = () => {
  const [accountHolderName, setAccountHolderName] = useState('');
  const location = useLocation();
  const { state } = location;
  const { monthlyPackage } = state || {};
  console.log(monthlyPackage);

  const handleAccountHolderNameChange = (e) => {
    setAccountHolderName(e.target.value);
  };


  const handlePayment = async () => {
    try {
      // Step 1: Retrieve user ID from localStorage
      const studentId = localStorage.getItem('userId');
  
      // Step 2: Construct the API endpoint
      const apiUrl = `https://backend.internsbee.com/api/auth/${studentId}`;
  
      // Step 3: Construct the data object
      const dataToUpdate = {
        monthlyPackage: {
          package_type: 'monthly',
          monthlyPackage_Price: monthlyPackage.monthlyPackage_Price,
          searches: monthlyPackage.searches,
          verified_application: monthlyPackage.verified_application,
          dedicated_crm: monthlyPackage.dedicated_crm,
          monthlyOpportunities: monthlyPackage.opportunities,
          accountHolderName: accountHolderName,
        },
      };
  
      // Step 4: Perform the PATCH request
      const response = await axios.patch(apiUrl, dataToUpdate);
      console.log("vvv", dataToUpdate);
  
      if (response.data) {
        console.log('User data updated successfully');
        alert('User data updated successfully');
        // Additional logic or redirection can be added here
      } else {
        console.error('Error updating user data');
        alert('Payment Failed');
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Error during payment');
    }
  };


  return (
    <div>
      <div>
        <Internal_Navbar />
      </div>
      <div className="flex gap-10 mt-20">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="p-4 xl:w-full md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
              <div className="p-4 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Payment Details</h2>
                  <div className="mb-4">
                    <label htmlFor="accountHolderName" className="text-sm text-gray-600">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      id="accountHolderName"
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="John Doe"
                      value={accountHolderName}
                      onChange={handleAccountHolderNameChange}
                    />
                  </div>
                  <button
                    className="bg-indigo-500 text-white py-2 px-6 mt-4 rounded hover:bg-indigo-600 focus:outline-none"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePackage;
