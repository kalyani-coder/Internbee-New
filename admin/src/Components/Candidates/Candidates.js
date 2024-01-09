// Candidates.js

import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

const Candidates = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "San Francisco",
      designation: "UX Designer",
    },
    // Add more candidate data as needed
  ]);

  const Modal = ({ isOpen, closeModal, data }) => {
    if (!isOpen || !data) return null;

    return (
      <div className="modal flex justify-center">
        <div className="modal-content bg-white p-6 border rounded">
          <span
            className="close cursor-pointer font-bold text-xl"
            onClick={closeModal}
          >
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Edit Candidate</h2>
          <p className="my-2">
            <strong>Candidate Name: </strong> {data.name}
          </p>
          <p className="my-2">
            <strong>Location:</strong> {data.location}
          </p>
          <p className="my-2">
            <strong>Designation:</strong> {data.designation}
          </p>
          {/* Add other details you want to display */}
          <div className="actions">
           
            <button
              className="bg-black text-white hover:bg-gray-700 font-bold py-2 px-4 rounded mb-4 mr-4"
              onClick={() => console.log("Delete button clicked")}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    // Handle add logic
    console.log("Add button clicked");
  };

  const handleUpdate = (candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete button clicked for candidate with ID: ${id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">View Candidate Details</h1>
            <div className="flex gap-10">
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Candidates Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Designation</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {candidates.map((candidate, index) => (
                      <tr key={candidate.id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">{candidate.name}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.location}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {candidate.designation}
                        </td>
                        <td className="py-2 px-4 border-b">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                            onClick={() => handleUpdate(candidate)}
                          >
                            View More
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">
                          <div className="actions">
                            <button
                              className="text-green-500 hover:text-green-700 mr-2 text-lg"
                              onClick={() => handleUpdate(candidate)}
                            >
                              <FaPlus />
                            </button>
                            <button
                              className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                              onClick={() => handleUpdate(candidate)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 text-lg"
                              onClick={() => handleDelete(candidate.id)}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <Modal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  data={selectedCandidate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Candidates;
