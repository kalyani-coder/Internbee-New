import React, { useState } from "react";

const NewCreateProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobtitle: "",
    companyEmail: "",
    companyPhoneNumber: "",
    companyAddress: "",
    companyName: "",
    companyLocation: "",
    Description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    // Add logic for form submission or API call here
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-amber-300 pl-7 border rounded-md border-black">
      
        <>
          <h2 className="text-3xl font-semibold mb-5 content">
            Create Profile
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-1">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded-md w-full border-black"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="jobtitle"
                    className="block text-sm font-medium text-black"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobtitle"
                    name="jobtitle"
                    value={profileData.jobtitle}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <div className="grid grid-cols-2 gap-1">
                <div className="mb-4">
                  <label
                    htmlFor="companyEmail"
                    className="block text-sm font-medium text-black"
                  >
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={profileData.companyEmail}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyPhoneNumber"
                    className="block text-sm font-medium text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="companyPhoneNumber"
                    name="companyPhoneNumber"
                    value={profileData.companyPhoneNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyAddress"
                    className="block text-sm font-medium text-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    value={profileData.companyAddress}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>

            {/* Company Details Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Company Details</h3>
              <div className="grid grid-cols-2 gap-1">
                <div className="mb-4">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-black"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={profileData.companyName}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="companyLocation"
                    className="block text-sm font-medium text-black"
                  >
                    Company Location
                  </label>
                  <input
                    type="text"
                    id="companyLocation"
                    name="companyLocation"
                    value={profileData.companyLocation}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="mb-4 col-span-2">
                  <label
                    htmlFor="Discription"
                    className="block text-sm font-medium text-black"
                  >
                    Company Description
                  </label>
                  <textarea
                    id="Discription"
                    name="Discription"
                    value={profileData.Discription}
                    onChange={handleChange}
                    className="mt-1 p-2 border border-black rounded-md w-full"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
            </div>

            {/* Profile Picture Section */}
            {/* <div>
          <h3 className="text-xl font-semibold mb-2">Profile Picture</h3>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-sm font-medium text-black">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 p-2 border border-black rounded-md w-full"
              style={{width:"60%"}}
            />
          </div>
        </div> */}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </>
    
    </div>
  );
};

export default NewCreateProfile;
