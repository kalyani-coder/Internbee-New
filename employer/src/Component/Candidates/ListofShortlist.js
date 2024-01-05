import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import Sidebar from "../Sidebar/Sidebar";

export default function ListofShortlist() {
  const { id } = useParams();
  const [shortlistData, setShortlistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/applyInternship/shortlisted/${id}`);
        setShortlistData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex">

        <div>
          <Sidebar />
        </div>

        <div className="container mx-auto p-4">
          {shortlistData ? (
            shortlistData.map((shortlist) => (
              <div key={shortlist._id} className="bg-white shadow-md p-6 my-4 rounded-md md:w-1/2 lg:w-1/3 mx-auto">
                <h1 className="text-2xl font-bold mb-4">{shortlist.InternName}</h1>
                <p><span className="font-semibold">Status:</span> {shortlist.status}</p>
                <p><span className="font-semibold">Intern Email:</span> {shortlist.InternEmail}</p>
                <p><span className="font-semibold">Intern Number:</span> {shortlist.InternNumber}</p>
                <p><span className="font-semibold">Employer Name:</span> {shortlist.empName}</p>
                <p><span className="font-semibold">Location:</span> {shortlist.location}</p>
                <p><span className="font-semibold">Job Description:</span> {shortlist.job_Description}</p>
                <p><span className="font-semibold">Position:</span> {shortlist.position}</p>
                <p><span className="font-semibold">Skills:</span> {shortlist.skills}</p>
                <p><span className="font-semibold">Stipend:</span> {shortlist.stipend}</p>
                <p><span className="font-semibold">Job Title:</span> {shortlist.job_Title}</p>
                <p><span className="font-semibold">Applied Date:</span> {shortlist.appliedDate}</p>
                {/* Add more details as needed */}
              </div>
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>

      </div>
      <Footer />
    </>
  );
}
