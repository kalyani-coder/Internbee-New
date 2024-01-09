import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Employers = () => {
  const [employers, setEmployers] = useState([
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
    // Add more Employer data as needed
  ]);

  const Modal = ({ isOpen, closeModal, data }) => {
    if (!isOpen || !data) return null;

    return (
      <div className="modal flex justify-center">
        <div className="modal-content bg-white p-6 border rounded">
          
          <span
            className="close cursor-pointer font-bold text-xl" // Adjust text-lg for font size
            onClick={closeModal}
          >
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Edit Employer</h2>
          <p className="my-2">
            <strong>Employer Name: </strong> {data.name}
          </p>
          <p className="my-2">
            <strong>Location:</strong> {data.location}
          </p>
          <p className="my-2">
            <strong>Designation:</strong> {data.designation}
          </p>
          {/* Add other details you want to display */}
          {/* <button
            className="bg-black text-white hover:bg-gray-700 font-bold py-2 px-4 rounded mb-4 mr-4"
            onClick={() => console.log("Update button clicked")}
          >
            Update
          </button>
          <button
            className="bg-black text-white hover:bg-gray-700 font-bold py-2 px-4 rounded mb-4 mr-4"
            onClick={() => console.log("Delete button clicked")}
          >
            Delete
          </button> */}
          
        </div>
      </div>
    );
  };

  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    // Handle add logic
    console.log("Add button clicked");
  };

  const handleUpdate = (Employer) => {
    setSelectedEmployer(Employer);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete button clicked for Employer with ID: ${id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployer(null);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />

        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">
              View Employer Details
            </h1>

            <div className="flex gap-10">
              <div>
                <table className="w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Sr No</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Employers Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Location</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Designation</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employers.map((Employer, index) => (
                      <tr key={Employer.id}>
                        <td className="py-2 px-4 border-b text-lg">{index + 1}</td>
                        <td className="py-2 px-4 border-b text-lg">{Employer.name}</td>
                        <td className="py-2 px-4 border-b text-lg">
                          {Employer.location}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          {Employer.designation}
                        </td>
                        <td className="py-2 px-4 border-b text-lg">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleUpdate(Employer)}
                          >
                            View More
                          </button>
                        </td>
                        <td className="py-2 px-4 border-b">
                          <button
                            className="text-green-500 hover:text-green-700 mr-2"
                            onClick={() => handleUpdate(Employer)}
                          >
                            <FaPlus />
                          </button>
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={() => handleUpdate(Employer)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(Employer.id)}
                          >
                            <FaTrash />
                          </button>
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
                  data={selectedEmployer}
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

export default Employers;
