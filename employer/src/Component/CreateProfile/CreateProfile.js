import React, { useState, useEffect } from "react";

const ProfilePage = () => {
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
    description: "",
  });

  const [firstTimeVisit, setFirstTimeVisit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/employers/userId/${userId}`
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.employer) {
          const userData = responseData.employer;
          const formattedUserData = {
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            jobtitle: userData.jobtitle || "",
            companyEmail: userData.companyEmail || "",
            companyPhoneNumber: userData.companyPhoneNumber || "",
            companyAddress: userData.companyAddress || "",
            companyName: userData.companyName || "",
            companyLocation: userData.companyLocation || "",
            description: userData.Discription || "",
          };
          setProfileData(formattedUserData);
        } else {
          setFirstTimeVisit(true);
          alert("Please fill in your profile details");
        }
      } else {
        setFirstTimeVisit(true);
        alert("Please fill in your profile details");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      alert("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setProfileData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    try {
      const response = await fetch("http://localhost:8000/employers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId || null,
          ...profileData,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!userId && data.userId) {
          localStorage.setItem("userId", data.userId);
        }

        console.log("Profile data submitted successfully");
        alert("Profile data submitted successfully");
        setProfileData({
          firstName: "",
          lastName: "",
          email: "",
          jobtitle: "",
          companyEmail: "",
          companyPhoneNumber: "",
          companyAddress: "",
          companyName: "",
          companyLocation: "",
          description: "",
        });
      } else {
        console.error("Failed to submit profile data:", response.statusText);
        alert("Failed to submit profile data");
      }
    } catch (error) {
      console.error("Error submitting profile data:", error.message);
      alert("Error submitting profile data");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-amber-300 pl-7 border rounded-md border-black">
      {loading ? (
        // Show spinner while fetching data
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {firstTimeVisit && (
            <div className="bg-white p-4 border rounded-md mb-4">
              <h3 className="text-xl font-semibold mb-2">
                Welcome! Please fill in your profile details
              </h3>
              {/* Render a form here similar to the main form for the user to fill in their details */}
              {/* Include input fields, etc. */}
              {/* Use handleChange and handleSubmit functions for this form */}
            </div>
          )}
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
      )}
    </div>
  );
};

export default ProfilePage;
