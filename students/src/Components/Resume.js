import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdClose } from "react-icons/io";

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

    const handleStartDateChange = (date) => {
      setStartDate(date);
    };

    const handleEndDateChange = (date) => {
      setEndDate(date);
    };
    
  const onSubmit = (data) => {
    // Handle form submission with the collected data
    console.log("Form data:", data);
  };


  const onAddExperience = () => {
    const experienceFormData = {
      companyName: watch("fullname"),
      designation: watch("lastname"),
      startDate: watch("startDate"),
      endDate: watch("endDate"),
      location: watch("Expectation"),
      aboutCompany: watch("Career"),
    };
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      experienceFormData,
    ]);
  };
    const onAddPortfolio = () => {
      const portfolioFormData = {
        projectName: watch("Expectation"), // Change this to match the appropriate field
        startDate: watch("startDate"), // Change this to match the appropriate field
        endDate: watch("endDate"), // Change this to match the appropriate field
        projectDescription: watch("Career"), // Change this to match the appropriate field
      };
      setPortfolios((prevPortfolios) => [...prevPortfolios, portfolioFormData]);
    };

    const onAddEducation = () => {
      const educationFormData = {
        name: watch("Name"), // Change this to match the appropriate field
        degree: watch("Degree"), // Change this to match the appropriate field
        institute: watch("Institute"), // Change this to match the appropriate field
        passoutYear: watch("passoutyear"), // Change this to match the appropriate field
      };
      setEducations((prevEducations) => [...prevEducations, educationFormData]);
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

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1 p-8 bg-slate-50">
        <h1 className="text-4xl font-bold">Resume Format </h1>
        <form>
          <h1 className="text-2xl font-bold m-4 ">Personal Information</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="firstname" className="block text-xl font-medium">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="fullname"
                {...register("fullname", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="block text-xl font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="lastname"
                {...register("lastname", {
                  required: "This field is required",
                })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-xl font-medium">
                Email address
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="email"
                {...register("email", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="permanentaddress"
                className="block text-xl font-medium"
              >
                Address
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="permanentaddress"
                {...register("permanentaddress", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="phoneNumber"
                className="block text-xl font-medium"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md text-xl"
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
              <label htmlFor="gender" className="block text-xl font-medium">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                {...register("gender", { required: "Please select a gender" })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="Age" className="block text-xl font-medium">
                Age
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Age"
                {...register("Age", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="currentsalary"
                className="block text-xl font-medium"
              >
                Current Salary
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="currentsalary"
                {...register("currentsalary", {
                  required: "This field is required",
                })}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="Expectation"
                className="block text-xl font-medium"
              >
                Expectation
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Expectation"
                {...register("Expectation", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate" className="block text-xl font-medium">
                Birth Date
              </label>
              <DatePicker
                selected={birthdate}
                onChange={handleBirthdateChange}
                dateFormat="MM/dd/yyyy"
                className="mt-1 p-2 w-full border rounded-md text-xl"
              />
            </div>
            <div className="form-group col-span-4">
              <label htmlFor="Career" className="block text-xl font-medium">
                Career Profile
              </label>
              <textarea
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Career"
                rows="5"
                {...register("Career", { required: "This field is required" })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="Skills" className="block text-xl font-medium">
                Skills
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Skills"
                {...register("Skills", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="level" className="block text-xl font-medium">
                Level
              </label>
              <select
                id="level"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                {...register("level", { required: "Please select a gender" })}
              >
                <option value="">Select level</option>
                <option value="Begineer">Begineer</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className=" from-group text-xl flex ">
              <button
                type="button"
                onClick={() => onAdd()}
                className="mt-8 p-2 text-xl border mr-4 text-white border rounded-md bg-gray-800"
              >
                Add
              </button>
            </div>

            {skills.length > 0 && (
              <div className="mt-8 p-2 text-xl border mr-4 border rounded-md border-black">
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

          <h1 className="text-2xl font-bold m-4 ">Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="Name" className="block text-xl font-medium">
                Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Name"
                {...register("Name", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Degree" className="block text-xl font-medium">
                Degree
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Degree"
                {...register("Degree", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Institute" className="block text-xl font-medium">
                Institute
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-xl"
                id="Institute"
                {...register("Institute", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="passoutyear"
                className="block text-xl font-medium"
              >
                Pass-out Year
              </label>
              <DatePicker
                selected={birthdate}
                onChange={handleBirthdateChange}
                dateFormat="MM/dd/yyyy"
                className="mt-1 p-2 w-full border rounded-md text-xl"
              />
            </div>
            <div className=" from-group text-xl flex ">
              <button
                type="button"
                onClick={() => onAddEducation()}
                className="mt-8 p-2 text-xl border mr-4 text-white border rounded-md bg-gray-800"
              >
                Add Education
              </button>
              {/* Display added educations */}
              {educations.length > 0 && (
                <div className="mt-8 p-2 text-xl border mr-4 border rounded-md border-black">
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
            <h1 className="text-2xl font-bold m-4 ">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="firstname"
                  className="block text-xl font-medium"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                  id="fullname"
                  {...register("fullname", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="block text-xl font-medium">
                  Designation
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
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
                  className="block text-xl font-medium"
                >
                  Stat From
                </label>
                <DatePicker
                  selected={birthdate}
                  onChange={handleBirthdateChange}
                  dateFormat="MM/dd/yyyy"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="birthdate"
                  className="block text-xl font-medium"
                >
                  End on
                </label>
                <DatePicker
                  selected={birthdate}
                  onChange={handleBirthdateChange}
                  dateFormat="MM/dd/yyyy"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="Expectation"
                  className="block text-xl font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                  id="Expectation"
                  {...register("Expectation", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group col-span-4">
                <label htmlFor="Career" className="block text-xl font-medium">
                  About Company
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                  id="Career"
                  rows="5"
                  {...register("Career", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="text-xl flex">
                <button
                  type="button"
                  onClick={onAddExperience}
                  className="mt-8 p-2 text-xl border mr-4 text-white border rounded-md bg-gray-800"
                >
                  Add Experience
                </button>
              </div>
              {/* Display added experiences */}
              {experiences.length > 0 && (
                <div className="mt-8 p-2 text-xl border mr-4 border rounded-md border-black">
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
            <h1 className="text-2xl font-bold m-4 ">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="Expectation"
                  className="block text-xl font-medium"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                  id="Expectation"
                  {...register("Expectation", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="birthdate"
                  className="block text-xl font-medium"
                >
                  Start date
                </label>
                <DatePicker
                  selected={birthdate}
                  onChange={handleBirthdateChange}
                  dateFormat="MM/dd/yyyy"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="birthdate"
                  className="block text-xl font-medium"
                >
                  end Date
                </label>
                <DatePicker
                  selected={birthdate}
                  onChange={handleBirthdateChange}
                  dateFormat="MM/dd/yyyy"
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                />
              </div>

              <div className="form-group col-span-4">
                <label htmlFor="Career" className="block text-xl font-medium">
                  Project Description
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md text-xl"
                  id="Career"
                  rows="5"
                  {...register("Career", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => onAddPortfolio()}
              className="mt-8 p-2 text-xl border mr-4 text-white border rounded-md bg-gray-800"
            >
              Add Portfolio
            </button>
            {/* Display added portfolios */}
            {portfolios.length > 0 && (
              <div className="mt-8 p-2 text-xl border mr-4 border rounded-md border-black">
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

          <div className="text-xl ">
            <button
              type="submit"
              className="mt-8 p-2 text-xl text-white border rounded-md bg-gray-800"
            >
              Save and next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Resume;
