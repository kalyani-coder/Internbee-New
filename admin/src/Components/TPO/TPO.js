import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import Footer from './../Footer/Footer';
import * as XLSX from 'xlsx';

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

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "TPO Data");
        XLSX.writeFile(workbook, "TPO_Data.xlsx");
    };

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
                        <div className="overflow-auto" style={{ maxHeight: '600px' }}>
                            <table className="min-w-full bg-white border">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">Name</th>
                                        <th className="py-2 px-4 border-b">College</th>
                                        <th className="py-2 px-4 border-b">Contact Number</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Number of Interns</th>
                                        <th className="py-2 px-4 border-b">Education Field</th>
                                        <th className="py-2 px-4 border-b">Remark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item._id}>
                                            <td className="py-2 px-4 border-b">{item.name}</td>
                                            <td className="py-2 px-4 border-b">{item.collage}</td>
                                            <td className="py-2 px-4 border-b">{item.contactNumber}</td>
                                            <td className="py-2 px-4 border-b">{item.email}</td>
                                            <td className="py-2 px-4 border-b">{item.numberOfIntern}</td>
                                            <td className="py-2 px-4 border-b">{item.educationField}</td>
                                            <td className="py-2 px-4 border-b">{item.remark}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-center relative bottom-10 top-1">
                        <button onClick={exportToExcel} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Export to Excel
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
            <Footer />
            </div>
        </div>
    );
};

export default TpoList;
