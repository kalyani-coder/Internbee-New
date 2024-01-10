import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const JobList = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      applicant: "John Doe",
      type: "Full-time",
      status: "Active",
      createDate: "2023-01-10",
    },
    {
      id: 2,
      title: "Data Scientist",
      applicant: "Jane Smith",
      type: "Part-time",
      status: "Reject",
      createDate: "2023-01-15",
    },
    {
      id: 3,
      title: "Frontend Developer",
      applicant: "Alice Johnson",
      type: "Full-time",
      status: "Pending",
      createDate: "2023-02-05",
    },
    {
      id: 4,
      title: "Backend Developer",
      applicant: "Bob Williams",
      type: "Part-time",
      status: "Pending",
      createDate: "2023-02-10",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      applicant: "Eva Davis",
      type: "Contract",
      status: "Active",
      createDate: "2023-02-15",
    },
    {
      id: 6,
      title: "Data Analyst",
      applicant: "Charlie Brown",
      type: "Full-time",
      status: "Reject",
      createDate: "2023-02-20",
    },
    {
      id: 7,
      title: "Project Manager",
      applicant: "Grace Smith",
      type: "Contract",
      status: "Active",
      createDate: "2023-02-25",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  const handleAdd = () => {
    // Handle add logic
    console.log("Add button clicked");
  };

  const handleUpdate = (id) => {
    // Handle update logic
    console.log(`Update button clicked for job with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete button clicked for job with ID: ${id}`);
  };

  const handleSearch = () => {
    // Filter jobs based on searchTerm and filterTitle
    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterTitle === "" || job.type === filterTitle)
    );

    // Set the filtered jobs to the state
    setJobs(filteredJobs);
  };

  const handleShowAll = () => {
    // Reset the jobs to show all
     // Generate new job data
     setJobs([
      {
        id: 1,
        title: "Software Engineer",
        applicant: "John Doe",
        type: "Full-time",
        status: "Active",
        createDate: "2023-01-10",
      },
      {
        id: 2,
        title: "Data Scientist",
        applicant: "Jane Smith",
        type: "Part-time",
        status: "Active",
        createDate: "2023-01-15",
      },
      {
        id: 3,
        title: "Frontend Developer",
        applicant: "Alice Johnson",
        type: "Full-time",
        status: "Active",
        createDate: "2023-02-05",
      },
      {
        id: 4,
        title: "Backend Developer",
        applicant: "Bob Williams",
        type: "Part-time",
        status: "Reject",
        createDate: "2023-02-10",
      },
      {
        id: 5,
        title: "UI/UX Designer",
        applicant: "Eva Davis",
        type: "Contract",
        status: "Active",
        createDate: "2023-02-15",
      },
      {
        id: 6,
        title: "Data Analyst",
        applicant: "Charlie Brown",
        type: "Full-time",
        status: "Active",
        createDate: "2023-02-20",
      },
      {
        id: 7,
        srno: 7,
        title: "Project Manager",
        applicant: "Grace Smith",
        type: "Contract",
        status: "reject",
        createDate: "2023-02-25",
      },
    ]);
  };
  
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />

        <div className="ml-10 mt-4">
          <div className="max-w-full p-4">
            <h1 className="text-3xl font-bold mb-4 mt-8">Job List</h1>

            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Search by Job Title"
                className="border border-gray-300 p-2 mr-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="border border-gray-300 p-2 mr-2"
                value={filterTitle}
                onChange={(e) => setFilterTitle(e.target.value)}
              >
                <option value="">All Titles</option>
                {/* Add options based on your job titles */}
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                {/* Add more options as needed */}
              </select>
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 border border-black rounded inline-flex items-center mr-2"
                onClick={handleSearch}
              >
                <FaSearch className="mr-2" />
                Search
              </button>
              <button
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 border border-black rounded inline-flex items-center"
                onClick={handleShowAll}
              >
                <FaArrowAltCircleRight className="mr-2" />
                Show All Jobs
              </button>
            </div>

            <table className="table-conatiner w-full bg-white border border-gray-300">
              <thead>
                <tr>
                 <th className="py-4 px-6 border-b font-bold text-lg">Sr No.</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Job Title</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Job Applicant</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Job Type</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Status</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Create Date</th>
                  <th className="py-4 px-6 border-b font-bold text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td className="py-2 px-4 border-b text-lg">{job.id}</td>
                    <td className="py-2 px-4 border-b text-lg">{job.title}</td>
                    <td className="py-2 px-4 border-b text-lg">{job.applicant}</td>
                    <td className="py-2 px-4 border-b text-lg">{job.type}</td>
                    <td className="py-2 px-4 border-b text-lg">{job.status}</td>
                    <td className="py-2 px-4 border-b text-lg">{job.createDate}</td>
                    <td className="py-2 px-4 border-b text-lg">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleUpdate(job.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(job.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* <button
              className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 border border-black rounded inline-flex items-center"
              onClick={handleAdd}
            >
              <FaPlus className="mr-2" />
              Add Job
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobList;
