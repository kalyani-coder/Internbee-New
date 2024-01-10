// BlogPage.js

import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

const Blog = ({ blogs }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>

          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 block">
                  View Blog
                </Link>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
