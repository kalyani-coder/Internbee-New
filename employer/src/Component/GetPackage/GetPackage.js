import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const GetPackage = () => {

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderNameChange = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };
  const handlePayment = async () => {
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
    const number = localStorage.getItem('number');
    const empName = localStorage.getItem('empName');
    const payment_status = " ";
    const apiUrl = 'http://localhost:8000/api/packages';

    const data = {
      cardNumber,
      accountHolderName: cardHolderName,
      expiryDate,
      cvv,
      email,
      userId,
      empName,
      number,
      payment_status,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Handle success
        console.log('Payment successful');
        alert('Payment Successful');
      } else {
        // Check for specific conditions (e.g., user already exists)
        if (response.status === 400) {
          const responseData = await response.json();
          if (responseData.error === 'User already subscribed') {
            alert('User already subscribed');
          } else {
            // Handle other errors
            console.error('Payment failed');
            alert('Payment Failed');
          }
        } else {
          // Handle other errors
          console.error('Payment failed');
          alert('Payment Failed');
        }
      }
    } catch (error) {
      console.error('Error during payment:', error);
      alert('Error during payment');
    }
  };


  return (
    <div>
      <Navbar />
      <div className="flex gap-10">
        <Sidebar />
        <div className="w-full md:w-1/2 mx-auto">
          <div className="p-4 xl:w-full md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
              <div className="p-4 w-full">
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
          onChange={handleCardNumberChange}
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
          onChange={handleCardHolderNameChange}
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
            onChange={handleExpiryDateChange}
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
            onChange={handleCvvChange}
          />
                    </div>
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
