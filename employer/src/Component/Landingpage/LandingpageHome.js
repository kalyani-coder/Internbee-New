import React, { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaCalendar,
  FaMoneyBill,
  FaMapMarkerAlt,
  FaRegClock,
  FaMobile,
  FaPalette,
  FaCode,
  FaChartBar,
  FaUsers,
  FaGreaterThan,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

// const RightArrow = ({ onClick }) => (
//     <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
//         {/* You can customize the right arrow icon here */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//         </svg>
//     </div>
// );

// const LeftArrow = ({ onClick }) => (
//     <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={onClick}>
//         {/* You can customize the left arrow icon here */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//         </svg>
//     </div>
// );

const LandingpageHome = () => {
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
    setShowDropdown(!showDropdown); // Toggle showDropdown state
  };

  // const handleRegisterClick = (event) => {
  //     const buttonRect = event.target.getBoundingClientRect();
  //     setDropdownPosition({
  //         top: buttonRect.bottom + window.scrollY,
  //         left: buttonRect.left + window.scrollX,
  //     });
  //     setShowDropdown(!showDropdown); // Toggle showDropdown state
  // };
  const handleUserTypeSelect = (userType) => {
    setShowDropdown(false);

    if (userType === "employer") {
      // Provide different links for employer
      if (selectedUserType === "login") {
        navigate("/employer-login");
      } else if (selectedUserType === "register") {
        navigate("/employer-register");
      }
    } else if (userType === "student") {
      // Provide different links for the student in login and register buttons
      if (selectedUserType === "login") {
        navigate("/Signin");
      } else if (selectedUserType === "register") {
        navigate("/Registration");
      }
    }
  };

  const handleCompaniesClick = () => {
    if (companiesRef.current) {
      companiesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInternshipsClick = () => {
    if (internshipsRef.current) {
      internshipsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Internship = () => {
    navigate("/Internship");
  };

  // Dummy data for companies
  const companies = [
    {
      id: 1,
      name: "Accenture",
      logo: "Accenture-logo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Tata Consultancy Service",
      logo: "tata.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Tata Consultancy Service",
      logo: "tata.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "Tata Consultancy Service",
      logo: "tata.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "Tata Consultancy Service",
      logo: "tata.jpg",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more companies as needed
  ];

  const internships = [
    {
      id: 1,
      companyName: "Tata Consultancy Service",
      position: "Fronted Developer",
      reviews: 4.2,
      duration: 1,
      stipend: "Rs. 12,000/month",
      location: "Mumbai",
      skillsRequired: ["Java", "Spring Boot", "Hibernate"],
      deadline: "2023-12-20",
    },
    {
      id: 1,
      companyName: "Tata Consultancy Service",
      position: "Fronted Developer",
      reviews: 4.2,
      duration: 1,
      stipend: "Rs. 12,000/month",
      location: "Mumbai",
      skillsRequired: ["Java", "Spring Boot", "Hibernate"],
      deadline: "2023-12-20",
    },
    {
      id: 3,
      companyName: "dhsbdb",
      position: "Fronted Developer",
      reviews: 4.2,
      duration: 1,
      stipend: "Rs. 12,000/month",
      location: "Mumbai",
      skillsRequired: ["Java", "Spring Boot", "Hibernate"],
      deadline: "2023-12-20",
    },
  ];

  const yourCardArray = [
    {
      icons: FaMobile,
      role: "Mobile development",
      jobs: 200,
    },
    {
      icons: FaCode,
      role: "Web development",
      jobs: 50,
    },
    {
      icons: FaPalette,
      role: "Graphics Design",
      jobs: 100,
    },
    {
      icons: FaUsers,
      role: "Human Resource Management",
      jobs: 150,
    },
    {
      icons: FaChartBar,
      role: "Business Development",
      jobs: 40,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <RightArrow />,
    // prevArrow: <LeftArrow />,
    draggable: false,
  };
  const socialIcons = [
    <FaFacebook key="facebook" />,
    <FaTwitter key="twitter" />,
    <FaLinkedin key="linkedin" />,
    <FaInstagram key="instagram" />,
  ];

  const navbarContent = [
    { label: "About Us", link: "/about-us" },
    { label: "Contact", link: "/contact" },
    { label: "FAQ", link: "/faq" },
  ];

  const rolesContent = yourCardArray.map((card) => card.role);

  const locationContent = ["New York", "San Francisco", "London", "Tokyo"];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <LandingPage />
      </div>
    </>
  );
};

export default LandingpageHome;
