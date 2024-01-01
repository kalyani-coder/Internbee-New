import React, { useState, useRef , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';

import { IoNotificationsOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock, FaMobile, FaPalette, FaCode, FaChartBar,
    FaUsers, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaUser
} from 'react-icons/fa';


import Footer from '../Components/Footer';


const RightArrow = ({ onClick }) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
    </div>
);

const LeftArrow = ({ onClick }) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
    </div>
);

const Home1 = () => {
    const [internships, setInternships] = useState([]);
  
    const companiesRef = useRef(null);
    const internshipsRef = useRef(null);
    const navigate = useNavigate();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleProfileIconClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/postinternship/');
        if (response.ok) {
          const data = await response.json();
          setInternships(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleInternshipClick = (id) => {
    navigate(`/internship/${id}`);
  };

    const handleViewProfile = () => {

        navigate('/Profile')

    };

    const handleLogout = () => {

        navigate('/Signin')


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
        navigate('/Internship')
    }

    const handleResume = () => {
        navigate('/Resume');
    };
    const handleregistration = () => {
        navigate('/Registration');
    };
    const handleSignin = () => {
        navigate('/Signin');
    };

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

    // const internships = [
    //     {
    //         id: 1,
    //         companyName: 'Accenture',
    //         reviews: 4.5,
    //         experienceRequired: 2,
    //         stipend: 'Rs. 15,000 per month',
    //         location: 'Bangalore',
    //         skillsRequired: ['React', 'Node.js', 'MongoDB'],
    //         deadline: '2023-12-31',
    //     },
    //     {
    //         id: 2,
    //         companyName: 'Tata Consultancy Service',
    //         reviews: 4.2,
    //         experienceRequired: 1,
    //         stipend: 'Rs. 12,000 per month',
    //         location: 'Mumbai',
    //         skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
    //         deadline: '2023-12-20',
    //     },
    //     // Add more internships as needed
    // ];
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

    ];

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        draggable: false,
    };


    const Internshipp = () => {
        navigate('/Internship');
    };


    return (
        <>
            <div className="mb-10">
                <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">
                    <div className="flex items-center space-x-2">
                        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                        <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleCompaniesClick}>Companies</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={Internship}>Internships</a>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-md mr-2 border"
                        />
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <div className="">
                            <IoNotificationsOutline className="mr-4  text-4xl" />
                        </div>
                        <div
                            className="cursor-pointer"
                            onMouseEnter={() => setShowProfileDropdown(true)}
                            // onMouseLeave={() => setShowProfileDropdown(false)}
                            onClick={handleProfileIconClick}

                        >
                            <FaUser className="mr-4  text-4xl" />
                            {showProfileDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                                    <div
                                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        onClick={handleViewProfile}
                                    >
                                        View & Update Profile
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

                <div className='mt-80 mb-10 text-4xl font-bold flex flex-col items-center'>
                    <h1>Search Your Dream Internship here</h1>
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
                                <button className="mt-4 bg-blue-700 hover:bg-yellow-300 text-black rounded-md px-4 py-2">
                                    View Internship
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="flex flex-col items-center ">
                <div className='mt-80 mb-10 text-4xl font-bold flex flex-col items-center'>
                    <h1>Dream Internship here</h1>
                </div>

                {internships.slice(0, 3).map(internship => (
    <div key={internship._id} className="card w-full m-6  rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden">
        <div className="flex-grow px-6 py-4 pr-20 pl-20">
            <h2 className="card-title text-2xl font-semibold text-gray-800">{internship.job_Title}</h2>
            <p className="card-company text-xl text-gray-700">{internship.company_Name}</p>

            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    <p className="card-company text-xl text-gray-700">{internship.start_Date}</p>
                </div>
                {/* Other details here */}
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
                    <p className="card-duration text-xl text-gray-700">{internship.end_Date}</p>
                </div>
            </div>

            <p className="card-description text-base text-gray-700 my-4">{internship.job_Description}</p>
            {/* Additional details here */}
            <button className="mt-4 bg-blue-700 hover:bg-yellow-300 text-black rounded-md px-4 py-2" onClick={() => handleInternshipClick(internship._id)}>
                View Internship
            </button>
        </div>
    </div>
))}

                </div>
    
        
                <div className="mt-10 flex justify-center">
                    <button className="bg-blue-500 w-1/6 hover:bg-blue-700 text-white rounded-md px-6 py-3" onClick={Internshipp}>
                        View All
                    </button>
                </div>
                <div className='bg-slate-100'>
                    <div className="mt-20 mb-10 text-4xl font-bold flex flex-col items-center">
                        <h1 className='my-10'>Explore Various Types of Internships</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-60 ">
                        {yourCardArray.map(card => (
                            <div key={card.id} className="h-36 w-64 bg-white rounded-md shadow-md overflow-hidden p-4 mb-5">
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
export default Home1;
