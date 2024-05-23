import React, { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import axios from "axios";
import QuickNav from '../QuickNav';
import Navbar from './../Navbar';
import Footer from './../Footer';
import './Blogs.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [showFullDescription, setShowFullDescription] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/adminblog");
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleViewToggle = (id) => {
        setShowFullDescription((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className="text-2xl text-amber-500 font-bold md:text-4xl mx-8">Latest Blogs</h2>
                </div>
                {/* <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {searchTerm && (
                        <span onClick={() => setSearchTerm("")} className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer">
                            <FiX />
                        </span>
                    )}
                    <FiSearch className="absolute right-0 top-0 mt-2 mr-2" />
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredBlogs.map((blog) => (
                        <div key={blog._id} className="col-span-1 mb-4">
                            <div className="blog-card border-2 border-amber-400 shadow" style={{ borderRadius: '15px 50px' }}>
                                <div className="blog-card__background">
                                    {blog.blogimage && (
                                        <img src={blog.blogimage} alt={blog.title} className="w-full" />
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
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
