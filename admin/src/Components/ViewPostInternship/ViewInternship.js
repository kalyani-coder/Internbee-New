import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '../ResponsiveCss/Responsive.css';


const ViewInternship = () => {
    const [internships, setInternships] = useState([]);
    const [candidateDetails, setCandidateDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/postinternship');
                const data = await response.json();
                setInternships(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    

    const handleViewMoreClick = (internship) => {
        openModal();
        // Set detailed information for the modal
        setCandidateDetails(internship);
    };

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className="displaycontent flex h-screen">
            <Sidebar />
            <div className="ml-10 mt-4">
                <div className="max-w-full p-4">
                    <h1 className="Heading text-3xl font-bold mb-4 mt-8">View Internship Details</h1>
                    <div className="tabless-container">
                        <div className="table-wrapper" style={{ height: '400px', overflow: 'auto' }}>
                            <table className="bless-containe w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Job Title</th>
                                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Location</th>
                                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Company Name</th>
                                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Employer Name</th>
                                        <th className="TableHeading py-4 px-6 border-b font-bold text-lg">View More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {internships.map((internship) => (
                                        <tr key={internship._id}>
                                            <td className="py-2 px-4 border-b text-lg">{internship.job_Title}</td>
                                            <td className="py-2 px-4 border-b text-lg">{internship.location}</td>
                                            <td className="py-2 px-4 border-b text-lg">{internship.company_Name}</td>
                                            <td className="py-2 px-4 border-b text-lg">{internship.empName}</td>
                                            <td>
                                                <button
                                                    className="text-blue-500 hover:text-blue-700 mr-2 text-lg"
                                                    onClick={() => handleViewMoreClick(internship)}
                                                >
                                                    View More
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 max-w-md w-full rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Student Details</h2>
                        {/* Display detailed information here */}
                        <div>
                            <label className="block mb-2">Employer Name: {candidateDetails.empName}</label><hr />
                            <label>Email: {candidateDetails.empEmail}</label><hr />
                            <label>empPhone: {candidateDetails.empPhone}</label><hr />
                            <label>job_Title: {candidateDetails.job_Title}</label><hr />
                            <label>location: {candidateDetails.location}</label><hr />
                            <label>company_Name: {candidateDetails.company_Name}</label><hr />
                            <label>start_Date: {candidateDetails.start_Date}</label><hr />
                            <label>end_Date: {candidateDetails.end_Date}</label><hr />
                            <label>job_Type: {candidateDetails.job_Type}</label><hr />
                            <label>skills: {candidateDetails.skills}</label><hr />
                            <label>position: {candidateDetails.position}</label><hr />
                            <label>stipend: {candidateDetails.stipend}</label><hr />
                          
                            {/* Add more labels for additional fields */}
                        </div>
                        <div className="flex justify-between mt-3">
                            <button
                                className="text-black bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-500"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />




        </>
    );
};

export default ViewInternship;
