import React, { useEffect, useState } from "react";
import axios from 'axios';
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import "./ViewResume.css";

const ViewResume = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editModePersonalInformation, setEditModePersonalInformation] = useState(false);
  const [editModeEducation, setEditModeEducation] = useState(false);
  const [editModeExperience, setEditModeExperience] = useState(false);
  const [editModePortfolio, setEditModePortfolio] = useState(false);
  const [personalInformation, setPersonalInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    careerProfile: '',
    skills: []
  });

  const [education, setEducation] = useState({
    Name: '',
    education: '',
    institute: '',
    passOutYear: '',
    percentage: ''
  });
  const [education2, setEducation2] = useState({
    Name2: '',
    education2: '',
    institute2: '',
    passOutYear2: '',
    percentage2: ''
  });
  const [experience, setExperience] = useState({
    companyName: '',
    designation: '',
    location: '',
    aboutCompany: ''
  });
  const [portfolio, setPortfolio] = useState({
    projectname: '',
    projectDescription: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const studentId = localStorage.getItem("userId");

      if (!studentId) {
        setError("No student ID found in localStorage");
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/newresume/student/${studentId}`);
        setResume(response.data); // Assuming response.data is the resume object
        setPersonalInformation(response.data.personalInformation);
        setEducation(response.data.education);
        setEducation2(response.data.education2);
        setExperience(response.data.experience);
        setPortfolio(response.data.portfolio);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  const toggleEditModeEducation = () => {
    setEditModeEducation(!editModeEducation);
  };

  const toggleEditModeExperience = () => {
    setEditModeExperience(!editModeExperience);
  };

  const toggleEditModePortfolio = () => {
    setEditModePortfolio(!editModePortfolio);
  };

  const handleInputChange = (section, e) => {
    const { name, value } = e.target;

    switch (section) {
      case 'personalInformation':
        if (name === 'skills') {
          // Split the input value into an array of skills
          const skillsArray = value.split(',').map(skill => skill.trim());
          setPersonalInformation(prevState => ({
            ...prevState,
            skills: skillsArray
          }));
        } else {
          setPersonalInformation(prevState => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'education':
        setEducation(prevState => ({
          ...prevState,
          [name]: value
        }));
        break;
      case 'education2':
        setEducation2(prevState => ({
          ...prevState,
          [name]: value
        }));
        break;
      case 'experience':
        setExperience(prevState => ({
          ...prevState,
          [name]: value
        }));
        break;
      case 'portfolio':
        setPortfolio(prevState => ({
          ...prevState,
          [name]: value
        }));
        break;
      default:
        break;
    }
  };


  const handleSaveChanges = (section) => {
    const studentId = localStorage.getItem("userId");
    let dataToUpdate = {};

    switch (section) {
      case 'personalInformation':
        dataToUpdate = { personalInformation };
        break;
      case 'education':
        dataToUpdate = { education, education2 };
        break;
      case 'experience':
        dataToUpdate = { experience };
        break;
      case 'portfolio':
        dataToUpdate = { portfolio };
        break;
      default:
        break;
    }

    axios.patch(`http://localhost:8000/api/newresume/${studentId}`, dataToUpdate, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Data update Successfully', response.data);
        switch (section) {
          case 'personalInformation':
            setEditModePersonalInformation(false);
            break;
          case 'education':
            setEditModeEducation(false);
            break;
          case 'experience':
            setEditModeExperience(false);
            break;
          case 'portfolio':
            setEditModePortfolio(false);
            break;
          default:
            break;
        }
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Handle error state or display a message to the user
      });
  };


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!resume) {
    return <p>No resume data available</p>;
  }

  // Destructure resume object for easier access
  // const { personalInformation: pi } = resume;

  return (
    <div className="bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-24 mb-32">
        <div className="max-w-5xl w-full bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Resume</h1>
          <div className="printreusme border-2 border-black p-4">
            {editModePersonalInformation ? (
              <>
                <div className="flex gap-14">
                  <div className="p-2">
                    <input
                      type="text"
                      name="firstName"
                      value={personalInformation.firstName}
                      onChange={(e) => handleInputChange('personalInformation', e)}
                      className="border-2 border-amber-500 p-2"
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      name="lastName"
                      value={personalInformation.lastName}
                      onChange={(e) => handleInputChange('personalInformation', e)}
                      className="border-2 border-amber-500 p-2"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="">
                    <div>
                      <input
                        type="text"
                        name="email"
                        value={personalInformation.email}
                        onChange={(e) => handleInputChange('personalInformation', e)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={personalInformation.phoneNumber}
                        onChange={(e) => handleInputChange('personalInformation', e)}
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="gender"
                      value={personalInformation.gender}
                      onChange={(e) => handleInputChange('personalInformation', e)}
                    />
                    <input
                      type="text"
                      name="careerProfile"
                      value={personalInformation.careerProfile}
                      onChange={(e) => handleInputChange('personalInformation', e)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="skills"
                      value={personalInformation.skills.join(', ')}
                      onChange={(e) => handleInputChange('personalInformation', e)}
                    />
                  </div>
                </div>
                <button onClick={() => handleSaveChanges('personalInformation')}>Save</button>
              </>
            ) : (
              <>
                <div className="p-2 text-lg">
                  <strong> <p>{personalInformation.firstName} {personalInformation.lastName}</p></strong>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p>{personalInformation.email}</p>
                    <p>{personalInformation.phoneNumber}</p>
                  </div>
                  <div>
                    <p>{personalInformation.gender}</p>
                    <p>{personalInformation.careerProfile}</p>
                  </div>
                  <div className="relative right-14">
                    <p>Skills: {personalInformation.skills.join(', ')}</p>
                  </div>
                </div>

                <p
                  className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 sm:text-left"
                  onClick={() => setEditModePersonalInformation(true)}
                >
                  Edit
                </p>
              </>
            )}

            <hr />
            <div className="mb-3 mt-3">
              <div className="p-1">
                <h2 className="text-xl font-semibold">Education</h2>
                {editModeEducation ? (
                  <>
                    <input
                      type="text"
                      name="Name"
                      value={education.Name}
                      onChange={(e) => handleInputChange('education', e)}
                    />
                    <input
                      type="text"
                      name="education"
                      value={education.education}
                      onChange={(e) => handleInputChange('education', e)}
                    />
                    <input
                      type="text"
                      name="institute"
                      value={education.institute}
                      onChange={(e) => handleInputChange('education', e)}
                    />
                    <input
                      type="text"
                      name="passOutYear"
                      value={education.passOutYear}
                      onChange={(e) => handleInputChange('education', e)}
                    />
                    <input
                      type="text"
                      name="percentage"
                      value={education.percentage}
                      onChange={(e) => handleInputChange('education', e)}
                    />
                    {education2 && (
                      <>
                        <input
                          type="text"
                          name="Name2"
                          value={education2.Name2}
                          onChange={(e) => handleInputChange('education2', e)}
                        />
                        <input
                          type="text"
                          name="education2"
                          value={education2.education2}
                          onChange={(e) => handleInputChange('education2', e)}
                        />
                        <input
                          type="text"
                          name="institute2"
                          value={education2.institute2}
                          onChange={(e) => handleInputChange('education2', e)}
                        />
                        <input
                          type="text"
                          name="passOutYear2"
                          value={education2.passOutYear2}
                          onChange={(e) => handleInputChange('education2', e)}
                        />
                        <input
                          type="text"
                          name="percentage2"
                          value={education2.percentage2}
                          onChange={(e) => handleInputChange('education2', e)}
                        />
                      </>
                    )}
                    <button onClick={() => handleSaveChanges('education')}>Save</button>
                  </>
                ) : (
                  <>
                    <p>{education.Name} {education.education} {education.percentage}</p>
                    <p>{education.institute} {education.passOutYear}</p>
                    {education2 && (
                      <>
                        <p>{education2.Name2} {education2.education2} {education2.percentage2}</p>
                        <p>{education2.institute2} {education2.passOutYear2}</p>
                      </>
                    )}
                    <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 sm:text-left"
                      onClick={toggleEditModeEducation}>
                      Edit
                    </p>
                  </>
                )}
              </div>
            </div>
            <hr />
            <div className="mb-3 mt-3">
              {editModeExperience ? (
                <>
                  <input
                    type="text"
                    name="companyName"
                    value={experience.companyName}
                    onChange={(e) => handleInputChange('experience', e)}
                  />
                  <input
                    type="text"
                    name="designation"
                    value={experience.designation}
                    onChange={(e) => handleInputChange('experience', e)}
                  />
                  <input
                    type="text"
                    name="location"
                    value={experience.location}
                    onChange={(e) => handleInputChange('experience', e)}
                  />
                  <textarea
                    name="aboutCompany"
                    value={experience.aboutCompany}
                    onChange={(e) => handleInputChange('experience', e)}
                  />
                  <button onClick={() => handleSaveChanges('experience')}>Save</button>
                </>
              ) : (
                <>
                  {experience && experience.companyName ? (
                    <>
                      <h2 className="text-xl font-semibold">Experience</h2>
                      <p>{experience.companyName}</p>
                      <p>{experience.location}</p>
                      <p>{experience.designation}</p>
                      <p>{experience.aboutCompany}</p>
                      <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 sm:text-left"
                        onClick={toggleEditModeExperience}>
                        Edit
                      </p>
                    </>
                  ) : (
                    <p>No experience available</p>
                  )}
                </>
              )}
            </div>
            <hr />
            <div className="mb-3 mt-3">
              <div className="p-1">
                {editModePortfolio ? (
                  <>
                    <input
                      type="text"
                      name="projectname"
                      value={portfolio.projectname}
                      onChange={(e) => handleInputChange('portfolio', e)}
                    />
                    <textarea
                      name="projectDescription"
                      value={portfolio.projectDescription}
                      onChange={(e) => handleInputChange('portfolio', e)}
                    />
                    <button onClick={() => handleSaveChanges('portfolio')}>Save</button>
                  </>
                ) : (
                  <>
                    {portfolio && portfolio.projectname ? (
                      <>
                        <h2 className="text-xl font-semibold">Portfolio</h2>
                        <p>{portfolio.projectname}</p>
                        <p>{portfolio.projectDescription}</p>
                        <p className="text-amber-500 underline text-lg sm:text-xl hover:text-black cursor-pointer mt-2 sm:mt-0 sm:text-left"
                          onClick={toggleEditModePortfolio}>
                          Edit
                        </p>
                      </>
                    ) : (
                      <p>No portfolio available</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default ViewResume;
