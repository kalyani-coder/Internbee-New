// BlogPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiTrash2, FiX } from "react-icons/fi";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);


  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backend.internsbee.com/api/adminblog");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDeleteBlog = async (blogId) => {
    // Ask for confirmation before deleting
    const isConfirmed = window.confirm('Are you sure you want to delete this blog?');

    if (!isConfirmed) {
      // If not confirmed, do nothing
      return;
    }

    try {
      // Make a DELETE request to your backend API to delete the blog
      await axios.delete(`https://backend.internsbee.com/api/adminblog/${blogId}`);

      // After successful deletion, update the state to remove the deleted blog
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));

      console.log(`Blog with ID ${blogId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting blog with ID ${blogId}:`, error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 overflow-y-auto">
          <div className="container mx-auto mt-8 w-full max-w-screen-md">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">Latest Blogs</h1>

              <div className="flex items-center">
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
                <FiSearch />
              </div>
              <Link to="/create-blog">
                <button className="bg-amber-300 text-black px-4 py-2 rounded-md">
                  Create New Blog
                </button>
              </Link>
            </div>

            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div key={blog._id} className={`mb-8 ${index !== 0 ? 'border-t-2 pt-4' : ''} flex flex-col relative`}>
                  {blog.blogimage && (
                    <img src={blog.blogimage} alt={blog.title} className="mb-4 rounded-lg" style={{ width: '100%', height: "300px" }} />
                  )}

                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-2">
                    {showFullDescription ? blog.description : `${blog.description.slice(0, blog.description.length / 3)}...`}
                  </p>

                  {/* View more button */}
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-blue-500 block text-center"
                  >
                    {showFullDescription ? "View Less" : "View More"}
                  </button>


                  <span
                    className="absolute bottom-0 right-0 p-2 cursor-pointer text-red-500"
                    onClick={() => handleDeleteBlog(blog._id)}
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
    </>
  );
};

export default Blog;
