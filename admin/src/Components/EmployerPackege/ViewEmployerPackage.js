import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Modal = ({ isOpen, closeModal, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content bg-white p-6 border rounded">
        <span className="close cursor-pointer font-bold text-xl" onClick={closeModal}>
          &times;
        </span>
        <h2 className="text-2xl font-bold mb-4">Edit Employer Package</h2>
        <p className="my-2">
          <strong>Employer Name: </strong> {data.name}
        </p>
        <p className="my-2">
          <strong>Package:</strong> {data.package}
        </p>
        <p className="my-2">
          <strong>Profile:</strong> {data.profile}
        </p>
        {/* Add other details you want to display */}
        <button
          className="bg-black text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 border border-black rounded mb-4 mr-4"
          onClick={() => console.log("Save button clicked")}
        >
          Save
        </button>
        <button
          className="bg-black text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 border border-black rounded mb-4 mr-4"
          onClick={() => console.log("Delete button clicked")}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ViewEmployerPackages = () => {
  // const [packages, setPackages] = useState([
  //   {
  //     id: 1,
  //     name: "Smith",
  //     package: "Premium",
  //     profile: "view more",
  //   },
  //   {
  //     id: 2,
  //     name: "john Doe",
  //     package: "Gold",
  //     profile: "view more",
  //   },
  // ]);


  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/packages");
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Edit button clicked for package with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete button clicked for package with ID: ${id}`);
  };

  const handleViewMore = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const handleSearch = () => {
    // Custom search logic (if needed)
    console.log("Searching for package:", searchQuery);
  };

  // const filteredPackages = packages.filter((pkg) =>
  //   pkg.package.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleAccept = async (packageId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/packages/${packageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_status: "Accepted",
        }),
      });
  
      if (response.ok) {
        alert('Status Updated Sucessfull')
        // Update the local state or trigger a refetch if needed
        // For example, you can refetch the data using the same logic in your useEffect
        // or update the packages state directly based on the updated data
      } else {
        console.error("Failed to update payment status");
      }
    } catch (error) {
      console.error("Error during patch request:", error);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />

        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">
              View Employer Packages
            </h1>

            <div className="mb-4 flex">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by package"
                value={searchQuery}
               
                className="border rounded py-2 px-3 mr-2"
              />
              <button
                className="bg-black text-white py-2 px-4 rounded"
               
              >
                Search
              </button>
            </div>
            <div className="flex gap-10">
              <div>
                <table className="table-candidates w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 border-b font-bold text-lg">Emp Email</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Employer Name</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Package</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Profile</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                      <th className="py-4 px-6 border-b font-bold text-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {packages.map((pkg) => (
  <tr key={pkg._id}>
    <td className="py-2 px-4 border-b text-lg">{pkg.email}</td>
    <td className="py-2 px-4 border-b text-lg">{pkg.empName}</td>
    <td className="py-2 px-4 border-b text-lg">{pkg.package}</td>
    <td className="py-2 px-4 border-b text-lg">
      <button
        className="text-blue-500 hover:text-blue-700 mr-2"
        onClick={() => handleViewMore(pkg)}
      >
        View More
      </button>
    </td>
    <td className="py-2 px-4 border-b text-lg">
      <button
        className="text-blue-500 hover:text-blue-700 mr-2"
        onClick={() => handleEdit(pkg._id)}
      >
        <FaEdit />
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleDelete(pkg._id)}
      >
        <FaTrash />
      </button>
    </td>

    <td>
  <button
    className={pkg.payment_status === "Accepted" ? "bg-green-500 p-2 rounded-lg text-white" : (pkg.payment_status === " " ? "bg-red-500 p-2 rounded-lg text-white" : "bg-amber-300 p-2 rounded-lg")}
    onClick={() => handleAccept(pkg._id)}
  >
    {pkg.payment_status === "Accepted" ? "Accepted" : "Pending"}
  </button>
</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>



              <div className="flex justify-center">
                <Modal
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                  data={selectedPackage}
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

export default ViewEmployerPackages;
