import React from 'react'
import { Link } from 'react-router-dom'
import Internal_Navbar from '../InternalNavbar'
import Footer from '../Footer'


const AboutUs = () => {
  return (
    <>
    
    
    <div className='abc'>
    <Internal_Navbar/>
    </div>
    {/* <div className='d-flex'>
    <div className="w-1/2 bg-white p-4 border border-gray-300 shadow-md mr-4">
            <h2 className="text-xl font-semibold mb-4">About Intern Bee </h2>
            <p><span className='text-dark fw-bold fs-4'>Welcome to Internbee</span> – Your Gateway to Opportunities!

At Internbee, we are passionate about connecting aspiring talents with exciting opportunities. Our platform serves as a bridge between students, recent graduates, and employers, creating a space where skills meet possibilities.

We understand the importance of gaining practical experience in today's competitive world. Internbee is committed to providing a dynamic environment where individuals can explore internships, projects, and collaborations that align with their career goals.

Whether you're a student eager to kickstart your career journey or an employer seeking fresh talent, Internbee is the place to be. Join our vibrant community and embark on a journey of growth, learning, and success.

Discover, connect, and thrive with Internbee!</p><button className='btn btn-warning'>Learn More <span>→</span></button>
            </div>
    <div className="w-1/2 bg-white p-4 border border-gray-300 shadow-md">
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
            </div>
            </div> */}
            <div className="py-14 bg-white mt-12">  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" className="w-full h-auto" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-14 bg-white">  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" className="w-full h-auto" />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
            <div>
                <Footer/>
            </div>
    
    </>
  )
}

export default AboutUs

