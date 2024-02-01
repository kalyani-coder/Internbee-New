import React, { useState, useEffect } from "react";
import Alert from "../../Alert/Aleart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { enIN } from "date-fns/locale";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../../Footer/Footer";

const PostInternship = () => {
  const [posting, setPosting] = useState(false);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    job_Title: "",
    location: "",
    company_Name: "",
    start_Date: new Date(),
    empName: "",
    empEmail: "",
    empPhone: "",
    end_Date: new Date(),
    job_Type: "Full-time",
    skills: "",
    position: "",
    job_Description: "",
    stipend: "",
    userId: "",
  });

  useEffect(() => {
    // Your existing useEffect logic to fetch user details from localStorage
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStartDateChange = (date) => {
    setFormData({
      ...formData,
      start_Date: date,
    });
  };

  const handleEndDateChange = (date) => {
    setFormData({
      ...formData,
      end_Date: date,
    });
  };


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const empName = localStorage.getItem("empName");
    const number = localStorage.getItem("number");

    if (userId && email && empName && number) {
      setFormData({
        ...formData,
        userId,
        empEmail: email,
        empPhone: number,
        empName,
      });
    } else {
      console.error("Error fetching employer details from localStorage");
      setAlert({
        type: "danger",
        message: "Error fetching employer details from localStorage",
      });
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Fetch employer details from the API
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setAlert({
        type: "danger",
        message: "User not logged in. Please log in to post an internship.",
      });
      return;
    }
  
    const employerDetailsApiUrl = `https://internbee-backend-apis.onrender.com/api/employer/${userId}`;
    const postInternshipApiUrl = "https://internbee-backend-apis.onrender.com/api/postinternship";
  
    try {
      // Fetch employer details
      const employerResponse = await fetch(employerDetailsApiUrl);
      const employerDetails = await employerResponse.json();
  
      console.log("Employer Details:", employerDetails);
  
      // Check paymentStatus
      if (employerDetails.paymentStatus === "") {
        console.log("Payment not accepted. Please complete the payment first.");
        setAlert({
          type: "danger",
          message: "Payment not accepted. Please complete the payment first.",
        });
        return; // Stop the submission if payment is not accepted
      }
  
      // Check if paymentStatus is not "Accepted"
      if (employerDetails.paymentStatus !== "Accepted") {
        console.log("Payment not accepted. Please complete the payment first.");
        setAlert({
          type: "danger",
          message: "Payment not accepted. Please complete the payment first.",
        });
        return; // Stop the submission if paymentStatus is not "Accepted"
      }
  
      // Check if the employer has available internship slots
      if (employerDetails.internshipEnquiry <= 0) {
        console.log('Employer has reached the internship posting limit');
        setAlert({
          type: "danger",
          message: "Employer has reached the internship posting limit",
        });
        return;
      }
  
      console.log("Payment Accepted. Proceeding to post internship.");
  
      // Formatting dates to the desired format
      const formattedStartDate = format(formData.start_Date, "dd/MM/yyyy", {
        locale: enIN,
      });
      const formattedEndDate = format(formData.end_Date, "dd/MM/yyyy", {
        locale: enIN,
      });
  
      setPosting(true);
      const postResponse = await fetch(postInternshipApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          start_Date: formattedStartDate,
          end_Date: formattedEndDate,
        }),
      });
  
      if (postResponse.ok) {
        // Increment the internshipCounter in the employer's details
        const updatedEmployerDetails = {
          ...employerDetails,
          internshipCounter: (employerDetails.internshipCounter || 0) + 1,
          internshipEnquiry: employerDetails.internshipEnquiry - 1, // Decrease available slots
        };
  
        // Update employer details with the incremented internshipCounter
        const updateResponse = await fetch(employerDetailsApiUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEmployerDetails),
        });
  
        if (updateResponse.ok) {
          console.log("Employer internshipCounter updated successfully");
        } else {
          console.error("Error updating employer internshipCounter");
          // Handle the error as needed
        }
  
        // Set other state or perform additional actions as needed
  
        setAlert({
          type: "success",
          message: "Internship submitted successfully",
        });
        setPosting(false);
        setFormData({
          ...formData,
          job_Title: "",
          location: "",
          company_Name: "",
          start_Date: new Date(),
          end_Date: new Date(),
          job_Type: "Full-time",
          skills: "",
          position: "",
          job_Description: "",
          stipend: "",
        });
      } else {
        setAlert({ type: "danger", message: "Failed to submit form data" });
        setPosting(false);
        // Handle errors, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setAlert({
        type: "danger",
        message: "Error during form submission. Please try again later.",
      });
      setPosting(false);
    }
  };
  




  return (

    <>

      <div>
        <Navbar />

      </div>

      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="max-w-3xl mx-auto mt-8 mb-10 p-8 rounded shadow-md"style={{ backgroundColor: '#FFBD59' }} >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Post Internship
          </h2>
          {alert && (
            <Alert type={alert.type}>
              <p className="font-bold">
                {alert.type === "success" ? "Success" : "Error"}
              </p>
              <p>{alert.message}</p>
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-wrap -mx-4"
          >
            {/* Job Title */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="job_Title"
                className="block text-sm font-medium text-black"
              >
                Internship Title:
              </label>
              <input
                type="text"
                id="job_Title"
                name="job_Title"
                value={formData.job_Title}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter Internship title here"
                required
              />
            </div>

            {/* Location */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-black"
              >
                Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter your Internship location here"
                required
              />
            </div>

            {/* Company Name */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="company_Name"
                className="block text-sm font-medium text-black"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="company_Name"
                name="company_Name"
                value={formData.company_Name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter your Company name here"
                required
              />
            </div>

            {/* Start Date */}

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="start_Date"
                className="block text-sm font-medium text-black"
              >
                Start Date:
              </label>
              <DatePicker
                id="start_Date"
                selected={formData.start_Date}
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            {/* End Date */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="end_Date"
                className="block text-sm font-medium text-black"
              >
                End Date:
              </label>
              <DatePicker
                id="end_Date"
                selected={formData.end_Date}
                onChange={handleEndDateChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Job Type */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="job_Type"
                className="block text-sm font-medium text-black"
              >
                Job Type:
              </label>
              <select
                id="job_Type"
                name="job_Type"
                value={formData.job_Type}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              >
                <option value="Full-time">Full Time</option>
                <option value="Part-time">Part Time</option>
              </select>
            </div>

            {/* Skills */}
            <div className="w-full px-4 mb-4">
              <label
                htmlFor="skills"
                className="block text-sm font-medium text-black"
              >
                Skills:
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter required skills here"
              />
            </div>

            {/* Position */}
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-black"
              >
                Position:
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Enter the position here"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                htmlFor="stipend"
                className="block text-sm font-medium text-black"
              >
                Enter Stipend:
              </label>
              <input
                placeholder="Enter Stipend ex 10,000"
                type="text" // Change type to "text" to allow non-numeric characters
                id="stipend"
                name="stipend"
                value={formData.stipend}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Job Description */}
            <div className="w-full px-4 mb-4">
              <label
                htmlFor="job_Description"
                className="block text-sm font-medium text-black"
              >
                Job Description:
              </label>
              <textarea
                id="job_Description"
                name="job_Description"
                value={formData.job_Description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                placeholder="Write Internship description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full px-4 mt-4">
              <button
                type="submit"
                disabled={posting}
                className="bg-black text-amber-300 py-2 px-4 rounded hover:bg-gray-800"
              >
                Post Internship
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PostInternship;
