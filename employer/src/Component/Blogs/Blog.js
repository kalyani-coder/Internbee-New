// BlogPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiTrash2, FiX } from "react-icons/fi";
import axios from "axios";
import Navbar from "../Landingpage/Navbar"



const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState([]);

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

    const [showFullDescription, setShowFullDescription] = useState(false);

  

    return (
        <>
           <Navbar/>
            <div className="flex">


                <div className="flex flex-col items-center justify-center w-full flex-1 overflow-y-auto mt-12">
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
                        </div>

                        {blogs.map((blog, index) => (
                            <div key={blog._id} className={`mb-8 ${index !== 0 ? 'border-t-2 pt-4' : ''} flex flex-col relative`}>
                                {blog.blogimage && (
                                    <img src={blog.blogimage} alt={blog.title} className="mb-4 rounded-lg" style={{ width: '100%', height: "300px" }} />
                                )}

                                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>

                                {/* Displaying 1/3 of the description */}
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

                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
