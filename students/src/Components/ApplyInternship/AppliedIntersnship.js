// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

// Define your component
const AppliedInternship = () => {
    // State to hold the list of applied internships
    const [appliedInternships, setAppliedInternships] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('all'); // Default to 'all'
    const [filteredInternships, setFilteredInternships] = useState([]); // State to hold the filtered internships

    // Get intern ID from local storage
    const internId = localStorage.getItem('userId');

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        // Make a GET request to the API endpoint with the intern ID as a query parameter
        axios.get(`http://localhost:8000/api/applyInternship/InternId/${internId}`)
            .then(response => {
                // Update state with the fetched data
                setAppliedInternships(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [internId]); // Run effect whenever internId changes

    // useEffect to update filteredInternships when selectedStatus changes
    useEffect(() => {
        if (selectedStatus === 'all') {
            // If 'all' is selected, show all internships
            setFilteredInternships(appliedInternships);
        } else {
            // Filter internships based on the selected status
            const filtered = appliedInternships.filter(internship => internship.status === selectedStatus);
            setFilteredInternships(filtered);
        }
    }, [selectedStatus, appliedInternships]);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    // Render the list of applied internships
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='mt-32'>
                <div>
                    <div className='flex justify-around'>
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">Applied Internships</h2>
                        </div>
                        <div className="mb-4">
                            <label className="mr-2">Sort by Status:</label>
                            <select onChange={handleStatusChange} value={selectedStatus} className="p-2">
                                <option value="all">All</option>
                                <option value="pending">Pending</option>
                                <option value="accepted">Accepted</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {filteredInternships.map(internship => (
                            <div key={internship._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
                                <div className="border p-6 rounded-md">
                                    <p className="text-lg mb-2 font-semibold">Job Title: {internship.job_Title}</p>
                                    <p>Status: {internship.status}</p>
                                    <p>End Date: {internship.end_Date}</p>
                                    <p>Company: {internship.empName}</p>
                                    <p>Location: {internship.location}</p>
                                    <p>Job Description: {internship.job_Description}</p>
                                    <p>Position: {internship.position}</p>
                                    <p>Skills: {internship.skills}</p>
                                    <p>Stipend: ${internship.stipend}</p>
                                    <p>Applied Date: {internship.appliedDate}</p>
                                    {/* Add more details as needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export the component
export default AppliedInternship;
