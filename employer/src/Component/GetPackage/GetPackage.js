import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const GetPackage = () => {
  const [empId, setEmpId] = useState('');
  const [packageMonthly, setPackageMonthly] = useState('');
  const [packageAnnually, setPackageAnnually] = useState('');

  useEffect(() => {
    // Fetch empId from local storage
    const storedEmpId = localStorage.getItem('userId');
    if (storedEmpId) {
      setEmpId(storedEmpId);
    }
  }, []);

  const handleGetPackage = async () => {
    try {
      // Send a POST request to the /api/packages endpoint with the entered values
      const response = await fetch('http://localhost:8000/api/packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          empId,
          package_monthly: packageMonthly,
          package_annually: packageAnnually,
        }),
      });
  
      if (response.ok) {
        // Handle success, e.g., display a success message
        console.log('Package details added successfully');
      } else {
        // Handle errors, e.g., display an error message
        const errorMessage = await response.json(); // Assuming the server returns a JSON error message
        if (errorMessage.message === 'Package already exists for this empId') {
          console.error('Employee already has a package');
          alert('Employee already has a package'); // Replace with your own error handling logic or display a message to the user indicating that the employee already has a package
          // Display a message to the user indicating that the employee already has a package
        } else {
          console.error('Failed to add package details');
        }
      }
    } catch (error) {
      // Handle other types of errors, e.g., network issues
      console.error('Error during package details submission', error);
    }
  };
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div><br/><br/>

      <input type='text' placeholder='enter key'></input>
      <button className='btn btn-primary'>get package</button>
            
    </div>
  );
};

export default GetPackage;
