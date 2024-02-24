import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const GetPackageAnually = () => {
    const [empId, setEmpId] = useState('');
    const [packageMonthly, setPackageMonthly] = useState('');
    const [packageAnnually, setPackageAnnually] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

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
            const response = await fetch('https://backend.internsbee.com/api/packages', {
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
            <Navbar />
            <div className="displayBlock flex gap-10">
                <Sidebar />
                <div className="w-full md:w-1/2 mx-auto">
                    <div className="p-4 xl:w-full md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">

                            <div className="p-4 w-full">
                                {/* Debit Card-like Structure */}
                                <div className="h-full p-6 rounded-lg border-2 border-amber-300 flex flex-col relative overflow-hidden">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Payment Details</h2>
                                    <div className="mb-4">
                                        <label htmlFor="cardNumber" className="text-sm text-gray-600">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            className="w-full p-2 border border-gray-300 rounded mt-1"
                                            placeholder="1234 5678 9101 1121"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="cardHolderName" className="text-sm text-gray-600">
                                            Card Holder Name
                                        </label>
                                        <input
                                            type="text"
                                            id="cardHolderName"
                                            className="w-full p-2 border border-gray-300 rounded mt-1"
                                            placeholder="John Doe"
                                            value={cardHolderName}
                                            onChange={(e) => setCardHolderName(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="mb-4 col-span-2">
                                            <label htmlFor="expiryDate" className="text-sm text-gray-600">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                                placeholder="MM/YY"
                                                value={expiryDate}
                                                onChange={(e) => setExpiryDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="cvv" className="text-sm text-gray-600">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                                placeholder="123"
                                                value={cvv}
                                                onChange={(e) => setCvv(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="bg-indigo-500 text-white py-2 px-6 mt-4 rounded hover:bg-indigo-600 focus:outline-none"
                                        onClick={handleGetPackage}
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

export default GetPackageAnually;
