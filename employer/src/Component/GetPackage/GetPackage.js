import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import '../ResponsiveCss/ResponsiveCss.css';

const GetPackage = () => {
  const location = useLocation();
  const { state } = location;
  const { monthlyPackage } = state || {};
  const [accountHolderName, setAccountHolderName] = useState('');

  useEffect(() => {
    // Set initial values from monthlyPackage when it's available
    if (monthlyPackage) {
      setAccountHolderName(accountHolderName);
    }
  }, [monthlyPackage]);

  const handleAccountHolderNameChange = (e) => {
    setAccountHolderName(e.target.value);
  };


  
  const handlePayment = async () => {
    console.log('accountHolderName:', accountHolderName);
  
    if (!monthlyPackage) {
      console.error('Monthly package data not available');
      return;
    }
  
    const { empName, email, number, companyAddress, Description, internshipEnquiry } = monthlyPackage;
  
    const emploerId = localStorage.getItem('userId');
  
    // Check if the user has already reached the limit for internshipEnquiry
    if (internshipEnquiry > 0 && internshipEnquiry <= 8) {
      console.error('Already reached the limit for internshipEnquiry. Cannot purchase another package.');
      alert('Already reached the limit for internshipEnquiry. Cannot purchase another package.');
      return;
    }
  
    // Check if the accountHolderName matches the correct key
    if (accountHolderName !== 'qwertyuiopasdfghjkl') {
      console.error('Incorrect accountHolderName. Please enter the correct key.');
      alert('Incorrect accountHolderName. Please enter the correct key.');
      return;
    }
  
    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = currentDate.getFullYear();
  
    const formattedDate = `${dd}/${mm}/${yyyy}`;
  
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    const nextMonth_dd = String(nextMonthDate.getDate()).padStart(2, '0');
    const nextMonth_mm = String(nextMonthDate.getMonth() + 1).padStart(2, '0');
    const nextMonth_yyyy = nextMonthDate.getFullYear();
  
    const purchacepackageEndDate = `${nextMonth_dd}/${nextMonth_mm}/${nextMonth_yyyy}`;
    const internshipEnquiryAsNumber = monthlyPackage.internship_enquiry !== null ? parseInt(monthlyPackage.internship_enquiry, 10) : null;

    const searchesAsNumber = monthlyPackage.searches !== null ? parseInt(monthlyPackage.searches, 10) : null;
  
    const apiUrl = `https://internbee-backend-apis.onrender.com/api/employer/${emploerId}`;
  
    const data = {
      empName,
      email,
      number,
      companyAddress,
      Description,
      purchacepackageDate: formattedDate,
      purchacepackageEndDate: purchacepackageEndDate,
      paymentStatus: '', // Assuming the payment is accepted for a new package
      accountHolderName: accountHolderName,
      packagePrice: monthlyPackage.monthlyPackage_Price,
      searches:searchesAsNumber,
      internshipEnquiry: internshipEnquiryAsNumber,
      verifiedApplication: monthlyPackage.verified_appication,
      ResumeView: monthlyPackage.resume_view,
      dedicatedCRM: monthlyPackage.dedicated_crm,
    };
  
    console.log('data to be sent:', data);
    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Employer data updated successfully');
        
        // If the user is purchasing a new package, update the internshipCounter
        if (internshipEnquiryAsNumber > 0) {
          const updatedEmployerDetails = {
            ...monthlyPackage,
            internshipCounter: monthlyPackage.internshipCounter + 1,
          };
    
          // Update employer details with the incremented internshipCounter
          const updateResponse = await fetch(apiUrl, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmployerDetails),
          });
    
          if (updateResponse.ok) {
            console.log('Employer internshipCounter updated successfully');
          } else {
            console.error('Error updating employer internshipCounter');
            // Handle the error as needed
          }
        }
  
        alert('Payment Successful');
        // Add any other handling or redirection logic here
      } else {
        console.error('Error updating employer data');
        alert('Payment Failed');
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Error during payment');
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="displayBlock flex gap-10">
        <Sidebar />
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

export default GetPackage;







