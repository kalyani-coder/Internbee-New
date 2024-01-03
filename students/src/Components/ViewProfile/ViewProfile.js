import React from 'react';
import HomeNav from '../HomeNav/HomeNav';


const ViewProfile = () => {
    // Sample data for personal details
    const personalDetails = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        birthdate: '1990-01-01',
        address: '123 Main St, Sample City, Sample District, Sample Country',
        currentAddress: '456 Current St, Current City, Current District, Current Country',
        contactNumber: '+123 456 7890',
    };

    // Sample data for education details
    const educationDetails = [
        {
            education: 'Bachelor of Science',
            school: 'University of Example',
            stream: 'Computer Science',
            passoutYear: '2012',
        },
        // Add more education entries as needed
    ];

    // Sample data for technical details
    const technicalDetails = {
        keySkills: ['JavaScript', 'React', 'Node.js'],
        languages: ['English', 'Spanish'],
        experience: '5 years',
        projects: [
            {
                projectName: 'Project 1',
                projectSummary: 'Summary of Project 1',
            },
            // Add more project entries as needed
        ],
    };

    // Sample data for resume
    const resumeDetails = {
        resumeFileName: 'Resume',
    };

    return (

        <>
            <div>
                <HomeNav />
            </div>

            <div className="container mx-auto p-4 bg-gray-100 mt-24">
                {/* Profile Picture and Name Section */}
                <section className="mb-8  flex items-center bg-white shadow-lg p-6 rounded-lg gap-16">
                    {/* Dummy Profile Picture */}
                    <img
                        src="/dummy-profile-image.jpg"
                        alt="Profile"
                        className="rounded-full w-20 h-20 mr-4 border-4 border-yellow-500"
                    />
                    {/* Name and Contact Details */}
                    <div className=''>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">
                            {personalDetails.firstName} {personalDetails.lastName}
                        </h2>
                        <p className="text-gray-600">{personalDetails.address}</p>
                        <p className="text-gray-600">Contact: {personalDetails.contactNumber}</p>
                    </div>
                </section>

                {/* Resume Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Resume</h2>
                    <div className="flex items-center">
                        <p className="text-left text-gray-700">{resumeDetails.resumeFileName}</p>
                        {/* Add the file upload button here */}
                        <input type="file" className="ml-4" />
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Skills</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {technicalDetails.keySkills.map((skill, index) => (
                            <div key={index} className="text-left">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Experience</h2>
                    {/* Add experience details here */}
                    <p className="text-left text-gray-700">Experience: {technicalDetails.experience}</p>
                </section>

                {/* Education Details Section */}
                <section className="mb-8  bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Education Details</h2>
                    {educationDetails.map((education, index) => (
                        <div key={index} className="mb-4 text-left">
                            <p className="font-bold">{education.education}</p>
                            <p>School/Institute: {education.school}</p>
                            <p>Stream: {education.stream}</p>
                            <p>Passout Year: {education.passoutYear}</p>
                        </div>
                    ))}
                </section>

                {/* Personal Details Section */}
                <section className=" bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-left text-gray-800">Personal Details</h2>
                    <p className="text-left text-gray-700">Birthdate: {personalDetails.birthdate}</p>
                    <p className="text-left text-gray-700">Current Address: {personalDetails.currentAddress}</p>
                </section>
            </div>

        </>
    );
};

export default ViewProfile;
