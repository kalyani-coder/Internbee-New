import React, { useState } from "react";
import { Link } from 'react-router-dom';

const CreateBlog = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Call onSave prop to save the data (you need to implement this function in the parent component)
    onSave({ title, description });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create a New Blog</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
        ></textarea>
      </div>

      {/* Use a Link component for navigation */}
      <Link to="/blog" className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleSave}>
        Save Blog
      </Link>
    </div>
  );
};

export default CreateBlog;
