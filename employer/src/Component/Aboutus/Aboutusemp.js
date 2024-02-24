import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import '../ResponsiveCss/ResponsiveCss.css';


const AboutUsEmp = () => {
  return (
    <>
    
    
    <div className='abc'>
    <Navbar/>
    </div>
    <div className='d-flex'>
    
    <div className="mainabout w-1/2 bg-white p-4 border border-gray-300 shadow-md mr-4">
            <h2 className="text-xl font-semibold mb-4">About Intern Bee </h2>
            <p><span className='text-dark fw-bold fs-4'>Welcome to Internbee</span> – Your Gateway to Opportunities!

At Internbee, we are passionate about connecting aspiring talents with exciting opportunities. Our platform serves as a bridge between students, recent graduates, and employers, creating a space where skills meet possibilities.

We understand the importance of gaining practical experience in today's competitive world. Internbee is committed to providing a dynamic environment where individuals can explore internships, projects, and collaborations that align with their career goals.

Whether you're a student eager to kickstart your career journey or an employer seeking fresh talent, Internbee is the place to be. Join our vibrant community and embark on a journey of growth, learning, and success.

Discover, connect, and thrive with Internbee!</p><button className='btn btn-warning'>Learn More <span>→</span></button>
            </div>
    <div className="d-flex w-1/2 bg-white p-4 border border-gray-300 shadow-md">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <div>
              <img
                src="https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-124269.jpg" // Replace with your image URL
                alt="Post Internship"
                className="mb-4 w-full h-96 object-contain"
              />
              <p className="text-black text-center">
                Best Platform to Search Your Dream Internships!
              </p>
            </div>
            {/* <div className="flex justify-center mt-4">
              <Link to={'/jobs'} >
                <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 hover:text-amber-300">
                  View Internship
                </button>
              </Link>
            </div> */}
            </div>
            </div>
            <div>
                <Footer/>
            </div>
    
    </>
  )
}

export default AboutUsEmp