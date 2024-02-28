import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";
import logo from "../Assets/yellow_header1.png";
import { IoNotificationsOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiUser } from "react-icons/fi";

import {
  FaCalendar,
  FaMoneyBill,
  FaMapMarkerAlt,
  FaRegClock,
  FaMobile,
  FaPalette,
  FaCode,
  FaChartBar,
  FaGreaterThan,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Components/ResponsiveCss/ResponsiveCss.css";
import Footer from "../Components/Footer";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";

const RightArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const LeftArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const Home1 = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const companiesRef = useRef(null);
  const internshipsRef = useRef(null);
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [allInternships, setAllInternships] = useState([]);

  const [mainSearchQuery, setMainSearchQuery] = useState("");

  const handleProfileIconClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const filterByLocation = (location) => {
    if (location === "All") {
      setFilteredInternships(allInternships); // Show all internships if "All" or "Any" is selected
    } else {
      const filtered = allInternships.filter(
        (internship) =>
          internship.location.toLowerCase() === location.toLowerCase()
      );
      setFilteredInternships(filtered);
    }
  };
  const filterByJobType = (jobType) => {
    const filtered = allInternships.filter(
      (internship) =>
        internship.job_Type.toLowerCase() === jobType.toLowerCase()
    );
    setFilteredInternships(filtered);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend.internsbee.com/api/postinternship/"
        );
        if (response.ok) {
          const data = await response.json();
          setInternships(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // const handleInternshipClick = (id) => {
  //   navigate(`/internship/${id}`);
  // };

  const handleCreateProfile = () => {
    navigate("/Profile");
  };
  const handleViewProfile = () => {
    navigate("/viewprofile");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
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
    navigate("/internship");
  };

  const handleResume = () => {
    navigate("/resume");
  };
  const handleregistration = () => {
    navigate("/register");
  };
  const handleSignin = () => {
    navigate("/login");
  };


  const yourCardArray = [
    {
      icons: FaMobile,
      role: "Finance",
    },
    {
      icons: FaCode,
      role: "IT",
    },
    {
      icons: FaPalette,
      role: "Marketing",
    },
    {
      icons: FiUser,
      role: "Sales ",
    },
    {
      icons: FaChartBar,
      role: "HR",
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
    navigate("/internship");
  };

  const appliedinternship = () => {
    navigate("/Applied-internship");
  };

  const handleMainSearch = () => {
    const lowerCaseQuery = mainSearchQuery.toLowerCase();

    const filtered = allInternships.filter((item) => {
      const {
        job_Title,
        empName,
        position,
        location,
        skills, // Include skills field in the destructuring
      } = item;

      const skillsArray = skills.split(" "); // Split the skills string into an array

      return (
        job_Title.toLowerCase().includes(lowerCaseQuery) ||
        empName.toLowerCase().includes(lowerCaseQuery) ||
        position.toLowerCase().includes(lowerCaseQuery) ||
        location.toLowerCase().includes(lowerCaseQuery) ||
        skillsArray.some((skill) =>
          skill.toLowerCase().includes(lowerCaseQuery)
        )
        // Add other checks as needed
      );
    });

    setFilteredInternships(filtered);
  };

  return (
    <>
     
      <Internal_Navbar />

      {/* /////////////////////////////////////////////////////////////////////// */}
      <div className="Homehead mb-10 text-2xl font-bold flex flex-col items-center mt-36">
        <h1>Search Your Internships Here</h1>
      </div>

      <div className="inpimp flex items-center justify-center my-10 mt-5">
        <div className=" inputhomess relative flex items-center gap-8">
        <input
              type="text"
              placeholder="Enter skills/designations/companies"
              value={mainSearchQuery}
              onChange={(e) => setMainSearchQuery(e.target.value)}
              className="input h-16 w-3/4 mx-20 rounded-full border border-gray-500 focus:border-gray-400 pl-4 pr-5 mb-20"
            />
           <button
              className="btnintern mr-96 bg-black hover:bg-black text-white rounded-md px-4 py-2 mb-20"
              onClick={handleMainSearch}
            >
              Search
            </button>
        </div>
      </div>
      {/* <div ref={companiesRef}>
          {/* <div className=" Homehead mb-10 text-4xl font-bold flex flex-col items-center ">
            <h1>Top Companies hiring now</h1>
          </div> */}
      {/* <Slider {...settings}> */}
      {/* {companies.map((company) => ( */}
      {/* <div
                {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="ml-40 card w-98 m-2 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden"
              >
                < className="flex-grow pl-4 pr-0 py-4 " style={{width:'80%',height:'70%'}}>
                  {/* Internship details */}
      {/* {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div
                key={internship.id}
                className="ml-40 card w-98 m-2 rounded-md flex flex-grow justify-between items-center bg-white shadow-md overflow-hidden"
              >
                <div className="flex-grow pl-4 pr-0 py-4 " style={{width:'80%',height:'70%'}}>
                  {/* Internship details */}
      {/* <h2 className="card-title text-2xl font-semibold text-gray-800 ">
                    {internship.job_Title}
                  </h2>
                  <p className="card-company text-xl text-gray-700">
                    Company Name : {internship.company_Name}
                  </p> */}
      {/* <div className="flex justify-between items-center my-2 gap-3 "> */}
      {/* <div className="flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      <p className="card-company text-sm text-gray-700 ">
                        Start Date : {internship.start_Date}
                      </p>
                    </div> */}
      {/* <div className="flex items-center">
                      <FaMoneyBill className="mr-2 text-lg" />
                      <p className="card-location text-sm text-gray-700">
                        &#x20B9;{internship.stipend}
                      </p>
                    </div> */}
      {/* <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-sm" />
                      <p className="card-duration text-sm text-gray-700">
                        {internship.location}
                      </p>
                    </div> */}
      {/* <div className="flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      <p className="card-duration text-sm text-gray-700">
                        End Date : {internship.end_Date}
                      </p>
                    </div> */}
      {/* </div> */}
      {/* <p className="card-description text-sm text-gray-700 my-2">
                    Internship Type : {internship.job_Type}
                  </p> */}
      {/* <div>
                  <p className="card-skills text-sm text-gray-700 my-2">
                      Skills: {internship.skills}
                    </p>
                    </div> */}
      {/* <div className="flex items-center">
                      <FaRegClock className="mr-2 text-" />
                      <p className="card-duration text-sm text-gray-700">
                        Duration : {internship.position}
                      </p>
                    </div> */}
      {/* <p className="card-description text-sm text-gray-700 my-4">
                    {internship.job_Description}
                  </p> */}
      {/* <div className="flex justify-between"> */}

      {/* <div>
                      <Link to={`/apply-internship/${internship._id}`}>
                        <button className= "text-black p-2 rounded-lg" style={{ backgroundColor: '#FFBD59' }}>
                          Apply
                        </button>
                      </Link>
                    </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* )) */}
      {/* ) : ( */}

      {/* <p></p> */}
      {/* )}  */}

      {/* <h2 className="text-xl font-bold">{company.name}</h2> */}
      {/* <p className="text-gray-600">{company.description}</p> */}
      {/* <Link to={`/apply-internship/${Internship._id}`}> */}
      {/* <button className="mt-4 text-black rounded-md px-4 py-2" style={{ backgroundColor: '#FFBD59' }}> */}
      {/* View Internship */}
      {/* </button>  */}
      {/* </Link> */}

      {/* </Slider> */}
      {/* </div>  */}
      <div className="flex flex-col items-center ">
        <div className="Homehead mt-5 mb-10 text-2xl font-bold flex flex-col items-center ">
          <h1>Latest Internships</h1>
        </div>

        <div className="flex all-the-content-for-the-page-contains-home flex-row justify-center items-center flex-wrap gap-4">
          {internships.slice(0, 8).map((internship) => (
            <div
              key={internship._id}
              className="cardMain h-1/2  rounded-md flex flex-col justify-between items-left bg-white shadow-md overflow-hidden "
            >
              <div className="flex-grow px-5 py-5 pr-20 pl-20">
                <h2 className="card-title text-xl font-semibold text-gray-800">
                  {internship.job_Title}
                </h2>
                <p className="card-company text-lg text-gray-700">
                  {internship.company_Name}
                </p>

                <div className="flex justify-between items-center my-4  date-and-all-text-in-the-card-section-for-student">
                  <div className="flex items-center">
                    <FaCalendar className="mr-0" />
                    <p className="card-company text-sm text-gray-700 px-3">
                      {internship.start_Date}
                    </p>
                  </div>
                  {/* Other details here */}
                  <div className="flex items-center">
                    <FaMoneyBill className="mr-0 text-xl" />
                    <p className="card-location text-sm text-gray-700 px-3">
                      &#x20B9;{internship.stipend}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-0" />
                    <p className="card-duration text-sm text-gray-700 px-3">
                      {internship.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="me-0" />
                    <p className="card-duration text-sm text-gray-700 px-3">
                      {internship.end_Date}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <FaRegClock className="mr-1 text-lg" />
                  <p className="card-description text-sm text-gray-700">
                    {internship.position}
                  </p>
                </div>
                {/* Additional details here */}

                {/* <Link to={`/apply-internship/${internship._id}`}>
                  <button
                    className="mt-4 hover:bg-amber-300 text-black rounded-md px-4 py-2" style={{ backgroundColor: '#FFBD59' }}
                  // onClick={() => handleInternshipClick(internship._id)}
                  >
                    View Internship
                  </button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="ViewAll w-1/6 hover:bg-blue-700 text-white rounded-md px-6 py-3"
          style={{ backgroundColor: "#FFBD59" }}
          onClick={Internshipp}
        >
          View All
        </button>
      </div>
      <div className="bg-slate-100">
        <div className="mt-20 mb-10 text-2xl font-bold flex flex-col items-center">
          <h1 className=" Homehead my-10">
            Explore Various Types of Internships
          </h1>
        </div>

        <div className="Homecardsdivs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-44 hover:text-black">
          {yourCardArray.map((card) => (
            <Link to={"/internship"}>
              <div
                key={card.id}
                className="AlignHome h-36 w-64 bg-white rounded-md shadow-md overflow-hidden p-4 mb-5 hover:text-black"
              >
                {/* Your card content goes here */}
                {card.icons &&
                  React.createElement(card.icons, {
                    className: "text-4xl mb-2",
                  })}
                <h1>{card.role}</h1>
                <div className="flex justify-between mt-4">
                  <h1>{card.jobs}</h1>
                  <FaGreaterThan />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};
export default Home1;
