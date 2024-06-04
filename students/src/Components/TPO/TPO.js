import React, { useState } from 'react';
import Navbar from './../Navbar';
import Footer from './../Footer';

const TPO = () => {
    const [formData, setFormData] = useState({
        name: '',
        collage: '',
        contactNumber: '',
        email: '',
        numberOfIntern: '',
        educationField: '',
        remark: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const errors = {};

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!formData.name) {
            errors.name = 'Name is required';
        } else if (!nameRegex.test(formData.name)) {
            errors.name = 'Name must contain only characters';
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.contactNumber) {
            errors.contactNumber = 'Contact Number is required';
        } else if (!phoneRegex.test(formData.contactNumber)) {
            errors.contactNumber = 'Contact Number must be 10 digits';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Email is not valid';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/tpo/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                setFormData({
                    name: '',
                    collage: '',
                    contactNumber: '',
                    email: '',
                    numberOfIntern: '',
                    educationField: '',
                    remark: ''
                });
                setSuccessMessage('Data successfully saved!');
                window.alert('Data successfully saved!');
            } else {
                const errorData = await response.json();
                console.error('Error:', response.statusText, errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                        </div>
                        <div className="p-2">
                            <label className="block">College</label>
                            <input type="text" name="collage" value={formData.collage} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Contact Number</label>
                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                            {errors.contactNumber && <div className="text-red-500">{errors.contactNumber}</div>}
                        </div>
                        <div className="p-2">
                            <label className="block">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                            {errors.email && <div className="text-red-500">{errors.email}</div>}
                        </div>
                        <div className="p-2">
                            <label className="block">Number of Internships</label>
                            <input type="number" name="numberOfIntern" value={formData.numberOfIntern} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Education Field</label>
                            <input type="text" name="educationField" value={formData.educationField} onChange={handleChange} required className="p-2 w-full border-2 border-amber-400"/>
                        </div>
                        <div className="p-2">
                            <label className="block">Remarks</label>
                            <textarea name="remark" value={formData.remark} onChange={handleChange} className="p-2 w-full border-2 border-amber-400"></textarea>
                        </div>
                        <div className="p-2 mb-9">
                            <button type="submit" className="bg-amber-400 w-full p-2">Send</button>
                        </div>
                    </form>
                </div>
                {successMessage && <div className="text-center mt-4 text-green-500">{successMessage}</div>}
            </div>
            <Footer />
        </div>
    );
};

export default TPO;
