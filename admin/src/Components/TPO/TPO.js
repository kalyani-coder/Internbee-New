import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';

import Footer from './../Footer/Footer';

const TpoList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tpo/')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <div>
            <Navbar />
            <div className="displaycontent flex h-screen w-full">
                <Sidebar className="h-full" />
                <div className="w-full p-8">
                    <div className="container11 mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4 flex justify-center text-amber-400">TPO List</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {data.map(item => (
                                <div key={item._id} className="bg-white shadow-md rounded-lg p-4 border-2 border-amber-500">
                                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                    <p><strong>College:</strong> {item.collage}</p>
                                    <p><strong>Contact Number:</strong> {item.contactNumber}</p>
                                    <p><strong>Email:</strong> {item.email}</p>
                                    <p><strong>Number of Interns:</strong> {item.numberOfIntern}</p>
                                    <p><strong>Education Field:</strong> {item.educationField}</p>
                                    <p><strong>Remark:</strong> {item.remark}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default TpoList;
