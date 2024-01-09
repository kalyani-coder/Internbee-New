import React from 'react';
import { Card, Form, Button, Dropdown } from 'react-bootstrap';
import './Subscription.css'; // Import the CSS file
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaCaretDown } from 'react-icons/fa';


const Subscription = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto my-10">
            <div className="flex items-center justify-center">
  <Card className="p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
    <Card.Body>
      <h1 className="text-4xl font-bold mb-6">Subscription</h1>

      <Form>
        <Form.Group controlId="packageDropdown" className="mb-6">
          <label htmlFor="packageDropdown" className="block text-gray-800 font-bold mb-3 text-xl">Package</label>
          <div className="relative">
            <select
              id="packageDropdown"
              className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-4 px-5 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
            >
              <option value="Select Package">Select Package</option>
              <option value="Gold">Gold</option>
              <option value="Primium">Primium</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <FaCaretDown />
            </div>
          </div>
        </Form.Group>

        <Form.Group controlId="dropdownDropdown" className="mb-6">
          <label htmlFor="dropdownDropdown" className="block text-gray-800 font-bold mb-3 text-xl">For</label>
          <div className="relative">
            <select
              id="packageDropdown"
              className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-4 px-5 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
            >
              <option value="Select">Select</option>
              <option value="Student">Student</option>
              <option value="Employers">Employer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <FaCaretDown />
            </div>
          </div>
        </Form.Group>

        <Form.Group controlId="amountDropdown" className="mb-6">
          <label htmlFor="amountDropdown" className="block text-gray-800 font-bold mb-3 text-xl">Amount</label>
          <input
            type="text"
            id="amountDropdown"
            className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-4 px-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
            placeholder="Enter Amount"
          />
        </Form.Group>

        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 border border-black rounded text-xl">
          Save
        </button>
      </Form>
    </Card.Body>
  </Card>
</div>

            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Subscription;
