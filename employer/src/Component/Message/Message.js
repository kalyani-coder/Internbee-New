import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Message = () => {
  const [enquiries, setEnquiries] = useState([
    { text: 'Dummy Inquiry 1', status: 'New' },
    { text: 'Dummy Inquiry 2', status: 'New' }
  ]);
  const [newEnquiry, setNewEnquiry] = useState('');
  const [resolvedEnquiries, setResolvedEnquiries] = useState('');

  const handleNewEnquiry = () => {
    if (newEnquiry.trim() !== '') {
      setEnquiries([...enquiries, { text: newEnquiry, status: 'New' }]);
      setNewEnquiry('');
    }
  };

  const handleResolveEnquiry = (index) => {
    const resolvedEnquiry = enquiries[index];
    setResolvedEnquiries([...resolvedEnquiries, resolvedEnquiry]);
    setEnquiries(enquiries.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Helpdesk</h1>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleNewEnquiry}
          >
            New Enquiry
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log('Resolved Enquiry clicked')}
          >
            Resolved Enquiry
          </button>
        </div>

        <div className="w-full">
          {enquiries.map((enquiry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-4 m-2 rounded-md w-3/4 mx-auto"
            >
              <p className="text-left">{enquiry.text}</p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2"
                onClick={() => handleResolveEnquiry(index)}
              >
                Resolve
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
