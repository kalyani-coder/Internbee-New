import React, { useState } from 'react';
import Navbar from './../Navbar';
import Footer from './../Footer';

const TPO = () => {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        contactNumber: '',
        email: '',
        numberOfInternships: '',
        remarks: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you can add code to send formData to a server or API
    };

    return (
        <div>
            <Navbar />
            <div className="mt-36 px-4">
                <div className="text-center p-2">
                <h1 className="text-2xl text-amber-500 font-bold md:text-4xl mx-8">TPO & Placement Cells Connect Section</h1>
                    <p className="text-gray-700 mt-2">All Placement Cells & Tpo’s Looking for Internship for their student fill the below form our team will reach out to you.</p>
                </div>
                <div className="flex justify-center mt-6">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="p-2">
                            <label className="block">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">College</label>
                            <input type="text" name="college" value={formData.college} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Contact Number</label>
                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Number of Internships</label>
                            <input type="number" name="numberOfInternships" value={formData.numberOfInternships} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Remarks</label>
                            <textarea name="remarks" value={formData.remarks} onChange={handleChange} className="p-2 w-full border-2 border-amber-400"></textarea>
                        </div>
                        <div className="p-2 mb-9">
                            <button type="submit" className="bg-amber-400 w-full p-2">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TPO;
