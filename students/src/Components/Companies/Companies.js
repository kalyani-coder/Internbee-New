import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Internal_Navbar from "../Internal_Navbar";
import Footer from "../Footer";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await fetch(
          "https://internbee-backend-apis.onrender.com/api/getallemployer/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <>
      <div>
        <Internal_Navbar />
      </div>

      <div className="container mx-auto p-4 mt-20 ">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Registered Companies
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <li
              key={index}
              className={`bg-white shadow-lg p-6 rounded-lg transform transition-transform`}
            >
              <h2 className="text-xl font-bold mb-2 text-blue-700">
                {company.empoyerName}
              </h2>
              <p className="text-gray-600 mb-2">{company.Description}</p>
              <p className="text-gray-600">{company.companyAddress}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Companies;
