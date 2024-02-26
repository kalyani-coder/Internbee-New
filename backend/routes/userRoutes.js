const express = require("express");
const User = require("../models/user"); // Import the user schema
const jwt = require("jsonwebtoken");
const StudentInfo = require("../models/student");



const router = express.Router();
const jwtKey = "amar";

// Middleware to check JWT token
const verifyToken = (req, res, next) => {
  const token = req.query.token; // Assuming the token is sent as a query parameter

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};


router.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedFields = req.body;

  try {
    // Update user only if the token is valid
    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.patch('/:userId/freePackage', async (req, res) => {
  const userId = req.params.userId;

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the freePackage object with the data from the request body
    user.freePackage = req.body;

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating freePackage:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete("/:id",  async (req, res) => {
  const userId = req.params.id;

  try {
    // Delete user only if the token is valid
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/studentinfo" , async(req,res)=>{
   try {
    const allStudents = await StudentInfo.find();
    res.json(allStudents);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve students" });
  }

})

router.post("/studentinfo" , async(req,res)=>{
  try {
    const newStudent = await StudentInfo.create(req.body);
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "Could not create student" });
  }

}
)
router.get("/studentinfo/findByUserID/:userID", async (req, res) => {
  const { userID } = req.params;

  try {
    const students = await StudentInfo.find({ userID });

    if (!students || students.length === 0) {
      return res
        .status(404)
        .json({ error: "No students found for this user ID" });
    }

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/studentinfo/:id", async (req, res) => {
  const studentId = req.params.id;
  const updatedFields = req.body;const handleSubscribe = async () => {
    const userId = localStorage.getItem("userId");
  
    if (!window.confirm("Are you sure you want to subscribe?")) {
      return;
    }
  
    try {
      // Fetch details from the first API endpoint
      const response = await fetch(
        "http://localhost:8000/api/students/students-free-package"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch free package details: ${response.statusText}`);
      }
  
      const freePackageData = await response.json();
  
      // Create the updated user data object
      const updatedUserData = {
        freePackage: {
          package_type: "free",
          freePackagePrice: freePackageData.freePackagePrice,
          searches: freePackageData.searches,
          verified_application: freePackageData.verified_application,
          dedicated_crm: freePackageData.dedicated_crm,
          opportunities: freePackageData.opportunities,
        },
      };
  
      // Perform the patch request to update user's data
      const patchResponse = await fetch(
        `http://localhost:8000/api/auth/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        }
      );
  
      if (!patchResponse.ok) {
        throw new Error(`Failed to update user data: ${patchResponse.statusText}`);
      }
  
      const updatedUser = await patchResponse.json();
      console.log("Updated user:", updatedUser);
  
      // Alert the user after successful subscription
      alert("Subscription successful!");
    } catch (error) {
      console.error("Error during subscription:", error);
      // Alert the user if subscription fails
      alert("Failed to subscribe. Please try again later.");
    }
  };
  

  try {
    const existingStudent = await StudentInfo.findById(studentId);

    if (!existingStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Update PersonalInfo fields if present in the request body
    if (updatedFields.PersonalInfo) {
      Object.assign(existingStudent.PersonalInfo, updatedFields.PersonalInfo);
    }

    // Update EducationalDetails fields if present in the request body
    if (updatedFields.EducationalDetails) {
      existingStudent.EducationalDetails = updatedFields.EducationalDetails;
    }

    // Update TechnicalSkills fields if present in the request body
    if (updatedFields.TechnicalSkills) {
      Object.assign(
        existingStudent.TechnicalSkills,
        updatedFields.TechnicalSkills
      );

      
    }

    // Save the updated student document
    const updatedStudent = await existingStudent.save();

    res.json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});









module.exports = router;
