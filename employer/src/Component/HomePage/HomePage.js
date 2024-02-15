import React, { useState, useEffect } from "react";
import EmployerSidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Home.css'

const EmployerSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all job posts
    fetchData();
  }, []);

  const fetchData = () => {
    const userId = localStorage.getItem("userId");

    fetch(`https://backend.internsbee.com/api/postinternship/userId/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        // Sort jobs array based on posting date in descending order
        const sortedJobs = data.sort(
          (a, b) => new Date(b.start_Date) - new Date(a.start_Date)
        );
        setJobs(sortedJobs);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  

  return (
    <>
      {" "}
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />

        <div className="flex w-full">
          {/* Posted Jobs Card */}
          <div className="w-1/2 p-4 border border-gray-300 shadow-md mr-4 post-job-card-div">
            <h2 className="text-xl font-semibold mb-4">Posted Internship</h2>
            <div className="scrollable-jobs max-h-96 overflow-y-auto">
              {jobs.length === 0 ? (
                <div>
                  <p className="text-black text-center">
                    No Internship posted yet.
                  </p>
                </div>
              ) : (
                <div>
                  {jobs.map((job) => (
                    <div key={job._id} className="mb-8 card w-50 card-component-posted-internship">
                      <div className="card-body p-4 rounded-md " style={{ backgroundColor: '#FFBD59' }}>
                        <h3 className="text-xl font-semibold mb-2">{job.job_Title}</h3>
                        <p>Location: {job.location}</p>
                        <p>Company Name: {job.company_Name}</p>
                        <p>Job Type: {job.job_Type}</p>
                        <p>Number of Positions: {job.position}</p>
                        <p>Skills: {job.skills}</p>
                        <p>Application start Date: {job.start_Date}</p>
                        <p>Application end Date: {job.end_Date}</p>
                        <p>Job Description: {job.job_Description}</p>
                        <p>Stipend: {job.stipend}</p>
                      </div>
                    </div>
                  ))}
                </div>




              )}
            </div>
          </div>

          {/* Post Free Jobs Card */}
          <div className="w-1/2 bg-white p-4 border border-gray-300 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Post Internships</h2>
            <div>
              <img
                src="https://www.debt.org/wp-content/uploads/2013/04/Student-Internship.jpg" // Replace with your image URL
                alt="Post Internship"
                className="mb-4 w-full h-96 object-contain"
              />
              <p className="text-black text-center">
                Post a new internship opportunity today!
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <Link to={"/PostInternship"}>
                <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 hover:text-amber-300">
                  Post Internship
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default EmployerSection;
