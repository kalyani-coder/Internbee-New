import React, { useState, useEffect } from "react";
import EmployerSidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";

const EmployerSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all job posts
    fetchData();
  }, []);

  const fetchData = () => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:8000/api/postinternship/userId/${userId}`)
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
    <div className="bg-gray-50">
      {" "}
      <div className="AllHomeMain">
        <div>
          {/* <NewNavBar/> */}
          <Navbar />
        </div>
        <div className="SideBarNHome flex">
          <Sidebar />
          {/* <NewSideBar/>/ */}
          <div className="PostJobCard flex w-full">
            {/* Posted Jobs Card */}
            <div className="MainJobCardDiv w-1/2 p-4 border border-gray-300 shadow-md mr-4 post-job-card-div">
              <h2 className="text-xl font-semibold mb-4">Posted Internship</h2>
              <div className="scrollable-jobs overflow-y-auto">
                {jobs.length === 0 ? (
                  <div>
                    <p className="text-black text-center text-sm">
                      No Internship posted yet.
                    </p>
                  </div>
                ) : (
                  <div>
                    {jobs.map((job) => (
                      <div
                        key={job._id}
                        className="mb-8 card w-100 card-component-posted-internship"
                      >
                        <div className="card-body p-4 rounded-md bg-amber-400">
                          <h3 className="text-xl font-semibold mb-2">
                            {job.job_Title}
                          </h3>
                          <p>Location: {job.location}</p>
                          <p>Company Name: {job.company_Name}</p>
                          <p>Job Type: {job.job_Type}</p>
                          <p>Duration: {job.position}</p>
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
            <div className=" PostInternshipCard w-1/2 bg-white p-4 border border-gray-300 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Post Internships</h2>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/internship-job-illustration_52683-49386.jpg?w=996&t=st=1659567001~exp=1659567601~hmac=86bb01b16a2dc99d4210425816e62bbac016dc26243b5d6d754fdbde45cc1593" // Replace with your image URL
                  alt="Post Internship"
                  className="mb-4 w-full h-96 object-contain"
                />
                <p className="text-black text-center text-sm">
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
      </div>
    </div>
  );
};

export default EmployerSection;
