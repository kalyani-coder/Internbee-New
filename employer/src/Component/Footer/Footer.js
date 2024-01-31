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
        <a href="https://www.facebook.com/internsbee" target="_blank" rel="noopener noreferrer" key="facebook">
            <FaFacebook />
        </a>,

        <a href="https://www.linkedin.com/company/82091479" target="_blank" rel="noopener noreferrer" key="linkedin">
            <FaLinkedin />
        </a>,

        <a href="https://www.instagram.com/internsbee/" target="_blank" rel="noopener noreferrer" key="instagram">
            <FaInstagram />
        </a>,
    ];

    const navbarContent = [
        { label: 'About Us', link: '/aboutus' },
        { label: 'Contact', link: '/aboutus' },
        { label: 'FAQ', link: '/faq' },
        { label: 'Privacy Policy', link: '/privacypolicy' },
    ];

    const rolesContent = yourCardArray.map(card => card.role);

    const locationContent = ['Pune'];
    return (
        <>
            <footer className="text-black p-6 flex flex-col lg:flex-row justify-evenly items-centr" style={{ backgroundColor: '#FFBD59' }}>
                <div className="flex flex-col items-center lg:items-start space-y-4">
                    <div className="flex items-center space-x-4">
                        {/* <img src="" alt="Footer Logo" className="w-12 h-12" /> */}
                        <p className="text-xl font-bold ">Interns <span className='text-white'>Bee</span></p>
                    </div>

                    <div className="text-2xl flex items-center space-x-4">
                        {socialIcons.map((icon, index) => (
                            <div key={index}>{icon}</div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-20 mt-6 lg:mt-0">
                    <div className="flex flex-col items-center lg:items-start space-y-7">
                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="text-xl space-y-2">
                            {navbarContent.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start space-y-7">
                        <h2 className="text-xl font-bold">Roles</h2>
                        <ul className="text-xl space-y-2">
                            {rolesContent.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start space-y-7">
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

