import React from "react";
import "./Footer.css";
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
import logo from "../../Assets/yellow_header1.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const yourCardArray = [
    {
      icons: FaMobile,
      role: "Finance",
      jobs: 200,
    },
    {
      icons: FaCode,
      role: "IT",
      jobs: 50,
    },
    {
      icons: FaPalette,
      role: "Marketing",
      jobs: 100,
    },
    {
      icons: FaUsers,
      role: "Sales",
      jobs: 150,
    },
    {
      icons: FaChartBar,
      role: "HR",
      jobs: 40,
    },
  ];
  const Helpful = [
    {

      help: "Term and Policy",

    },
    {

      help: "Refund Policy",

    },
    {

      help: "Plans and Pricing",

    },

  ];

  const socialIcons = [
    <a
      href="https://www.facebook.com/internsbee"
      target="_blank"
      rel="noopener noreferrer"
      key="facebook"
    >
      <FaFacebook />
    </a>,

    <a
      href="https://www.linkedin.com/company/82091479"
      target="_blank"
      rel="noopener noreferrer"
      key="linkedin"
    >
      <FaLinkedin />
    </a>,

    <a
      href="https://www.instagram.com/internsbee/"
      target="_blank"
      rel="noopener noreferrer"
      key="instagram"
    >
      <FaInstagram />
    </a>,

    <a
      href="https://www.twitter.com/internsbee/"
      target="_blank"
      rel="noopener noreferrer"
      key="twitter"
    >
      <FaTwitter />
    </a>,
  ];
  const navbarContent = [
    { label: "About Us", link: "/aboutus" },
    { label: "Contact", link: "/contactus" },
    { label: "Home", link: "/home" },
    { label: "Blog", link: "/blogs" },

  ];

  const rolesContent = yourCardArray.map((card) => card.role);
  const helpfulContent = Helpful.map((helpfull) => helpfull.help);
  const locationContent = ["Pune"];
  return (
    <>
    <footer
      className="h-400 text-black p-6 flex justify-evenly  items-center footer-resopnsive w-full"
      style={{ backgroundColor: "#FFBD59" }}
    >
      <div className="grid gap-4 items-start space-y-4 footer-part-one">
        <Link to={"/"}>
          <div className="items-center footer-logo">
            <img
              src={logo}
              alt="Footer Logo"
              className=""
              style={{ width: "15rem" }}
            />
            {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
          </div>
        </Link>
        <div className="flex items-center justify-center gap-4 footer-link-icon">
          {socialIcons.map((icon, index) => (
            <div key={index} className="text-2xl hover:text-white">
              {icon}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-14 footer-content p-4 footer-part-two">
        <div className="flex flex-col  space-y-7">
          <h2 className="text-xl font-bold ">Quick Links</h2>
          <ul className="text-xl space-y-2">
            {navbarContent.map((item, index) => (
              <li key={index}>
                <a className="hover:text-white" href={item.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start footer-content">
          <h2 className="text-xl font-bold mb-4">Roles</h2>
          <ul className="text-xl  space-y-2">
            {rolesContent.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start space-y-7 footer-content">
          <h2 className="text-xl font-bold">Locations</h2>
          <ul className="text-xl space-y-2">
            {locationContent.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start footer-content">
          <h2 className="text-xl font-bold mb-4">Helpful</h2>
          <ul className="text-xl  space-y-2">
            {helpfulContent.map((help, index) => (
              <li key={index}>{help}</li>
            ))}
          </ul>
        </div>
      </div>


    </footer>
    <div style={{ borderTop: "3px dashed #fff", backgroundColor: "#FFBD59" }}>
      <p className=" flex items-center gap-4 justify-center p-4">
        2024 Internsbee.All Right Reserved.
      </p>
    </div>
  </>
  );
};
export default Footer;
