import React from 'react'
import {
    FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock, FaMobile, FaPalette, FaCode, FaChartBar,
    FaUsers, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin, FaInstagram
} from 'react-icons/fa';
import logo from "../Assets/yellow_header1.png"
import { Link } from 'react-router-dom';
const Footer = () => {
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


    const socialIcons = [
        <a href="https://www.facebook.com/internsbee" target="_blank" rel="noopener noreferrer" key="facebook">
            <FaFacebook />
        </a>,

        <a href="https://www.linkedin.com/company/82091479" target="_blank" rel="noopener noreferrer" key="linkedin">
            <FaLinkedin />
        </a>,

        <a href="https://www.instagram.com/internsbee/" target="_blank" rel="noopener noreferrer" key="instagram">
            <FaInstagram />
        </a>,

         <a href="https://www.twitter.com/internsbee/" target="_blank" rel="noopener noreferrer" key="twitter">
         <FaTwitter />
     </a>,
    ];
    const navbarContent = [
        { label: 'About Us', link: '/about-us' },
        { label: 'Contact', link: '/contact' },
        { label: 'FAQ', link: '/faq' },
        { label: 'Blog', link: '/blogs' },
        { label: 'Privacy Policy', link: '/privacypolicy' },
    ];

    const rolesContent = yourCardArray.map(card => card.role);

    const locationContent = ['Pune'];
    return (
        <>
            <footer className="h-400 text-black p-6 flex justify-evenly items-center"style={{ backgroundColor: '#FFBD59' }}>
                <div className="grid gap-4 items-start space-y-4">
                    <Link to={'/'}>
                    <div className="items-center">
                        <img src={logo} alt="Footer Logo" className="" style={{width: '15rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    </Link>
                    <div className="text-2xl flex items-center gap-4 justify-center">
                        {socialIcons.map((icon, index) => (
                            <div key={index}>{icon}</div>
                        ))}
                    </div>
                    <div>
                <p className=" flex items-center gap-4 justify-center mt-12 pt-2">2024 Internsbee.All Right Reserved.</p>
                </div>
                </div>
               

                <div className="flex flex-row space-x-20 ml-20 mt-20">
                    <div className="flex flex-col items-start space-y-7">

                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="text-xl space-y-2">
                            {navbarContent.map((item, index) => (
                                <li key={index}>
                                    <a className='hover:text-white' href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-start space-y-7">
                        <h2 className="text-xl font-bold">Roles</h2>
                        <ul className="text-xl  space-y-2">
                            {rolesContent.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-start space-y-7">
                        <h2 className="text-xl font-bold">Locations</h2>
                        <ul className="text-xl space-y-2">
                            {locationContent.map((location, index) => (
                                <li key={index}>{location}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer;