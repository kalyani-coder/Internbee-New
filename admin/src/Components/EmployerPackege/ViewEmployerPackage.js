import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ViewEmployerPackages = () => {

  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedEmployer, setSelectedEmployer] = useState(null);

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

      } else {
        console.error("Failed to update payment status");
      }
    } catch (error) {
      console.error("Error during patch request:", error);
    }
  };

  const handleViewMore = async (packageId, userId) => {
    try {
      const packageResponse = await fetch(`http://localhost:8000/api/packages/${packageId}`);
      const employerResponse = await fetch(`http://localhost:8000/api/empauth/${userId}`);
      const packageData = await packageResponse.json();
      const employerData = await employerResponse.json();

      setSelectedPackage(packageData);
      setSelectedEmployer(employerData);
    } catch (error) {
      console.error("Error fetching package details:", error);
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
                            onClick={() => handleViewMore(pkg._id, pkg.userId)}
                          >
                            View More
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

              </div>
            </div>
          </div>
        </div>
      </div>

   


      {selectedEmployer && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close cursor-pointer" onClick={() => setSelectedEmployer(null)}>
              &times;
            </span>
            <div className="modal-content">
              <h2 className="text-2xl font-bold mb-4">Employer Details</h2><hr />
              {/* Display details from selectedEmployer */}
              <p>{`Employer Name: ${selectedEmployer.empName}`}</p><hr />
              <p>{`Email: ${selectedEmployer.email}`}</p><hr />
              <p>{`Number: ${selectedEmployer.number}`}</p><hr />
              <p>{`Company Address: ${selectedEmployer.companyAddress}`}</p><hr />
              <p>{`Description: ${selectedEmployer.Description}`}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ViewEmployerPackages;
