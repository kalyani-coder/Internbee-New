// BlogPage.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiTrash2, FiX } from "react-icons/fi"; // Import icons as needed
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

const Blog = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState("");
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

  // Filter blogs based on the search term
  const filteredBlogs = allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle deleting a blog (you need to implement the actual deletion logic)
  const handleDeleteBlog = (blogId) => {
    // Implement your blog deletion logic here
    console.log(`Deleting blog with ID: ${blogId}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="sticky top-0 h-screen">
          {/* Set a height for the sticky sidebar */}
          <Sidebar />
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 overflow-y-auto">
          <div className="container mx-auto mt-8 w-full max-w-screen-md">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">Latest Blogs</h1>
              <div className="flex items-center">
                {/* Search input */}
                <div className="relative mr-4">
                  <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded-md"
                  />
                  {searchTerm && (
                    <span
                      className="absolute top-0 right-0 p-1 cursor-pointer"
                      onClick={() => setSearchTerm("")}
                    >
                      <FiX />
                    </span>
                  )}
                </div>
                {/* Search icon */}
                <FiSearch />
              </div>
            </div>

            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div key={blog.id} className={`mb-8 ${index !== 0 ? 'border-t-2 pt-4' : ''} flex flex-col relative`}>
                  {/* Display blog image */}
                  {blog.image && (
                    <img src={blog.image} alt={blog.title} className="mb-4 rounded-lg" style={{ width: '100%', height: "300px" }} />
                  )}

                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-2">{blog.description}</p>

                  {/* View more button */}
                  <Link to={`/blog/${blog.id}`} className="text-blue-500 block text-center">
                    View More
                  </Link>

                  {/* Delete icon */}
                  <span
                    className="absolute bottom-0 right-0 p-2 cursor-pointer text-red-500"
                    onClick={() => handleDeleteBlog(blog.id)}
                  >
                    <FiTrash2 />
                  </span>
                </div>
              ))
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Blog;
