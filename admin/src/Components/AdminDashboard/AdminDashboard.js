// AdminDashboard.js

import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaList,
  FaBuilding,
  FaCogs,
  FaLayerGroup,
  FaStar,
  FaBriefcase,
  FaEye,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";
// import './AdminDashboard.css'; // Import your CSS file
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  LightningBoltIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import {
  AiOutlineEye,
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineEdit
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import LowerContent from "./LowerContent";
import "./ResponsiveCss/Responsive.css"

const AdminDashboard = () => {

  const [totalJobs, setTotalJobs] = useState(0);
  const [appliedCandidatesCount, setAppliedCandidatesCount] = useState(0);
  const [employerPackages, setEmployerPackagesCount] = useState(0);
  const [shortlistedCandidates, setShortlistedCandidates] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseJobs = await fetch("https://backend.internsbee.com/api/postinternship");
        if (!responseJobs.ok) {
          throw new Error(`HTTP error! Status: ${responseJobs.status}`);
        }

        const dataJobs = await responseJobs.json();
        console.log("API response data (total jobs):", dataJobs);

        setTotalJobs(dataJobs.length);
      } catch (error) {
        console.error("Error fetching total jobs count:", error);
      }
    };

    const fetchAppliedCandidatesCount = async () => {
      try {
        const responseCandidates = await fetch("https://backend.internsbee.com/api/applyInternship");
        if (!responseCandidates.ok) {
          throw new Error(`HTTP error! Status: ${responseCandidates.status}`);
        }

        const dataCandidates = await responseCandidates.json();
        console.log("API response data (applied candidates):", dataCandidates);

        // Set appliedCandidatesCount to the length of the array
        setAppliedCandidatesCount(dataCandidates.length);
      } catch (error) {
        console.error("Error fetching applied candidates count:", error);
      }
    };

    const fetchEmployerPackagesCount = async () => {
      try {
        const responseCandidates = await fetch("https://backend.internsbee.com/api/packages");
        if (!responseCandidates.ok) {
          throw new Error(`HTTP error! Status: ${responseCandidates.status}`);
        }

        const dataCandidates = await responseCandidates.json();
        console.log("API response data (applied candidates):", dataCandidates);

        // Set appliedCandidatesCount to the length of the array
        setEmployerPackagesCount(dataCandidates.length);
      } catch (error) {
        console.error("Error fetching applied candidates count:", error);
      }
    };

    
    const fetchShortlistedCandidatesCount = async () => {
      try {
        const responseCandidates = await fetch("https://backend.internsbee.com/api/applyInternship/shortlisted");
        if (!responseCandidates.ok) {
          throw new Error(`HTTP error! Status: ${responseCandidates.status}`);
        }

        const dataCandidates = await responseCandidates.json();
        console.log("API response data (ShortListed candidates):", dataCandidates);

        // Set appliedCandidatesCount to the length of the array
        setShortlistedCandidates(dataCandidates.length);
      } catch (error) {
        console.error("Error fetching applied candidates count:", error);
      }
    };


    fetchData();
    fetchAppliedCandidatesCount();
    fetchEmployerPackagesCount();
    fetchShortlistedCandidatesCount();
  }, []);

  return (
    <>
    <Navbar />
    <div className="displaycontent flex h-screen w-full">
      <Sidebar className="h-full" />
      <div className="w-full p-8">
        {/* Job Stats in One Row */}
        <div className=" AdminDashBoardContent flex items-center justify-between space-x-4 mb-4">

          {/* Total Jobs */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <Link to="/postinternship">
              <div className="bg-white p-6 rounded shadow-md">
                <LightningBoltIcon className="h-8 w-8 text-blue-500 mb-2" />
                <h2 className="text-xl font-semibold mb-2">Total Internships</h2>
                <p className="text-3xl font-bold text-blue-500">{totalJobs}</p>
              </div>
            </Link>
          </div>

          {/* Applied Candidates */}
          <div className=" AppliedCandidatesCard w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
      <Link to="/newjoblist">
        <div className="bg-white p-6 rounded shadow-md">
          <UserGroupIcon className="h-8 w-8 text-green-500 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Applied Candidates</h2>
          <p className="text-3xl font-bold text-green-500">{appliedCandidatesCount}</p>
        </div>
      </Link>
    </div>

          {/* Total Credit Left */}
          <div className="AppliedCandidatesCard w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <Link to="/viewemployerpackages">
              <div className="bg-white p-6 rounded shadow-md">
                <CurrencyDollarIcon className="h-8 w-8 text-purple-500 mb-2" />
                <h2 className="text-xl font-semibold mb-2">Employer By Package</h2>
                <p className="text-3xl font-bold text-purple-500">
                  {employerPackages}
                </p>
              </div>
            </Link>
          </div>

          {/* Shortlisted Candidates */}
          <div className="AppliedCandidatesCard w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
            <Link to="/viewshortlistedcandidates">
              <div className="bg-white p-6 rounded shadow-md">
                <UsersIcon className="h-8 w-8 text-orange-500 mb-2" />
                <h2 className="text-xl font-semibold mb-2">Shortlisted Candidates</h2>
                <p className="text-3xl font-bold text-orange-500">
                  {shortlistedCandidates}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <LowerContent />
      </div>
    </div>
    {/* <Footer /> */}
  </>
  );
};

export default AdminDashboard;
