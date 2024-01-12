// AdminDashboard.js

import React,{useState,useEffect} from "react";
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







const recentApplicantsData = [
  {
    id: 1,
    candidatename: "John Doe",
    status: "Approved",
    appliedDate: "01/01/2024",
  },
  {
    id: 1,
    candidatename: "Smith Mark",
    status: "Pending",
    appliedDate: "01/01/2024",
  },
  {
    id: 1,
    candidatename: "Albbert Peter",
    status: "Approved",
    appliedDate: "01/01/2024",
  },

  // Add more job data as needed
];

const applicantReviewData = [
  {
    id: 1,
    candidateName: "John Doe",
    jobProfile: "Software Developer",
    experience: "3 years",
  },
  // Add more entries as needed
];
const JobListReviewData = [
  {
    id: 1,
    title: "UI Developer",
    applications: "4+ year ",
    status: "Active",
  },
  {
    id: 2,
    title: "React Js Developer",
    applications: "1+ year ",
    status: "Active",
  },
];
const JobReviewData = [
  { id: 1, candidateName: 'John Doe' },
  { id: 2, candidateName: 'Jane Smith' },
  
  // Add more data as needed
];
const creditData = {
  totalJobs: 100,
  appliedCandidates: 500,
  totalCreditLeft: 250,
  shortlistedCandidates: 50,
};

const AdminDashboard = () => {

  const [totalJobs, setTotalJobs] = useState(0);
  console.log(totalJobs)

  useEffect(() => {
    // Fetch total jobs count from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/postinternship");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Log the entire data object to the console for debugging
        console.log("API response data:", data);
  
        // Set totalJobs to the length of the array
        setTotalJobs(data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full">
        <Sidebar className="h-full" />
        <div className="w-full p-8">
          {/* Job Stats in One Row */}
          <div className="flex items-center justify-between space-x-4 mb-4">

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
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <Link to="/newjoblist">
          <div className="bg-white p-6 rounded shadow-md">
            <UserGroupIcon className="h-8 w-8 text-green-500 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Applied Candidates</h2>
            <p className="text-3xl font-bold text-green-500">
              {creditData.appliedCandidates}
            </p>
          </div>
        </Link>
      </div>

      {/* Total Credit Left */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <Link to="/viewemployerpackages">
          <div className="bg-white p-6 rounded shadow-md">
            <CurrencyDollarIcon className="h-8 w-8 text-purple-500 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Employer By Package</h2>
            <p className="text-3xl font-bold text-purple-500">
              {creditData.totalCreditLeft}
            </p>
          </div>
        </Link>
      </div>

      {/* Shortlisted Candidates */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
        <Link to="/viewshortlistedcandidates">
          <div className="bg-white p-6 rounded shadow-md">
            <UsersIcon className="h-8 w-8 text-orange-500 mb-2" />
            <h2 className="text-xl font-semibold mb-2">Shortlisted Candidates</h2>
            <p className="text-3xl font-bold text-orange-500">
              {creditData.shortlistedCandidates}
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
