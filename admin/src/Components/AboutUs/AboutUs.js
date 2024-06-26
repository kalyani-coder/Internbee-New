import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <>


      <Navbar />
      <div className="displaycontent flex h-screen">
        <Sidebar />
        <div className="mt-1">
          <div
            className="py-14 bg-white text-center p-4 all-about-section-content-for-the-abt-us-page"
            style={{ padding: "1em" }}
          >
            <h2 className="text-2xl text-amber-500 font-bold md:text-4xl mx-8">
              About Us
            </h2>
            <p className="mt-2 text-gray-600 ">
              InternsBee is a Pune-based online platform that connects students with
              internship opportunities. It was founded in 2022 by a team of
              passionate and experienced professionals who wanted to bridge the gap
              between academia and industry. Our vision is to create a vibrant and
              dynamic ecosystem of internships in Pune, where students can learn
              from the best and grow their careers.{" "}
            </p>
            <p className="mt-4 text-gray-600 ">
              InternsBee is more than just a website. It is a community of
              like-minded students who share their experiences, insights, and tips
              with each other. It is also a network of mentors who guide and inspire
              our students to achieve their goals. It is also a platform for
              institutions and companies who want to hire interns in bulk and
              benefit from their talent and enthusiasm.
            </p>
            <p className="mt-4 text-gray-600 ">
              InternsBee offers a wide range of internships in various fields such
              as engineering, management, design, arts, social work, education,
              media, and more. We also provide guidance and support to our students
              throughout their internship journey. We help them prepare their
              resumes, write cover letters, ace interviews, and get feedback from
              their mentors. We also organize events and workshops to enhance their
              skills and knowledge.
            </p>
          </div>
          <div className="py-2 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 flex flex-wrap justify-center">
              <div className="border-2 border-amber-400 m-4 shadow rounded-tl-2xl rounded-br-2xl w-full md:w-1/2 lg:w-1/3">
                <div className="flex justify-center p-4">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.hwETvQ43zgDcL6CmvHVluwHaEh&pid=Api&P=0&h=180"
                    alt="image"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center p-4">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Our Vision</h2>
                  <p className="mt-6 text-gray-600">"Our vision is to create the biggest and largest students network that</p>
                  <p className="mt-1 text-gray-600">would help students and enable employers to search for the right candidate</p>
                  <p className="mt-1 text-gray-600">for the opportunities and students benefits for education and placements</p>
                  <p className="mt-1 text-gray-600">and other activities as well."</p>
                </div>
              </div>
              <div className="border-2 border-amber-400 m-4 shadow rounded-tl-2xl rounded-br-2xl w-full md:w-1/2 lg:w-1/3">
                <div className="flex justify-center p-4">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.mOlAhpaItpIBK13So2E3XQHaCp&pid=Api&P=0&h=180"
                    alt="image"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center p-4">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Our Mission</h2>
                  <p className="mt-6 text-gray-600">"Our mission is to empower lesser known colleges and their</p>
                  <p className="mt-1 text-gray-600">talented but often overlooked students. We aspire to offer a platform</p>
                  <p className="mt-1 text-gray-600">where student seeking to learn and enhance their skills can thrive</p>
                  <p className="mt-1 text-gray-600">and flourish."</p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default AboutUs




