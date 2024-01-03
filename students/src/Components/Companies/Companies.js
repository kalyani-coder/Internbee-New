import React, { useState } from 'react';
import Navbar from '../Navbar';

const Companies = () => {
    // Sample data for the list of registered companies
    const registeredCompanies = [
        { id: 1, name: 'Company A', industry: 'Technology', location: 'City A, Country A', address: '123 Main St, City A, Country A', website: 'https://www.companyA.com' },
        { id: 2, name: 'Company B', industry: 'Finance', location: 'City B, Country B', address: '456 Main St, City B, Country B', website: 'https://www.companyB.com' },
        { id: 3, name: 'Company C', industry: 'Healthcare', location: 'City C, Country C', address: '789 Main St, City C, Country C', website: 'https://www.companyC.com' },
        // Add more company entries as needed
    ];

    // State to track the active company for detailed view
    const [activeCompany, setActiveCompany] = useState(null);

    // Function to handle "View More" button click
    const handleViewMore = (companyId) => {
        setActiveCompany(activeCompany === companyId ? null : companyId);
    };

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Registered Companies</h1>

                {/* List of Companies */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {registeredCompanies.map((company) => (
                        <li
                            key={company.id}
                            style={{
                                backgroundImage: `url('/path-to-back-image.jpg')`, // Add your background image path
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className={`bg-white shadow-lg p-6 rounded-lg transform transition-transform ${activeCompany === company.id ? 'rotate-y-180' : 'hover:scale-105'
                                }`}
                        >
                            <h2 className="text-xl font-bold mb-2 text-blue-700">{company.name}</h2>
                            <p className="text-gray-600 mb-2">{company.industry}</p>
                            <p className="text-gray-600">{company.location}</p>
                            {/* View More Button */}
                            <button
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                onClick={() => handleViewMore(company.id)}
                            >
                                {activeCompany === company.id ? 'View Less' : 'View More'}
                            </button>
                            {/* Detailed View */}
                            {activeCompany === company.id && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                                    <p className="text-gray-600 mb-2">{company.industry}</p>
                                    <p className="text-gray-600 mb-2">{company.address}</p>
                                    <p className="text-blue-500">
                                        <a href={company.website} target="_blank" rel="noopener noreferrer">
                                            {company.website}
                                        </a>
                                    </p>
                                    {/* View Less Button */}
                                    <button
                                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                                        onClick={() => handleViewMore(company.id)}
                                    >
                                        View Less
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Companies;
