import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const CreateBlog = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Call onSave prop to save the data (you need to implement this function in the parent component)
    onSave({ title, description, image });
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div>
          <Sidebar />
        </div>


        <div className="container mx-auto mt-8 p-12">
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Save Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
