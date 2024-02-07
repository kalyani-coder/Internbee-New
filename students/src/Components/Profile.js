import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from'../Assets/yellow_header1.png'


const Profile = () => {

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedPDF, setSelectedPDF] = useState(null);
    const [selectedPDF2, setSelectedPDF2] = useState(null);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [birthdate, setDateOfBirth] = useState('');

    const [permanentaddress, setPermanentAddress] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [country, setCountry] = useState('')

    const [currentaddress, setCurrentAddress] = useState('')
    const [currentcity, setCurrentCity] = useState('')
    const [currentdistrict, setCurrentDistrict] = useState('')
    const [currentcountry, setCurrentCountry] = useState('')
    const [education, setEducation] = useState('')
    const [instituteName, setInstituteName] = useState('')
    const [stream, setStream] = useState('')
    const [passOutYear, setPassOutYear] = useState('')
    const [percentage, setPercentage] = useState('')
    const [contact, setContact] = useState('')

    const [keySkills, setKeySkills] = useState('')
    const [languages, setLanguages] = useState('')
    const [experience, setExperience] = useState('')
    const [salaryExpectations, setSalaryExpectations] = useState('')
    const [projectName, setProjectName] = useState('')
    const [projectSummary, setProjectSummary] = useState('')

    // 12th education details 

    const [education_12, seteducation_12] = useState('')
    const [instituteName_12, setinstituteName_12] = useState('')
    const [stream_12, setstream_12] = useState('')
    const [passOutYear_12, setpassOutYear_12] = useState('')
    const [percentage_12, setpercentage_12] = useState('')

    // 10th education details 
    const [education_10, seteducation_10] = useState('')
    const [instituteName_10, setinstituteName_10] = useState('')
    const [stream_10, setstream_10] = useState('')
    const [passOutYear_10, setpassOutYear_10] = useState('')
    const [percentage_10, setpercentage_10] = useState('')

    // const [userId, setUserId] = useState(null);



    // 12th education details 

    const handleEducation_12Change = (event) => {
        seteducation_12(event.target.value)
    }

    const handleInstitute_12Change = (event) => {
        setinstituteName_12(event.target.value)
    }

    const handleStream_12Change = (event) => {
        setstream_12(event.target.value)
    }
    const handlePassOutYear_12Change = (event) => {
        setpassOutYear_12(event.target.value)
    }
    const handlePercentage_12Change = (event) => {
        setpercentage_12(event.target.value)
    }

    // 10 th education details 

    const handleEducation_10Change = (event) => {
        seteducation_10(event.target.value)
    }

    const handleInstitute_10Change = (event) => {
        setinstituteName_10(event.target.value)
    }

    const handleStream_10Change = (event) => {
        setstream_10(event.target.value)
    }
    const handlePassOutYear_10Change = (event) => {
        setpassOutYear_10(event.target.value)
    }
    const handlePercentage_10Change = (event) => {
        setpercentage_10(event.target.value)
    }


    const handleKeySkills = (event) => {
        setKeySkills(event.target.value);

    }
    const handleLanguages = (event) => {
        setLanguages(event.target.value);


    }
    const handleExperience = (event) => {
        setExperience(event.target.value);

    }

    const handleSalaryExpectations = (event) => {
        setSalaryExpectations(event.target.value);


    }

    const handleProjectName = (event) => {
        setProjectName(event.target.value);

    }

    const handleProjectSummary = (event) => {
        setProjectSummary(event.target.value);
    }



    const handleEducationChange = (event) => {
        setEducation(event.target.value);
    };
    const handleInstituteNameChange = (event) => {
        setInstituteName(event.target.value);

    }
    const handleStreamChange = (event) => {
        setStream(event.target.value);


    }
    const handlePassOutYearChange = (event) => {
        setPassOutYear(event.target.value);
    }

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    }




    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handlePDFChange = (event) => {
        setSelectedPDF(event.target.files[0]);
    };

    const handlePDFChange2 = (event) => {
        setSelectedPDF2(event.target.files[0]);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);

    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);

    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

    }
    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };

    const handlePermanentAddressChange = (event) => {
        setPermanentAddress(event.target.value);

    }



    const handleCityChange = (event) => {
        setCity(event.target.value);

    }
    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
    }
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }


    const handleCurrentAddressChange = (event) => {
        setCurrentAddress(event.target.value);

    }
    const handleCurrentCityChange = (event) => {
        setCurrentCity(event.target.value);


    }
    const handleCurrentDistrictChange = (event) => {
        setCurrentDistrict(event.target.value);


    }
    const handleCurrentCountryChange = (event) => {
        setCurrentCountry(event.target.value);
    }

    const handleContactChange = (event) => {
        setContact(event.target.value)
    }


    const handleUpload = (e) => {
        e.preventDefault();
        if (selectedImage || selectedPDF) {
            const formData = new FormData();
            if (selectedImage) formData.append('image', selectedImage);
            if (selectedPDF) formData.append('pdf', selectedPDF);
            if (selectedPDF) formData.append('pdf2', selectedPDF2);
            formData.append('firstName', firstName)
            formData.append('lastName', lastName)
            formData.append('email', email)
            formData.append('birthdate', birthdate)

            formData.append('permanentaddress', permanentaddress)
            formData.append('city', city)
            formData.append('district', district)
            formData.append('country', country)
            formData.append('currentaddress', currentaddress)
            formData.append('currentCity', currentcity)
            formData.append('currentdistrict', currentdistrict)
            formData.append('currentcountry', currentcountry)
            formData.append('contact' , contact)

            formData.append('education', education)
            formData.append('instituteName', instituteName)
            formData.append('stream', stream)
            formData.append('passOutYear', passOutYear)
            formData.append('percentage', percentage)

            formData.append('education_12', education_12);
            formData.append('instituteName_12', instituteName_12);
            formData.append('stream_12', stream_12);
            formData.append('passOutYear_12', passOutYear_12);
            formData.append('percentage_12', percentage_12);

            formData.append('education_10', education_10)
            formData.append('instituteName_10', instituteName_10)
            formData.append('stream_10', stream_10)
            formData.append('passOutYear_10', passOutYear_10)
            formData.append('percentage_10', percentage_10)


            formData.append('keySkills', keySkills)
            formData.append('languages', languages)
            formData.append('experience', experience)
            formData.append('salaryExpectations', salaryExpectations)
            formData.append('projectName', projectName)
            formData.append('projectSummary', projectSummary)

            const storedUserId = localStorage.getItem('userId');
            formData.append('userId', storedUserId);
            console.log(storedUserId);

            //  https://internbee-backend-apis.onrender.com/api/studentsdetails


            fetch('https://internbee-backend-apis.onrender.com/api/studentsdetails', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log('Files uploaded successfully:', data);
                    alert('Profile Created Successfully', 'success');
                })
                .catch((error) => {
                    console.error('Error uploading files:', error);
                    if (error.message.includes('User already has a profile')) {
                        alert('User already has a profile', 'error');
                    } else {
                        alert('User already has a profile', 'error');
                    }
                });
        }
    };

    const handleProfileIconClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const navigate = useNavigate();

    const handleResume = () => {
        navigate('/Resume');
    };


    // new code start here 





    const handleCreateProfile = () => {

        navigate('/Profile')

    };
    const handleViewProfile = () => {

        navigate('/viewprofile')

    };

    const handleLogout = () => {

        navigate('/login')


    };



    return (
        <div className="">

            <div className="">

                <div className="p-6 flex items-center justify-between border shadow-xl" style={{ backgroundColor: '#FFBD59' }}>
                      <Link to={'/'}>
                     <div className="flex items-center space-x-2"> 
                         <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" style={{width:'15rem'}}/> 
                        {/* <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1> */}
                 </div> 
                 </Link>

                    <div className="flex items-center space-x-6">
                        <Link to="/home" className="text-2xl font-bold focus:text-white focus:border-white focus:border-b-4 hover:text-white">Home</Link>
                        {/* <Link to="/companies" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Companies</Link> */}
                        <Link to="/internship" className="text-2xl font-bold focus:texwhite focus:border-white focus:border-b-4 hover:text-white">Internships</Link>
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
                        <div
                            className="cursor-pointer"
                            onMouseEnter={() => setShowProfileDropdown(true)}
                            onClick={handleProfileIconClick}

                        >
                            <FaUser className="mr-4  text-4xl" />
                            {showProfileDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                                    <div
                                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        onClick={handleCreateProfile}
                                    >
                                        Create Profile
                                    </div>
                                    <div
                                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        onClick={handleViewProfile}
                                    >
                                        View Profile
                                    </div>
                                    <div
                                        className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>





                <div className="mt-6 text-2xl font-bold">
                    <h6>1.Personal Details</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            required
                            onChange={handleFirstNameChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
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
                            onChange={handleDateOfBirthChange}
                            value={birthdate}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="permanentaddress" className="block text-large font-medium">
                            Permanent Address
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="permanentaddress"
                            name="permanentaddress"
                            value={permanentaddress}
                            onChange={handlePermanentAddressChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city" className="block text-large font-medium">City</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="city"
                            name="city"
                            value={city}
                            onChange={handleCityChange}




                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="district" className="block text-large font-medium">District</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="district"
                            name="district"
                            value={district}
                            onChange={handleDistrictChange}



                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country" className="block text-large font-medium">Country</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="country"
                            name="country"
                            value={country}
                            onChange={handleCountryChange}



                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="current_address" className="block text-large font-medium">
                            Current Address
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="currentaddress"
                            name="currentaddress"
                            value={currentaddress}
                            onChange={handleCurrentAddressChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="current_city" className="block text-large font-medium">
                            Current City
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="currentcity"
                            name="currentcity"
                            value={currentcity}
                            onChange={handleCurrentCityChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="currentdistrict" className="block text-large font-medium">
                            Current District
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="currentdistrict"
                            name="currentdistrict"
                            value={currentdistrict}
                            onChange={handleCurrentDistrictChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="currentcountry" className="block text-large font-medium">
                            Current Country
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="currentcountry"
                            name="currentcountry"
                            value={currentcountry}
                            onChange={handleCurrentCountryChange}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contact" className="block text-large font-medium">
                            Contact Number 
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="contact"
                            name="contact"
                            value={contact}
                            onChange={handleContactChange}


                        />
                    </div>
                </div>
                <hr />



                <div className="mt-6 text-2xl font-bold">
                    <h6>2. Educational Details Graduation</h6>
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
                            value={education}
                            onChange={handleEducationChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="institutename" className="block text-large font-medium">
                            Collage Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="instituteName"
                            name="instituteName"
                            value={instituteName}
                            onChange={handleInstituteNameChange}


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
                            value={stream}
                            onChange={handleStreamChange}


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
                            value={passOutYear}
                            onChange={handlePassOutYearChange}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentage" className="block text-large font-medium">
                            Percentage / CGPA
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="percentage"
                            name="percentage"
                            value={percentage}
                            onChange={handlePercentageChange}

                        />
                    </div>
                </div>
                <hr />



                <div className="mt-6 text-2xl font-bold">
                    <h6> Educational Details 12th</h6>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                    <div className="form-group">
                        <label htmlFor="education_12" className="block text-large font-medium">
                            Education 12th
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="education_12"
                            name="education_12"
                            value={education_12}
                            onChange={handleEducation_12Change}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="instituteName_12" className="block text-large font-medium">
                            School/Institute Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="instituteName_12"
                            name="instituteName_12"
                            value={instituteName_12}
                            onChange={handleInstitute_12Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stream_12" className="block text-large font-medium">
                            Stream
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="stream_12"
                            name="stream_12"
                            value={stream_12}
                            onChange={handleStream_12Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passOutYear_12" className="block text-large font-medium">
                            Pass-out Year
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="passOutYear_12"
                            name="passOutYear_12"
                            value={passOutYear_12}
                            onChange={handlePassOutYear_12Change}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentage_12" className="block text-large font-medium">
                            Percentage
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="percentage_12"
                            name="percentage_12"
                            value={percentage_12}
                            onChange={handlePercentage_12Change}

                        />
                    </div>
                </div>
                <hr />

                <div className="mt-6 text-2xl font-bold">
                    <h6> Educational Details 10th</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                    <div className="form-group">
                        <label htmlFor="education_10" className="block text-large font-medium">
                            Education 10th
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="education_10"
                            name="education_10"
                            value={education_10}
                            onChange={handleEducation_10Change}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="instituteName_10" className="block text-large font-medium">
                            School/Institute Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="instituteName_10"
                            name="instituteName_10"
                            value={instituteName_10}
                            onChange={handleInstitute_10Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stream_10" className="block text-large font-medium">
                            Stream
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="stream_10"
                            name="stream_10"
                            value={stream_10}
                            onChange={handleStream_10Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passOutYear_10" className="block text-large font-medium">
                            Pass-out Year
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="passOutYear_10"
                            name="passOutYear_10"
                            value={passOutYear_10}
                            onChange={handlePassOutYear_10Change}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentage_10" className="block text-large font-medium">
                            Percentage
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="percentage_10"
                            name="percentage_10"
                            value={percentage_10}
                            onChange={handlePercentage_10Change}

                        />
                    </div>
                </div>






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
                            value={keySkills}
                            onChange={handleKeySkills}

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
                            value={languages}
                            onChange={handleLanguages}

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
                            value={experience}
                            onChange={handleExperience}
                            placeholder='fresher or 1 year'
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
                            value={salaryExpectations}
                            onChange={handleSalaryExpectations}

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
                            value={projectName}
                            onChange={handleProjectName}

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
                            value={projectSummary}
                            onChange={handleProjectSummary}

                        />
                    </div>
                </div>



                {/* here is the button for save  */}

                <hr />



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
                            accept="application/pdf"
                            onChange={handlePDFChange}
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
                            accept="application/pdf"
                            onChange={handlePDFChange2}
                            className="mt-1 p-2 w-full border rounded-md text-xl"

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profilePicture" className="block text-xl font-medium mt-10">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
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
                        className='mt-8 p-2 text-xl text-white border rounded-md bg-stone-700' onClick={handleResume}>Create Resume</button>
                </div>

                <div>
                    <button onClick={handleUpload}
                        style={{ marginLeft: "1300px", marginTop: "-100px" }}
                        className=' p-2 text-xl text-dark border rounded-md  bg-amber-400 submit-your-application'
                    >   Save Details

                    </button>
                </div>
            </div>

        </div >
    );
};

export default Profile;
