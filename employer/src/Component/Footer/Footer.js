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
    { label: "Contact", link: "/contact" },
    { label: "FAQ", link: "/faq" },
    { label: "Privacy Policy", link: "/privacy" },
    { label: "Terms & Conditions", link: "/terms" },
    { label: "Refund Policy", link: "/refund" },
    { label: "Blog", link: "/blogs" },
    { label: "Plans & Pricing", link: "/anuallypackage" },
  ];

  const rolesContent = yourCardArray.map((card) => card.role);

  const locationContent = ["Pune"];
  return (
    <>
      <footer
        className="MainFooter h-400 text-black p-6 flex justify-evenly items-center footer-resopnsive shadow-md"
        style={{ backgroundColor: "#FFBD59" }}
      >
        <div className="grid gap-4 items-start space-y-4">
          <Link to={"https://internsbee.com"}>
            <div className="items-center div-logo-for-the-footer-internsbeee">
              <img
                src={logo}
                alt="Footer Logo"
                className="img-logo-for-the-footer-internsbeee"
                // style={{ width: "15rem" }}
              />
              {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
            </div>
          </Link>
          <div className="text-xl flex items-center gap-4 justify-center ">
            {socialIcons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        </div>

        <div className="flex gap-14 flex-row footer-content">
          <div className="flex flex-col other-links-in-the-footer-page items-start space-y-7">
            <ul className="text-xl space-y-2">
              <h2 className="text-xl font-bold ">Quick Links</h2>
              {navbarContent.map((item, index) => (
                <li key={index}>
                  <a
                    className="hover:text-white text-lg locatins-for-the-footer-internbeee"
                    href={item.link}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="flex flex-col other-links-in-the-footer-page items-start ">
            <h2 className="text-xl font-bold">Roles</h2>
            <ul className="text-lg locatins-for-the-footer-internbeee space-y-2 ">
              {rolesContent.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col other-links-in-the-footer-page items-start">
          <h2 className="text-xl font-bold">Locations</h2>
          <ul className="text-lg locatins-for-the-footer-internbeee">
            {locationContent.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
      </footer>{" "}
      <div>
        <p
          style={{ backgroundColor: "#FFBD59" }}
          className="interns-bee-all-righ-reserved-footerr flex items-center gap-4 justify-center p-2"
        >
          2024 Internsbee.All Right Reserved.
        </p>
      </div>
    </>
  );
};
export default Footer;
