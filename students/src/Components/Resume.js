import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";
import Internal_Navbar from "./UpdatedNav/Internal_Navbar";
import Footer from '../Components/Footer';
import { useEffect } from "react";
const DatePickerInput = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="MM/dd/yyyy"
      className="mt-1 p-2 w-full border rounded-md text-xl"
    />
  );
};
const Resume = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [educations, setEducations] = useState([]);
  const [birthdate, setBirthdate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // ... (other states for skills, experiences, portfolios, educations)
  const handleBirthdateChange = (date) => {
    setBirthdate(date);
  };

  const onAdd = () => {
    const skillsFormData = {
      Skills: watch("Skills"),
      level: watch("level"),
    };
    setSkills((prevSkills) => [...prevSkills, skillsFormData]);
  };
  const onDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/resume');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  const handleSave = async () => {
    const formData = {
      personalInfo: {
        fullname: watch("fullname"),
        lastname: watch("lastname"),
        email: watch("email"),
        permanentaddress: watch("permanentaddress"),
        phoneNumber: watch("phoneNumber"),
        gender: watch("gender"),
        birthdate: birthdate,
        expectation: watch("Expectation"),
        careerProfile: watch("Career"),
      },
      skills: skills,
      educations: educations,
      experiences: experiences,
    };

    try {
      const response = await fetch('http://localhost:8000/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Data saved successfully, you can update state or show a success message
        console.log('Data saved successfully');
      } else {
        // Data not saved, handle the error
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div className=" bg-gray-50">
      <Internal_Navbar />
      <div className="flex justify-center relative top-14 mb-32">
        <div className="w-2/3 border border-black p-2 bg-white mt-[40px]">
          <div className="">
            <div className="flex-1 p-8">
              <h1 className="text-3xl font-bold">Resume Format </h1>
              <form>
                <h1 className="text-xl font-bold m-4 ">Personal Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                  <div className="form-group">
                    <label
                      htmlFor="firstname"
                      className="block text-l font-medium"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="fullname"
                      {...register("fullname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="lastname"
                      className="block text-l font-medium"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="lastname"
                      {...register("lastname", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="block text-l font-medium">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="email"
                      {...register("email", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="permanentaddress"
                      className="block text-l font-medium"
                    >
                      Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="permanentaddress"
                      {...register("permanentaddress", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-l font-medium"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/, // Example pattern for a 10-digit phone number
                          message: "Invalid phone number format",
                        },
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender" className="block text-l font-medium">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("gender", {
                        required: "Please select a gender",
                      })}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="currentsalary"
                      className="block text-l font-medium"
                    >
                      Current Salary/month<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="currentsalary"
                      {...register("currentsalary", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="Expectation"
                      className="block text-l font-medium"
                    >
                      Expectation<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="Expectation"
                      {...register("Expectation", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="birthdate"
                      className="block text-l font-medium"
                    >
                      Birth Date<span className="text-red-500">*</span>
                    </label>
                    <DatePicker
                      selected={birthdate}
                      onChange={handleBirthdateChange}
                      dateFormat="MM/dd/yyyy"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">

                  <div className="form-group col-span-4">
                    <label htmlFor="Career" className="block text-l font-medium">
                      Career Profile<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="Career"
                      rows="5"
                      {...register("Career", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
                  <div className="form-group">
                    <label htmlFor="Skills" className="block text-l font-medium">
                      Skills<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      id="Skills"
                      {...register("Skills", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="level" className="block text-l font-medium">
                      Level<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="level"
                      className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      {...register("level", {
                        required: "Please select a gender",
                      })}
                    >
                      <option value="">Select level</option>
                      <option value="Begineer">Begineer</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className=" from-group text-l relative top-[33%]">
                  <button
                    type="button"
                    onClick={() => onAdd()}
                    className="p-2 text-lg text-white border rounded-md bg-amber-500 hover:bg-black"
                  >
                    Add
                  </button>
                </div>
                  {skills.length > 0 && (
                    <div className="mt-8 p-2 text-xl mr-4 border rounded-md border-black">
                      <h2>Skills List</h2>
                      <ul>
                        {skills.map((skill, index) => (
                          <li
                            key={index}
                            className="bg-slate-100 flex items-center mt-2"
                          >
                            {`${skill.Skills} (${skill.level}) `}
                            <IoMdClose onClick={() => onDeleteSkill(index)} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
               
                <hr/>
                <div>
                  <h1 className="text-xl font-bold m-4 ">Education</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
                    <div className="form-group">
                      <label htmlFor="Name" className="block text-l font-medium">
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Name"
                        {...register("Name", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="Degree"
                        className="block text-l font-medium"
                      >
                        Degree<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Degree"
                        {...register("Degree", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="Institute"
                        className="block text-l font-medium"
                      >
                        Institute<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Institute"
                        {...register("Institute", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="percentage"
                        className="block text-l font-medium"
                      >
                        Percentage / CGPA<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="percentage"
                        name="percentage"
                      // value={percentage}
                      // onChange={handlePercentageChange}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label
                        htmlFor="passoutyear"
                        className="block text-l font-medium"
                      >
                        Year<span className="text-red-500">*</span>
                      </label>
                      <DatePicker
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        dateFormat="MM/dd/yyyy"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-xl"
                      />
                    </div>
                  </div>
                  <hr/>
                  {/* <h1 className="text-2xl font-bold m-4 ">Education</h1> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4"></div>
                  <div className="mt-6 text-xl font-bold">
                    <h6> Educational Details 12th</h6>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
                    <div className="form-group">
                      <label
                        htmlFor="education_12"
                        className="block text-l font-medium"
                      >
                        Education 12th<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="education_12"
                        name="education_12"
                      // value={education_12}
                      // onChange={handleEducation_12Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="instituteName_12"
                        className="block text-l font-medium"
                      >
                        School/Institute Name
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="instituteName_12"
                        name="instituteName_12"
                      // value={instituteName_12}
                      // onChange={handleInstitute_12Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="stream_12"
                        className="block text-l font-medium"
                      >
                        Stream<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="stream_12"
                        name="stream_12"
                      // value={stream_12}
                      // onChange={handleStream_12Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="passOutYear_12"
                        className="block text-l font-medium"
                      >
                        Year<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="passOutYear_12"
                        name="passOutYear_12"
                      // value={passOutYear_12}
                      // onChange={handlePassOutYear_12Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="percentage_12"
                        className="block text-l font-medium"
                      >
                        Percentage<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="percentage_12"
                        name="percentage_12"
                      // value={percentage_12}
                      // onChange={handlePercentage_12Change}
                      />
                    </div>
                  </div>
                  <hr/>
                  <div className="mt-6 text-xl font-bold">
                    <h6> Educational Details 10th</h6>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
                    <div className="form-group">
                      <label
                        htmlFor="education_10"
                        className="block text-large font-medium"
                      >
                        Education 10th<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="education_10"
                        name="education_10"
                      // value={education_10}
                      // onChange={handleEducation_10Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="instituteName_10"
                        className="block text-large font-medium"
                      >
                        School/Institute Name
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="instituteName_10"
                        name="instituteName_10"
                      // value={instituteName_10}
                      // onChange={handleInstitute_10Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="stream_10"
                        className="block text-large font-medium"
                      >
                        Stream<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="stream_10"
                        name="stream_10"
                      // value={stream_10}
                      // onChange={handleStream_10Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="passOutYear_10"
                        className="block text-large font-medium"
                      >
                        Year<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="passOutYear_10"
                        name="passOutYear_10"
                      // value={passOutYear_10}
                      // onChange={handlePassOutYear_10Change}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="percentage_10"
                        className="block text-large font-medium"
                      >
                        Percentage<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-large"
                        id="percentage_10"
                        name="percentage_10"
                      // value={percentage_10}
                      // onChange={handlePercentage_10Change}
                      />
                    </div>
                  </div>
                  <hr/>
                  <div className=" from-group text-xl flex ">
                    {/* <button
             type="button"
             onClick={() => onAddEducation()}
             className="mt-8 p-2 text-xl border mr-4 text-white border rounded-md bg-gray-800"
           >
             Add Education
           </button> */}
                    {/* Display added educations */}
                    {educations.length > 0 && (
                      <div className="mt-8 p-2 text-l mr-4 border rounded-md border-black">
                        <h2>Educations List</h2>
                        <ul>
                          {educations.map((education, index) => (
                            <li
                              key={index}
                              className="bg-slate-100 flex items-center mt-2"
                            >
                              {/* Display education details */}
                              {`${education.name} - ${education.degree} at ${education.institute}, Year: ${education.passoutYear}`}
                              {/* Include other details as needed */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <form>
                  <h1 className="text-xl font-bold m-4 ">Experience</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
                    <div className="form-group">
                      <label
                        htmlFor="firstname"
                        className="block text-l font-medium"
                      >
                        Company Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="fullname"
                        {...register("fullname", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="lastname"
                        className="block text-l font-medium"
                      >
                        Designation<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="lastname"
                        {...register("lastname", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                    <div className="form-group">
                      <label
                        htmlFor="birthdate"
                        className="block text-l font-medium"
                      >
                        Start From<span className="text-red-500">*</span>
                      </label>
                      <DatePicker
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        dateFormat="MM/dd/yyyy"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="birthdate"
                        className="block text-l font-medium"
                      >
                        End on<span className="text-red-500">*</span>
                      </label>
                      <DatePicker
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        dateFormat="MM/dd/yyyy"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="Expectation"
                        className="block text-l font-medium"
                      >
                        Location<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Expectation"
                        {...register("Expectation", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group col-span-4">
                      <label
                        htmlFor="Career"
                        className="block text-l font-medium"
                      >
                        About Company<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Career"
                        rows="5"
                        {...register("Career", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    {/* Display added experiences */}
                    {experiences.length > 0 && (
                      <div className="mt-8 p-2 text-xl mr-4 border rounded-md border-black">
                        <h2>Experiences List</h2>
                        <ul>
                          {experiences.map((experience, index) => (
                            <li
                              key={index}
                              className="bg-slate-100 flex items-center mt-2"
                            >
                              {/* Display experience details */}
                              {/* For example: */}
                              {`${experience.companyName} - ${experience.designation}`}
                              {/* Include other details as needed */}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <h1 className="text-xl font-bold m-4 ">Portfolio</h1>
                  <div className="ResponsiveResume grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
                    <div className="form-group">
                      <label
                        htmlFor="Expectation"
                        className="block text-l font-medium"
                      >
                        Project Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Expectation"
                        {...register("Expectation", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="birthdate"
                        className="block text-l font-medium"
                      >
                        Start date<span className="text-red-500">*</span>
                      </label>
                      <DatePicker
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        dateFormat="MM/dd/yyyy"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="birthdate"
                        className="block text-l font-medium"
                      >
                        End Date<span className="text-red-500">*</span>
                      </label>
                      <DatePicker
                        selected={birthdate}
                        onChange={handleBirthdateChange}
                        dateFormat="MM/dd/yyyy"
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                      />
                    </div>
                    <div className="form-group col-span-4">
                      <label
                        htmlFor="Career"
                        className="block text-l font-medium"
                      >
                        Project Description<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="mt-1 p-2 w-full border-1 border-amber-300 rounded-md text-l"
                        id="Career"
                        rows="5"
                        {...register("Career", {
                          required: "This field is required",
                        })}
                      />
                    </div>
                  </div>
                  {/* Display added portfolios */}
                  {portfolios.length > 0 && (
                    <div className="mt-8 p-2 text-xl mr-4 border rounded-md border-black">
                      <h2>Portfolios List</h2>
                      <ul>
                        {portfolios.map((portfolio, index) => (
                          <li
                            key={index}
                            className="bg-slate-100 flex items-center mt-2"
                          >
                            {/* Display portfolio details */}
                            {`${portfolio.projectName} - ${portfolio.startDate} to ${portfolio.endDate}`}
                            {/* Include other details as needed */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </form>
                <div className="text-xl flex justify-center">
                  <button
                    type="submit"
                    className="mt-8 p-2 text-xl text-white border rounded-md bg-amber-500 hover:bg-black"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Resume;
