import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import { FaUser } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';



const Profile = () => {

    const navigate = useNavigate();

    const handleResume = () => {
        navigate('/Resume');
    };


    // new code start here 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        permanent_address: '',
        city: '',
        district: '',
        country: '',
        current_address: '',
        current_city: '',
        current_district: '',
        current_country: '',
        education: '',
        instituteName: '',
        stream: '',
        passOutYear: '',
        keySkills: '',
        languages: ' ',
        experience: ' ',
        salaryExpectations: ' ',
        projectName: ' ',
        projectSummary: ' ',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };






   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Get the user ID from local storage
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    const number = localStorage.getItem('number');

    // Include the user ID in the form data
    const formDataWithUserId = {
      ...formData,
      userId: userId,
      user_email : email,
      user_number : number,
   
    };

    console.log('Form Data:', formDataWithUserId);

    const response = await fetch('http://localhost:8000/api/studentsdetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithUserId),
    });

    if (response.ok) {
      console.log('Data submitted successfully:', response);
      alert("Your Details Submitted Successfully");
    } else {
      console.error('Error submitting data');
    }
  } catch (error) {
    console.error('Error creating data:', error);
    // Handle the error appropriately in the frontend, e.g., show a user-friendly error message
  }
};



    return (
        <div className="">
            {/* <Sidebar /> */}
            <div className="">

                <div className="bg-slate-50 p-6 flex items-center justify-between border shadow-xl">

                    <div className="flex items-center space-x-2">
                        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                        <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                    </div>


                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-large font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                        <a href="#" className="text-large font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Internships</a>
                        <a href="#" className="text-large font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Companies</a>


                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-md mr-2 border"
                        />
                    </div>


                    <div className="flex items-center space-x-4">
                        <div className="">
                            <IoNotificationsOutline className="mr-4  text-4xl" />

                        </div>
                        <div className="">
                            <FaUser className="mr-4  text-4xl" />
                        </div>
                    </div>
                </div>





                <div className="mt-6 text-2xl font-bold">
                    <h6>1.Personal Details</h6>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthdate">Birthdate</label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                type="text"
                                id="birthdate"
                                name="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="permanentaddress" className="block text-large font-medium">
                                Permanent Address
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="permanent_address"
                                name="permanent_address"
                                value={formData.permanent_address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city" className="block text-large font-medium">City</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="district" className="block text-large font-medium">District</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country" className="block text-large font-medium">Country</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="current_address" className="block text-large font-medium">
                                Current Address
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="current_address"
                                name="current_address"
                                value={formData.current_address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="current_city" className="block text-large font-medium">
                                Current City
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="current_city"
                                name="current_city"
                                value={formData.current_city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentdistrict" className="block text-large font-medium">
                                Current District
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="current_district"
                                name="current_district"
                                value={formData.current_district}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentcountry" className="block text-large font-medium">
                                Current Country
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="current_country"
                                name="current_country"
                                value={formData.current_country}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr />



                    <div className="mt-6 text-2xl font-bold">
                        <h6>2. Educational Details</h6>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                        <div className="form-group">
                            <label htmlFor="education" className="block text-large font-medium">
                                Education
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="institutename" className="block text-large font-medium">
                                School/Institute Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="instituteName"
                                name="instituteName"
                                value={formData.instituteName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="stream" className="block text-large font-medium">
                                Stream
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="stream"
                                name="stream"
                                value={formData.stream}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passoutyear" className="block text-large font-medium">
                                Pass-out Year
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="passOutYear"
                                name="passOutYear"
                                value={formData.passOutYear}
                                onChange={handleChange}
                            />
                        </div>
                    </div>




                    <hr />



                    <div className="mt-6 text-2xl font-bold">
                        <h6>3.Technical Details</h6>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                        <div className="form-group">
                            <label htmlFor="keyskills" className="block text-large font-medium">
                                Key Skills
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-large"
                                id="keyskills"
                                name="keySkills"
                                value={formData.keySkills}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="languages" className="block text-xl font-medium">
                                Languages
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                id="languages"
                                name="languages"
                                value={formData.languages}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="experience" className="block text-xl font-medium">
                                Experience(if any)
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="salaryexpectations" className="block text-xl font-medium">
                                Salary Expectations
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                id="salaryexpectations"
                                name="salaryExpectations"
                                value={formData.salaryExpectations}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectname" className="block text-xl font-medium">
                                Project Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                id="projectname"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectsummary" className="block text-xl font-medium">
                                Project Summary
                            </label>
                            <textarea
                                id="projectsummary"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                rows="4"
                                name="projectSummary"
                                value={formData.projectSummary}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                        style={{marginLeft : "1300px", marginTop: "-100px"}}
                            className=' p-2 text-xl text-white border rounded-md  bg-gray-800 submit-your-application'
                        >   Save Your Details

                        </button>
                    </div>
                        </form> 
                   {/* here is the button for save  */}

                <hr />



                 <form>
                <div className="mt-6 text-2xl font-bold">
                    <h6>4.Upload Documents</h6>
                </div>

                
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="form-group">
                        <label htmlFor="resume" className="block text-xl font-medium">
            Resume
          </label>
          <input
            type="file"
            id="students_resume"
            accept=".pdf, .doc, .docx"
            className="mt-1 p-2 w-full border rounded-md text-xl"
            
          />
                        </div>

                        <div className="form-group col-span-3 md:col-span-1 mt-10">
                            <span className="block text-xl font-large">OR</span>
                        </div>

                        <div className="form-group">
                        <label htmlFor="certification" className="block text-xl font-medium mt-10">
            Certification
          </label>
          <input
            type="file"
            id="certification"
            accept="image/*"
            className="mt-1 p-2 w-full border rounded-md text-xl"
           
          />
                        </div>

                        <div className="form-group">
                            <label htmlFor="profilePicture" className="block text-xl font-medium mt-10">
            Profile Picture
          </label>
          <input
            type="file"
            id="profile_picture"
            accept="image/*"
            className="mt-1 p-2 w-full border rounded-md text-xl"
           
          />
                        </div>
                    </div>
                    <hr />
                    <div className="text-xl flex justify-end m-4">
                         {/* <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800'>Save Your Details</button> */}

                        
                    </div>

                    
                    <div className="form-group">
                            <button type='button'
                             style={{ marginTop: "-400px" }} 
                            className='mt-8 p-2 text-xl text-white border rounded-md bg-red-800' onClick={handleResume}>Create Resume</button>
                        </div>
                </form>
                   
            </div>

        </div >
    );
};

export default Profile;
