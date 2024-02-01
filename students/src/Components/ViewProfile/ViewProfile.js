import React, { useState, useEffect } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewProfile = () => {

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Retrieve user ID from local storage
        const userId = localStorage.getItem('userId');

        if (userId) {
            // Fetch user details from the API based on the user ID
            axios.get(`https://internbee-backend-apis.onrender.com/api/studentsdetails/userId/${userId}`)
                .then(response => {
                    setUserDetails(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, []);


    return (
        <>
            <div>
                <HomeNav />
            </div>

            <div className="container mx-auto p-4 bg-gray-100 mt-24">
                {/* Profile Picture and Name Section */}
                <div className='flex justify-between mb-8 align-middle bg-white shadow-lg  rounded-lg '>
                    <div>
                        <section className="mb-8  flex items-center gap-16">
                            {/* Display Profile Picture */}
                            <img
                                src={userDetails && userDetails.profile_pic ? userDetails.profile_pic : "/dummy-profile-image.jpg"}
                                alt="Profile"
                                className="rounded-full w-20 h-20 mr-4 border-4 border-yellow-500"
                            />
                            {/* Display Name and Contact Details */}
                            <div className=''>
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                                    {userDetails && `${userDetails.firstName} ${userDetails.lastName}`}
                                </h2>
                                <p className="text-gray-600">{userDetails && userDetails.currentaddress}</p>
                                <p className="text-gray-600">Contact: {userDetails && userDetails.contactNumber}</p>
                            </div>
                        </section>
                    </div>
                    <div className='items-center flex'>
                        <Link to="/freeplan">
                            <button className='border p-2'style={{ backgroundColor: '#FFBD59' }}>Get Package</button>
                        </Link>
                    </div>
                </div>
                {/* Resume Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Resume</h2>
                    <div className="flex items-center " style={{ display: "flex", justifyContent: 'space-between' }}>
                        <div>
                            <p className="text-left text-gray-700">
                                {/* Display the resume file name or a link to view the resume */}
                                {userDetails && userDetails.student_PDF && (
                                    <a href={userDetails.student_PDF} target="_blank" rel="noopener noreferrer">
                                        View Resume
                                    </a>
                                )}
                            </p>
                        </div>
                        {/* Add the file upload button here */}

                        <div>
                            <p>Upload New Resume</p>
                            <input type="file" className="ml-4" />
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Skills</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {/* Check if userDetails and keySkills are available before mapping */}
                        {userDetails && userDetails.keySkills && typeof userDetails.keySkills === 'string' ? (
                            userDetails.keySkills.split(',').map((skill, index) => (
                                <div key={index} className="text-gray-700">
                                    {skill.trim()} {/* Trim to remove leading/trailing spaces */}
                                </div>
                            ))
                        ) : (
                            <p>No skills available</p>
                        )}
                    </div>
                </section>


                {/* Experience Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Experience</h2>
                    <div className="text-gray-700">
                        {/* Display the experience data */}
                        {userDetails && userDetails.experience ? (
                            <p>{userDetails.experience}</p>
                        ) : (
                            <p>No experience data available</p>
                        )}
                    </div>
                </section>
                {/* Education Details Section */}
                <section className="mb-8 bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Education Details</h2>
                    <div className="text-gray-700">
                        {/* Display the education details */}
                        {userDetails && userDetails.education ? (
                            <>
                                <p>Education Level: {userDetails.education}</p>
                                <p>Institute Name: {userDetails.instituteName}</p>
                                <p>Stream: {userDetails.stream}</p>
                                <p>Pass Out Year: {userDetails.passOutYear}</p>
                            </>
                        ) : (
                            <p>No education details available</p>
                        )}
                    </div>
                </section>



                {/* Personal Details Section */}
                <section className="bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Projects Details</h2>
                    {userDetails && userDetails.projectName ? (
                        <>
                            <p>Project Name: {userDetails.projectName}</p>
                            <p className='fw-bold'>Project Summary: {userDetails.projectSummary}</p>

                        </>
                    ) : (
                        <p>No education details available</p>
                    )}
                </section>

                <section className="bg-white shadow-lg p-6 rounded-lg mt-5">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Personal Details</h2>
                    {userDetails && userDetails.languages ? (
                        <>
                            <p>Languages: {userDetails.languages}</p>
                            <p>Currentaddress: {userDetails.currentaddress}</p>
                            <p>City: {userDetails.city}</p>
                            <p>District: {userDetails.district}</p>


                        </>
                    ) : (
                        <p>No education details available</p>
                    )}
                </section>

            </div>
        </>
    );
};

export default ViewProfile;
