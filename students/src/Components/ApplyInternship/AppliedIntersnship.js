// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Internal_Navbar from "../Internal_Navbar";
import { Link } from "react-router-dom";

// Define your component
const AppliedInternship = () => {
  // State to hold the list of applied internships
  const [appliedInternships, setAppliedInternships] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all"); // Default to 'all'
  const [filteredInternships, setFilteredInternships] = useState([]); // State to hold the filtered internships
  const [enquiryValues, setEnquiryValues] = useState({});
  const [Loading, setLoading] = useState(false);
  // Get intern ID from local storage
  const internId = localStorage.getItem("userId");

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    setLoading(true);
    // Make a GET request to the API endpoint with the intern ID as a query parameter
    axios
      .get(
        `https://internbee-backend-apis.onrender.com/api/applyInternship/InternId/${internId}`
      )
      .then((response) => {
        // Update state with the fetched data
        setAppliedInternships(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [internId]); // Run effect whenever internId changes

  // useEffect to update filteredInternships when selectedStatus changes
  useEffect(() => {
    if (selectedStatus === "all") {
      // If 'all' is selected, show all internships
      setFilteredInternships(appliedInternships);
    } else {
      // Filter internships based on the selected status
      const filtered = appliedInternships.filter(
        (internship) => internship.status === selectedStatus
      );
      setFilteredInternships(filtered);
    }
  }, [selectedStatus, appliedInternships]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleEnquiry = async (internship) => {
    try {
      const enquiryData = {
        StudentName: internship.InternName,
        StudentId: internship.InternId,
        StudentEmail: internship.InternEmail,
        EmployerId: internship.empId,
        postId: internship.postId,
        Enquiry: enquiryValues[internship._id] || "",
        EnquiryStatus: "pending",
        EnquiryReply: "",
        StudentPhone: internship.InternNumber,
      };
      const res = await axios.post(
        "https://internbee-backend-apis.onrender.com/api/enquiry/",
        enquiryData
      );
      console.log(res.data);
      alert("Enquiry sent successfully");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        // Handle the case where an existing enquiry is found
        alert("Enquiry Already Exist");
        console.error("Enquiry already exists:", error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  // Render the list of applied internships
  return (
    <div>
      <Internal_Navbar />

      <div className="mt-32">
        <div>
          <div className="flex justify-around mt-5">
            {Loading && (
              <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Applied Internships
              </h2>
            </div>
            <div>
              <Link to={"/studentEnquiry"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Enquriy
                </button>
              </Link>
            </div>
            <div className="mb-4">
              <label className="mr-2">Sort by Status:</label>
              <select
                onChange={handleStatusChange}
                value={selectedStatus}
                className="p-2"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredInternships.map((internship) => (
              <div
                key={internship._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
              >
                <div className="border p-6 rounded-md">
                  <p className="text-lg mb-2 font-semibold">
                    Job Title: {internship.job_Title}
                  </p>
                  <p>Status: {internship.status}</p>
                  <p>End Date: {internship.end_Date}</p>
                  <p>Company: {internship.empName}</p>
                  <p>Location: {internship.location}</p>
                  <p>Job Description: {internship.job_Description}</p>
                  <p>Position: {internship.position}</p>
                  <p>Skills: {internship.skills}</p>
                  <p>Stipend: ${internship.stipend}</p>
                  <p>Applied Date: {internship.appliedDate}</p>
                  <hr className="my-4" />
                  {internship.status == "Shortlisted" && (
                    <div>
                      <div>
                        <textarea
                          name={`Enquiry_${internship._id}`}
                          value={enquiryValues[internship._id] || ""}
                          onChange={(e) => {
                            setEnquiryValues({
                              ...enquiryValues,
                              [internship._id]: e.target.value,
                            });
                          }}
                          placeholder="Enter your enquiry reply here..."
                          rows="4"
                          className="w-full p-2 border rounded-md"
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleEnquiry(internship)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                          Send Enquiry
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

// Export the component
export default AppliedInternship;
