import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const CreateBlog = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleUpload = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title);
        formData.append('description', description);

        const response = await fetch('https://backend.internsbee.com/api/adminblog', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Image uploaded Successfully:');
          alert("Blog Added Successfully", "success");
        } else {
          console.error('Error uploading image:', response.statusText);
          alert("Error adding blog", "error");
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert("Error adding blog", "error");
    }
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
              className="mt-1 p-2 w-full border rounded-md"
              required
              onChange={handleTitleChange}


            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              type="file"
              required
              onChange={handleDescriptionChange}
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}

              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            onClick={handleUpload}
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
