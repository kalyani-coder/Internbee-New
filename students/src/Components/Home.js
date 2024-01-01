import React, { useState, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock, FaMobile, FaPalette, FaCode, FaChartBar,
    FaUsers, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin, FaInstagram
} from 'react-icons/fa';

import Footer from '../Components/Footer';


const RightArrow = ({ onClick }) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
        {/* You can customize the right arrow icon here */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
    </div>
);

const LeftArrow = ({ onClick }) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
        {/* You can customize the left arrow icon here */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
    </div>
);

const Home = () => {
    const navigate = useNavigate();
    const companiesRef = useRef(null);
    const internshipsRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const handleLoginClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.bottom + window.scrollY,
            left: buttonRect.left + window.scrollX,
        });
        setShowDropdown(!showDropdown);
        setSelectedUserType('login');
    };

    const handleRegisterClick = (event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setDropdownPosition({
            top: buttonRect.bottom + window.scrollY,
            left: buttonRect.left + window.scrollX,
        });
        setShowDropdown(!showDropdown);
        setSelectedUserType('register');
    };

    const handleUserTypeSelect = (userType) => {
        setShowDropdown(false);

        if (userType === 'employer') {
            // Provide different links for employer
            if (selectedUserType === 'login') {
                navigate('/employer-login');
            } else if (selectedUserType === 'register') {
                navigate('/employer-register');
            }
        } else if (userType === 'student') {
            // Provide different links for the student in login and register buttons
            if (selectedUserType === 'login') {
                navigate('/Signin');
            } else if (selectedUserType === 'register') {
                navigate('/Registration');
            }
        }
    };




    const handleCompaniesClick = () => {
        if (companiesRef.current) {
            companiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInternshipsClick = () => {
        if (internshipsRef.current) {
            internshipsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const Internship = () => {
        navigate('/Internship');
    };

    // Dummy data for companies
    const companies = [
        {
            id: 1,
            name: 'Accenture',
            logo: 'Accenture-logo.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            name: 'Tata Consultancy Service',
            logo: 'tata.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            name: 'Tata Consultancy Service',
            logo: 'tata.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            name: 'Tata Consultancy Service',
            logo: 'tata.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 5,
            name: 'Tata Consultancy Service',
            logo: 'tata.jpg',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // Add more companies as needed
    ];

    const internships = [

        {
            id: 1,
            companyName: 'Tata Consultancy Service',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 1,
            companyName: 'Tata Consultancy Service',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 3,
            companyName: 'dhsbdb',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
    ];

    const yourCardArray = [
        {
            icons: FaMobile,
            role: 'Mobile development',
            jobs: 200
        },
        {
            icons: FaCode,
            role: 'Web development',
            jobs: 50
        },
        {
            icons: FaPalette,
            role: 'Graphics Design',
            jobs: 100
        },
        {
            icons: FaUsers,
            role: 'Human Resource Management',
            jobs: 150
        },
        {
            icons: FaChartBar,
            role: 'Business Development',
            jobs: 40
        },

    ]

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        draggable: false,
    };
    const socialIcons = [
        <FaFacebook key="facebook" />,
        <FaTwitter key="twitter" />,
        <FaLinkedin key="linkedin" />,
        <FaInstagram key="instagram" />,
    ];

    const navbarContent = [
        { label: 'About Us', link: '/about-us' },
        { label: 'Contact', link: '/contact' },
        { label: 'FAQ', link: '/faq' },
    ];

    const rolesContent = yourCardArray.map(card => card.role);

    const locationContent = ['New York', 'San Francisco', 'London', 'Tokyo'];


    return (
        <>
            <div className="mb-10">
                <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">
                    {/* <div className=" p-6 flex items-center justify-between  border shadow-xl"> */}
                    <div className="flex items-center space-x-2">
                        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                        <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                    </div>

                    <div className="items-center space-x-6">
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleCompaniesClick}>Companies</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleInternshipsClick}>Internships</a>
                    </div>

                    <div className="flex items-center space-x-6 mr-10"
                    >

                        <button
                            className="px-6 py-2 text-xl font-bold border rounded-md focus:outline-none"
                            onClick={handleLoginClick}

                        >
                            Login
                        </button>

                        <button
                            className="px-6 py-2 text-xl font-bold border rounded-md bg-yellow-300 focus:outline-none"
                            onClick={handleRegisterClick}

                        >
                            Register
                        </button>

                        {/* Dropdown for employer and student */}
                        {showDropdown && (
                            <div
                                className="absolute w-36 bg-white border rounded-md shadow-md  ml-6"
                                style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                            >
                                <div
                                    className="cursor-pointer border-b border-gray-700 py-4 flex flex-col items-center"
                                    onClick={() => handleUserTypeSelect('employer')}
                                >
                                    Employer
                                </div>
                                <div
                                    className="cursor-pointer flex flex-col items-center py-4"
                                    onClick={() => handleUserTypeSelect('student')}
                                >
                                    Student
                                </div>
                            </div>
                        )}
                        {/* </div> */}
                    </div>
                </div>

                <div className='mt-80 mb-10 text-4xl font-bold flex flex-col items-center'>
                    <h1>Search Your Dream Job here</h1>
                </div>

                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Enter skills/designations/companies"
                        className="h-24 w-full mx-20 rounded-full border border-gray-800 border-radius-2 pl-8 pr-16"
                    />
                    <button className="absolute mr-32 right-0 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2">
                        Search
                    </button>
                </div>
                <div ref={companiesRef}>
                    <div className='mt-40 mb-10 text-4xl font-bold flex flex-col items-center '>
                        <h1>Top Companies hiring now</h1>
                    </div>
                    <Slider {...settings}>
                        {companies.map(company => (
                            <div key={company.id} className="m-4 p-4 bg-white rounded-lg shadow-md max-w-sm">
                                <img src={`./${company.logo}`} alt={`Logo of ${company.name}`} className="w-16 h-16 mx-auto mb-4" />
                                <h2 className="text-xl font-bold">{company.name}</h2>
                                <p className="text-gray-600">{company.description}</p>
                                <button className="mt-4 bg-blue-700 hover:bg-yellow-300 text-black rounded-md px-4 py-2" onClick={Internship}>
                                    View Internship
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div ref={internshipsRef}>
                    <div className='mt-20 mb-10 text-4xl font-bold flex flex-col items-center'>
                        <h1>Expolre Internships Opportunity</h1>
                    </div>
                    <div className="flex flex-col items-center ">
                        {internships.map(internship => (
                            <div key={internship.id} className="card  w-1/2 m-6 rounded-md flex flex-grow justify-between items-center bg-white  shadow-md overflow-hidden">
                                <div className="flex-grow px-6 py-4">

                                    <h2 className="card-title text-2xl font-semibold text-gray-800">{internship.position}</h2>
                                    <p className="card-company text-xl text-gray-700">{internship.companyName}</p>

                                    <div className="flex justify-between items-center my-4">

                                        <div className="flex items-center">
                                            <FaCalendar className="mr-2" />
                                            <p className="card-company text-xl text-gray-700">{internship.duration}</p>
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
                                        {`We are seeking a talented and driven ${internship.companyName} with a solid skills ...`}
                                    </p>
                                    <p className="card-skills text-base text-gray-700">Skills: {internship.skillsRequired.join(', ')}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
                <div className="mt-10 flex justify-center">
                    <button className="bg-blue-500 w-1/6 hover:bg-blue-700 text-white rounded-md px-6 py-3" onClick={Internship}>
                        View All
                    </button>
                </div>
                <div className='bg-slate-100'>
                    <div className="mt-20 mb-10 text-4xl font-bold flex flex-col items-center">
                        <h1 className='my-10'>Explore Various Types of Internships</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-60 ">
                        {yourCardArray.map(card => (
                            <div key={card.id} className="h-36 w-64 bg-white rounded-md shadow-md overflow-hidden p-4 mb-5" onClick={Internship}>
                                {/* Your card content goes here */}
                                {card.icons && React.createElement(card.icons, { className: 'text-4xl mb-2' })}
                                <h1>{card.role}</h1>
                                <div className='flex justify-between mt-4'>
                                    <h1>{card.jobs}</h1>
                                    <FaGreaterThan />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />

        </>
    );
};
export default Home;
