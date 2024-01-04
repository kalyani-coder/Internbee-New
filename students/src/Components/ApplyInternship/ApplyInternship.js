// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaRegClock, FaMoneyBill, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Navbar";

const ApplyInternship = () => {
    const { internshipId } = useParams();
    const [internship, setInternship] = useState(null);
    useEffect(() => {
        const fetchInternshipData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/postinternship/${internshipId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                }
                const data = await response.json();
                // console.log("Fetched Internship Data:", data);

                setInternship(data);
            } catch (error) {
                console.error("Error fetching internship data:", error);
            }
        };

        fetchInternshipData();
    }, [internshipId]);


    // If internship data is still being fetched, you can show a loading indicator
    if (!internship) {
        return <p>Loading...</p>;
    }

    return (

        <>

            <div>
                <Navbar />
            </div>
            <div className="mx-auto max-w-2xl p-6">
                <div className="card w-full m-6 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden  mt-10">
                    <div className="flex-grow px-6 py-4">
                        <h2 className="card-title text-2xl font-semibold text-gray-800">
                            {internship.job_Title}
                        </h2>
                        <p className="card-company text-xl text-gray-700">
                            Company Name: {internship.empName}
                        </p>
                        <div className="flex justify-between items-center my-4">
                            <div className="flex items-center">
                                <FaRegClock className="mr-2" />
                                <p className="card-company text-xl text-gray-700">
                                    Start Date: {internship.start_Date}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaMoneyBill className="mr-2" />
                                <p className="card-location text-xl text-gray-700">
                                    &#x20B9;{internship.stipend}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <p className="card-duration text-xl text-gray-700">
                                    {internship.location}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaRegClock className="mr-2" />
                                <p className="card-duration text-xl text-gray-700">
                                    End Date: {internship.end_Date}
                                </p>
                            </div>
                        </div>
                        <p className="card-description text-base text-gray-700 my-4">
                            Job Type: {internship.job_Type}
                        </p>
                        <p className="card-description text-base text-gray-700 my-4">
                            {internship.job_Description}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="card-skills text-base text-gray-700">
                                Skills: {internship.skills}
                            </p>

                            <button className="bg-amber-300 text-black p-2 rounded-lg">
                                Apply Now
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ApplyInternship;