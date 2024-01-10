// BlogPage.js

import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

const Blog = ({ blogs }) => {
  const blogArray = Array.isArray(blogs) ? blogs : [];

  const staticBlogs = [
    {
      id: "1",
      title: "Static Blog 1",
      description: "Description of static blog 1.",
      image: "https://via.placeholder.com/300", // Dummy image URL
    },
    {
      id: "2",
      title: "Static Blog 2",
      description: "Description of static blog 2.",
      image: "https://via.placeholder.com/300", // Dummy image URL
    },
    {
      id: "3",
      title: "Static Blog 3",
      description: "Description of static blog 3.",
      image: "https://via.placeholder.com/300", // Dummy image URL
    },
    {
      id: "4",
      title: "Static Blog 4",
      description: "Description of static blog 4.",
      image: "https://via.placeholder.com/300", // Dummy image URL
    },
  ];

  const allBlogs = [...staticBlogs, ...blogArray];

  return (
    <>

      <Navbar />
      <div className="sticky top-0">
        <Sidebar />
      </div>

      <div className="flex flex-col items-center justify-center ">

      


        <div className={`flex-1 container mx-auto mt-8 w-full max-w-screen-md`}>
          <h1 className="text-3xl font-bold mb-4 text-center">Latest Blogs</h1>

          {Array.isArray(allBlogs) && allBlogs.length > 0 ? (
            allBlogs.map((blog, index) => (
              <div key={blog.id} className={`mb-8 ${index !== 0 ? 'border-t-2 pt-4' : ''} flex flex-col items-center`}>
                {/* Display blog image */}
                {blog.image && (
                  <img src={blog.image} alt={blog.title} className="mb-4 rounded-lg" style={{ width: '60%', height: "300px" }} />
                )}

                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-2">{blog.description}</p>

                {/* View more button */}
                <Link to={`/blog/${blog.id}`} className="text-blue-500 block text-center">
                  View More
                </Link>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Blog;
