import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '../ResponsiveCss/Responsive.css';


const ViewInternship = () => {
    const [internships, setInternships] = useState([]);
    const [selectedInternship, setselectedInternship] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://backend.internsbee.com/api/postinternship');
                const data = await response.json();
                setInternships(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleViewMore = (candidate) => {
        setselectedInternship(candidate);
    };

    const handleClosePopup = () => {
        setselectedInternship(null);
    };
    return (
        <>
        <Navbar />
        <div className="displaycontent flex h-screen">
            <Sidebar />
            <div className="ml-10 mt-4">
                <div className="max-w-full p-4">
                    <h1 className="Heading text-3xl font-bold mb-4 mt-8">View Internship Details</h1>
<div className='tabless-container'>
                    <table className="bless-containe w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Job Title</th>
                                <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Location</th>
                                <th className="TableHeading py-4 px-6 border-b font-bold text-lg">Company Name</th>
                                <th className="TableHeading py-4 px-6 border-b font-bold text-lg">EmployerName</th>
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
                                            onClick={() => handleViewMore(internship)}
                                            className="bg-yellow-500 text-dark py-2 px-4 rounded hover:bg-amber-300 focus:outline-none focus:shadow-outline-green active:bg-green-800"
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
        <Footer />



        {selectedInternship && (
            <div className="modal-overlay">
                <div className="modal">
                    <span className="close cursor-pointer" onClick={handleClosePopup}>
                        &times;
                    </span>
                    <div className="modal-content">
                        <h2 className="text-2xl font-bold mb-4">Employer Details</h2><hr />
                        <h5 className='' style={{ fontWeight: "bold" }}>{`Company Name: ${selectedInternship.company_Name}`}</h5><hr />

                        <div className='popup-box' style={{ fontSize: '18px' }}>
                            <p>{`Name: ${selectedInternship.empName}`}</p><hr />
                            <p>
                                Email:{" "}
                                <a href={`mailto:${selectedInternship.empEmail}`} target="_blank" rel="noopener noreferrer">
                                    {selectedInternship.empEmail}
                                </a>
                            </p><hr />
                            <p>{`Number: ${selectedInternship.empPhone}`}</p><hr />

                            <p>{`Job Title: ${selectedInternship.job_Title}`}</p><hr />
                            <p>{`Description: ${selectedInternship.job_Description}`}</p><hr />
                            <p>{`Location: ${selectedInternship.location}`}</p><hr />
                            <p>{`Start Date: ${selectedInternship.start_Date}`}</p><hr />
                            <p>{`End Date: ${selectedInternship.end_Date}`}</p><hr />
                            <p>{`Job Type: ${selectedInternship.job_Type}`}</p><hr />
                            <p>{`Key Skills: ${selectedInternship.skills}`}</p><hr />
                            <p>{`Position: ${selectedInternship.position}`}</p><hr />
                            <p>{`Job description: ${selectedInternship.job_Description}`}</p><hr />
                            <p>{`Stipend: ${selectedInternship.stipend}`}</p><hr />
                        </div>
                        {/* Add other details you want to display */}
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default ViewInternship;
