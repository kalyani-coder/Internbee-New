// Import necessary modules and components
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaUser, FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Footer from '../Components/Footer';

// Define the Internship component
const Internship = () => {
    // Refs for scrolling
    const companiesRef = useRef(null);
    const internshipsRef = useRef(null);

    // React Router's navigate function
    const navigate = useNavigate();

    // State for profile dropdown and search
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [mainSearchQuery, setMainSearchQuery] = useState('');
    const [filteredInternships, setFilteredInternships] = useState([]);
    const [allInternships, setAllInternships] = useState([]);

    // Dummy data for internships
    const dummyInternships = [
        {
            id: 1,
            companyName: 'Tata Consultancy Service',
            position: 'Frontend Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 2,
            companyName: 'ajsg',
            position: 'Frontend Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['HTML', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 3,
            companyName: 'Tata Consultancy Service',
            position: 'Frontend Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        // Add more internship objects as needed
    ];

    // useEffect to set all internships initially
    useEffect(() => {
        setAllInternships(dummyInternships);
        setFilteredInternships(dummyInternships);
    }, []);

    // Function to handle profile icon click
    const handleProfileIconClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    // Function to navigate to the user's profile
    const handleViewProfile = () => {
        navigate('/Profile');
    };

    // Function to handle user logout
    const handleLogout = () => {
        navigate('/Signin');
    };

    // Function to scroll to the companies section
    const handleCompaniesClick = () => {
        if (companiesRef.current) {
            companiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to the internships section
    const handleInternshipsClick = () => {
        if (internshipsRef.current) {
            internshipsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle the Navbar search logic
    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        // Filter internships based on company name, position, or skills
        const filtered = allInternships.filter(
            (internship) =>
                internship.companyName.toLowerCase().includes(lowerCaseQuery) ||
                internship.position.toLowerCase().includes(lowerCaseQuery) ||
                internship.skillsRequired.some((skill) => skill.toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredInternships(filtered);
    };

    // Function to handle the main search logic
    const handleMainSearch = () => {
        const lowerCaseQuery = mainSearchQuery.toLowerCase();
        // Filter internships based on company name, position, or skills
        const filtered = allInternships.filter(
            (internship) =>
                internship.companyName.toLowerCase().includes(lowerCaseQuery) ||
                internship.position.toLowerCase().includes(lowerCaseQuery) ||
                internship.skillsRequired.some((skill) => skill.toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredInternships(filtered);
    };

    // Function to navigate to the Home page
    const handleHome = () => {
        navigate('/Home1');
    };

    // JSX structure for the Internship component
    return (
        <>
            {/* Navbar */}
            <div className="bg-amber-300 navbar-container fixed top-0 left-0 w-full z-50 shadow-md p-4 flex items-center justify-between border">
                {/* Logo and brand */}
                <div className="flex items-center space-x-2">
                    <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold">
                        Interns <span className="text-4xl font-bold text-amber-300">Bee</span>
                    </h1>
                </div>

                {/* Navigation links */}
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleHome}>
                        Home
                    </a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleCompaniesClick}>
                        Companies
                    </a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleInternshipsClick}>
                        Internships
                    </a>
                </div>

                {/* Search Bar */}
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded-md mr-2 border"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* Navbar Search button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2"
                        onClick={handleSearch}
                    >
                        Navbar Search
                    </button>
                </div>

                {/* Notifications and User Profile */}
                <div className="flex items-center space-x-4 relative">
                    <div>
                        <IoNotificationsOutline className="mr-4 text-4xl" />
                    </div>
                    <div
                        className="cursor-pointer"
                        onMouseEnter={() => setShowProfileDropdown(true)}
                        onClick={handleProfileIconClick}
                    >
                        <FaUser className="mr-4 text-4xl" />
                        {/* Profile dropdown */}
                        {showProfileDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                                <div
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleViewProfile}
                                >
                                    View Profile
                                </div>
                                <div
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="bg-slate-100 mt-20">
                <div className="ml-20 mb-10 text-2xl font-bold flex flex-col">
                    <h1 className="mt-20">Search Your Dream Internship here</h1>
                </div>
                <div className="relative flex items-center gap-2 mb-20">
                    {/* Input for main search query */}
                    <input
                        type="text"
                        placeholder="Enter skills/designations/companies"
                        value={mainSearchQuery}
                        onChange={(e) => setMainSearchQuery(e.target.value)}
                        className="h-16 w-1/2 mx-20 rounded-full border border-gray-500 focus:border-gray-400 pl-8 pr-16 mb-20"
                    />
                    {/* Main Search button */}
                    <button
                        className="absolute right-0 mr-96 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2 mb-20"
                        onClick={handleMainSearch}
                    >
                        Main Search
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex">
                <div className="w-1/4 bg-gray-100 p-6 ml-10 h-1/3">
                    <h2 className="text-lg font-semibold mb-4">All Filters</h2>
                    {/* Profile filter */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Profile</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">Web development</option>
                            <option value="">Mobile Development</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Location filter */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Location</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">Pune</option>
                            <option value="">Bangalore</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Stipend filter */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Stipend</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">Any</option>
                            <option value="">1000-5000</option>
                            <option value="">5000-10000</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Duration filter */}
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Duration</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">1 month</option>
                            <option value="">2 months</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Other filters */}
                    <div>
                        <h3 className="text-md font-semibold mb-2">Other Filters</h3>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Part-time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Full-time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Work from Home</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Internship for women</span>
                        </label>
                    </div>
                </div>

                {/* Display Internships Section */}
                <div className="flex flex-col items-center">
                    {/* Map through the filtered internships (or all internships if not filtered) */}
                    {filteredInternships.length > 0 ? (
                        filteredInternships.map((internship) => (
                            <div key={internship.id} className="ml-40 card w-full m-6 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden">
                                <div className="flex-grow px-6 py-4">
                                    {/* Internship details */}
                                    <h2 className="card-title text-2xl font-semibold text-gray-800">{internship.position}</h2>
                                    <p className="card-company text-xl text-gray-700">{internship.companyName}</p>
                                    <div className="flex justify-between items-center my-4">
                                        <div className="flex items-center">
                                            <FaCalendar className="mr-2" />
                                            <p className="card-company text-xl text-gray-700">{internship.duration} month(s)</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaMoneyBill className="mr-2" />
                                            <p className="card-location text-xl text-gray-700">&#x20B9;{internship.stipend}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaMapMarkerAlt className="mr-2" />
                                            <p className="card-duration text-xl text-gray-700">{internship.location}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <FaRegClock className="mr-2" />
                                            <p className="card-duration text-xl text-gray-700">{internship.deadline}</p>
                                        </div>
                                    </div>
                                    <p className="card-description text-base text-gray-700 my-4">
                                        {`We are seeking a talented and driven ${internship.companyName} with solid skills ...`}
                                    </p>
                                    <p className="card-skills text-base text-gray-700">Skills: {internship.skillsRequired.join(', ')}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Display a message if no internships are found
                        <p>No internships found.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

// Export the Internship component
export default Internship;
