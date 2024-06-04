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
  const [showFullDescription, setShowFullDescription] = useState({});

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/adminblog");
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
      await axios.delete(`http://localhost:8000/api/adminblog/${blogId}`);

      // After successful deletion, update the state to remove the deleted blog
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));

      console.log(`Blog with ID ${blogId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting blog with ID ${blogId}:`, error);
    }
  };

  const handleViewToggle = (blogId) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl text-amber-500 font-bold md:text-4xl mx-8">Latest Blogs</h2>
          </div>
          <div className="search-bar relative mb-6">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border-2 border-amber-500 rounded"
            />
            {searchTerm && (
              <span onClick={() => setSearchTerm("")} className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer">
                <FiX />
              </span>
            )}
            <FiSearch className="absolute right-0 top-0 mt-2 mr-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog._id} className="col-span-1 mb-4">
                <div className="blog-card border-2 border-amber-400 shadow" style={{ borderRadius: '15px 50px' }}>
                  <div className="blog-card__background">
                    {blog.blogimage && (
                      <img src={blog.blogimage} alt={blog.title} className="w-full p-4" />
                    )}
                  </div>
                  <div className="blog-card__info p-4">
                    <h2 className="text-lg font-bold">{blog.title}</h2>
                    <p>
                      {showFullDescription[blog._id]
                        ? blog.description
                        : `${blog.description.slice(0, blog.description.length / 7)}...`}
                    </p>
                    <button onClick={() => handleViewToggle(blog._id)} className="text-blue-500 underline">
                      {showFullDescription[blog._id] ? "View Less" : "View More"}
                    </button>
                    <button onClick={() => handleDeleteBlog(blog._id)} className="text-red-500 underline ml-4">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
