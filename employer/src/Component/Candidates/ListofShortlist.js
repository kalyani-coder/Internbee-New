import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "../ResponsiveCss/ResponsiveCss.css";

export default function ListofShortlist() {
  const { id } = useParams();
  const [shortlistData, setShortlistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/applyInternship/shortlisted/${id}`
        );
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
      <div className="displayBlock flex">
        <div>
          <Sidebar />
        </div>
        <div className=" container mx-auto p-4">
          <h2 className="flex justify-center text-xl font-bold mb-3">
            Shortlisted Candidates
          </h2>
          <div className="tableList">
            {shortlistData ? (
              <table className=" table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Intern Name</th>

                    <th className="border px-4 py-2">Intern Email</th>
                    <th className="border px-4 py-2">Intern Number</th>

                    <th className="border px-4 py-2">Job Description</th>
                    <th className="border px-4 py-2">Position</th>
                    <th className="border px-4 py-2">Skills</th>
                    <th className="border px-4 py-2">Stipend</th>
                    <th className="border px-4 py-2">Job Title</th>
                    <th className="border px-4 py-2">Applied Date</th>
                  </tr>
                </thead>
                <tbody>
                  {shortlistData.map((shortlist) => (
                    <tr key={shortlist._id}>
                      <td className="border px-4 py-2">
                        {shortlist.InternName}
                      </td>

                      <td className="border px-4 py-2">
                        {shortlist.InternEmail}
                      </td>
                      <td className="border px-4 py-2">
                        {shortlist.InternNumber}
                      </td>

                      <td className="border px-4 py-2">
                        {shortlist.job_Description}
                      </td>
                      <td className="border px-4 py-2">{shortlist.position}</td>
                      <td className="border px-4 py-2">{shortlist.skills}</td>
                      <td className="border px-4 py-2">{shortlist.stipend}</td>
                      <td className="border px-4 py-2">
                        {shortlist.job_Title}
                      </td>
                      <td className="border px-4 py-2">
                        {shortlist.appliedDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
