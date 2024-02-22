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
    <div className="lex justify-items-center">
    <div className="w-2/3 border border-black p-2 bg-gray-50 shadow-lg mt-[40px] ml-[250px]">
    <div className="">
      <div className="flex-1 p-8 bg-slate-50">
        <h1 className="text-3xl font-bold">Resume Format </h1>
        <form>
          <h1 className="text-xl font-bold m-4 ">Personal Information</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="firstname" className="block text-l font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="fullname"
                {...register("fullname", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="block text-l font-medium">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
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
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="email"
                {...register("email", { required: "This field is required" })}
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
                className="mt-1 p-2 w-full border rounded-md text-l"
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
                className="mt-1 p-2 w-full border rounded-md text-l"
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
                className="mt-1 p-2 w-full border rounded-md text-l"
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
              <label htmlFor="Age" className="block text-l font-medium">
                Age<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Age"
                {...register("Age", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="currentsalary"
                className="block text-l font-medium"
              >
                Current Salary<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
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
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Expectation"
                {...register("Expectation", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate" className="block text-l font-medium">
                Birth Date<span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={birthdate}
                onChange={handleBirthdateChange}
                dateFormat="MM/dd/yyyy"
                className="mt-1 p-2 w-full border rounded-md text-l"
              />
            </div>
            <div className="form-group col-span-4">
              <label htmlFor="Career" className="block text-l font-medium">
                Career Profile<span className="text-red-500">*</span>
              </label>
              <textarea
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Career"
                rows="5"
                {...register("Career", { required: "This field is required" })}
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
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Skills"
                {...register("Skills", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="level" className="block text-l font-medium">
                Level<span className="text-red-500">*</span>
              </label>
              <select
                id="level"
                className="mt-1 p-2 w-full border rounded-md text-l"
                {...register("level", { required: "Please select a gender" })}
              >
                <option value="">Select level</option>
                <option value="Begineer">Begineer</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className=" from-group text-l flex ">
              <button
                type="button"
                onClick={() => onAdd()}
                className="mt-8 p-2 text-lg border mr-4 text-white border rounded-md bg-gray-800"
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
          <div>
          <h1 className="text-xl font-bold m-4 ">Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
            <div className="form-group">
              <label htmlFor="Name" className="block text-l font-medium">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Name"
                {...register("Name", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Degree" className="block text-l font-medium">
                Degree<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Degree"
                {...register("Degree", { required: "This field is required" })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Institute" className="block text-l font-medium">
                Institute<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md text-l"
                id="Institute"
                {...register("Institute", {
                  required: "This field is required",
                })}
              />
            </div>
            <div className="form-group">
                        <label htmlFor="percentage" className="block text-l font-medium">
                            Percentage / CGPA<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="percentage"
                            name="percentage"
                            // value={percentage}
                            // onChange={handlePercentageChange}

                        />
                    </div>
            <div className="form-group">
              <label
                htmlFor="passoutyear"
                className="block text-l font-medium"
              >
                Pass-out Year<span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={birthdate}
                onChange={handleBirthdateChange}
                dateFormat="MM/dd/yyyy"
                className="mt-1 p-2 w-full border rounded-md text-xl"
              />
            </div>
            </div>

            {/* <h1 className="text-2xl font-bold m-4 ">Education</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4">
          
            </div>
            <div className="mt-6 text-xl font-bold">
                    <h6> Educational Details 12th</h6>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                    <div className="form-group">
                        <label htmlFor="education_12" className="block text-l font-medium">
                            Education 12th<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-l"
                            id="education_12"
                            name="education_12"
                            // value={education_12}
                            // onChange={handleEducation_12Change}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="instituteName_12" className="block text-l font-medium">
                            School/Institute Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-l"
                            id="instituteName_12"
                            name="instituteName_12"
                            // value={instituteName_12}
                            // onChange={handleInstitute_12Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stream_12" className="block text-l font-medium">
                            Stream<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-l"
                            id="stream_12"
                            name="stream_12"
                            // value={stream_12}
                            // onChange={handleStream_12Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passOutYear_12" className="block text-l font-medium">
                            Pass-out Year<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-l"
                            id="passOutYear_12"
                            name="passOutYear_12"
                            // value={passOutYear_12}
                            // onChange={handlePassOutYear_12Change}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentage_12" className="block text-l font-medium">
                            Percentage<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-l"
                            id="percentage_12"
                            name="percentage_12"
                            // value={percentage_12}
                            // onChange={handlePercentage_12Change}

                        />
                    </div>
                </div>
                
                <div className="mt-6 text-xl font-bold">
                    <h6> Educational Details 10th</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
                    <div className="form-group">
                        <label htmlFor="education_10" className="block text-large font-medium">
                            Education 10th<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="education_10"
                            name="education_10"
                            // value={education_10}
                            // onChange={handleEducation_10Change}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="instituteName_10" className="block text-large font-medium">
                            School/Institute Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="instituteName_10"
                            name="instituteName_10"
                            // value={instituteName_10}
                            // onChange={handleInstitute_10Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stream_10" className="block text-large font-medium">
                            Stream<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="stream_10"
                            name="stream_10"
                            // value={stream_10}
                            // onChange={handleStream_10Change}


                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passOutYear_10" className="block text-large font-medium">
                            Pass-out Year<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="passOutYear_10"
                            name="passOutYear_10"
                            // value={passOutYear_10}
                            // onChange={handlePassOutYear_10Change}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="percentage_10" className="block text-large font-medium">
                            Percentage<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md text-large"
                            id="percentage_10"
                            name="percentage_10"
                            // value={percentage_10}
                            // onChange={handlePercentage_10Change}

                        />
                    </div>
                </div>
            
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
                <div className="mt-8 p-2 text-l border mr-4 border rounded-md border-black">
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
                  id="fullname"
                  {...register("fullname", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname" className="block text-l font-medium">
                  Designation<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-l"
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
                  id="Expectation"
                  {...register("Expectation", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="form-group col-span-4">
                <label htmlFor="Career" className="block text-l font-medium">
                  About Company<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md text-l"
                  id="Career"
                  rows="5"
                  {...register("Career", {
                    required: "This field is required",
                  })}
                />
              </div>
              <div className="text-xl flex">
                {/* <button
                  type="button"
                  onClick={onAddExperience}
                  className="mt-8 p-2 text-l border mr-4 text-white border rounded-md bg-gray-800"
                >
                  Add Experience
                </button> */}
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
            <h1 className="text-xl font-bold m-4 ">Portfolio</h1>
            <div className="ResponsiveResume grid grid-cols-1 md:grid-cols-4 gap-10 m-4">
              <div className="form-group">
                <label
                  htmlFor="Expectation"
                  className="block text-l font-medium"
                >
                  Project Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md text-l"
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
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
                  className="mt-1 p-2 w-full border rounded-md text-l"
                />
              </div>

              <div className="form-group col-span-4">
                <label htmlFor="Career" className="block text-l font-medium">
                  Project Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md text-l"
                  id="Career"
                  rows="5"
                  {...register("Career", {
                    required: "This field is required",
                  })}
                />
              </div>
            </div>
            {/* <button
              type="button"
              onClick={() => onAddPortfolio()}
              className="mt-8 p-2 text-l border mr-4 text-white border rounded-md bg-gray-800"
            >
              Add Portfolio
            </button> */}
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
              Save 
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Resume;
