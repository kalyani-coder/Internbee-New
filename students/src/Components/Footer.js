import React from 'react'
import {
    FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock, FaMobile, FaPalette, FaCode, FaChartBar,
    FaUsers, FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin, FaInstagram
} from 'react-icons/fa';
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
            <footer className="h-600 bg-amber-300 text-black p-6 flex justify-evenly items-center">
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src="./logo.png" alt="Footer Logo" className="w-12 h-12" />
                        <p className="text-xl font-bold">Interns Bee</p>
                    </div>

                    <div className="text-2xl flex items-center space-x-4">
                        {socialIcons.map((icon, index) => (
                            <div key={index}>{icon}</div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row space-x-20 ml-20 mt-20">
                    <div className="flex flex-col items-start space-y-7">

                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="text-xl space-y-2">
                            {navbarContent.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.label}</a>
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