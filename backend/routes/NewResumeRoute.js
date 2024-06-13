const express = require("express")
const router = express.Router()
const ResumeSchema = require("../models/NewResumeModel")


// GET ROUTE 
router.get("/", async (req, res) => {
    try {

        const GetResume = await ResumeSchema.find()
        if (!GetResume) {
            res.status(404).json({ message: "Resume Not found" })
        }
        res.status(201).json(GetResume)


    } catch (e) {
        res.status(500).json({ message: "Internal server error " })
    }
})

// POST ROUTE 
router.post("/", async (req, res) => {
    const { personalInformation, education, StudentId } = req.body;

    if (!personalInformation.firstName) {
        return res.status(400).json({ message: "First name is required" });
    }
    if (!personalInformation.lastName) {
        return res.status(400).json({ message: "Last name is required" });
    }
    if (!personalInformation.email) {
        return res.status(400).json({ message: "Email is required" });
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(personalInformation.email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    if (!personalInformation.phoneNumber) {
        return res.status(400).json({ message: "Phone number is required" });
    }
    if (!/^\d{10}$/.test(personalInformation.phoneNumber)) {
        return res.status(400).json({ message: "Phone number must be 10 digits" });
    }

    if (!education.Name) {
        return res.status(400).json({ message: "Education name is required" });
    }
    if (!education.education) {
        return res.status(400).json({ message: "Education is required" });
    }
    if (!education.institute) {
        return res.status(400).json({ message: "Institute name is required" });
    }
    if (!education.passOutYear) {
        return res.status(400).json({ message: "Pass out year is required" });
    }
    if (!StudentId) {
        return res.status(400).json({ message: "StudentId is required" });
    }

    try {
        const existingResume = await ResumeSchema.findOne({ StudentId: StudentId });
        if (existingResume) {
            return res.status(400).json({ message: "Student resume already created" });
        }

        const newResume = new ResumeSchema(req.body);
        await newResume.save();
        res.status(201).send({ message: "Resume created successfully", newResume });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


// PATCH ROUTE
router.patch("/:studentId", async (req, res) => {
    const studentId = req.params.studentId;
    const { personalInformation, education, experience, portfolio } = req.body;

    // Validate personalInformation fields
    if (personalInformation) {
        if (personalInformation.email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(personalInformation.email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (personalInformation.phoneNumber && !/^\d{10}$/.test(personalInformation.phoneNumber)) {
            return res.status(400).json({ message: "Phone number must be 10 digits" });
        }
        if (personalInformation.careerProfile && personalInformation.careerProfile.length > 200) {
            return res.status(400).json({ message: "Career profile must be at most 200 characters" });
        }
    }
    if (education) {
        if (!education.Name) {
            return res.status(400).json({ message: "Education name is required" });
        }
        if (!education.education) {
            return res.status(400).json({ message: "Education is required" });
        }
        if (!education.institute) {
            return res.status(400).json({ message: "Institute name is required" });
        }
        if (!education.passOutYear) {
            return res.status(400).json({ message: "Pass out year is required" });
        }
    }
    // Validate portfolio fields
    if (portfolio) {
        if (portfolio.projectDescription && portfolio.projectDescription.length > 200) {
            return res.status(400).json({ message: "Project description must be at most 200 characters" });
        }
    }

    // Construct the update object dynamically based on provided data
    let updateData = {};
    if (personalInformation) {
        updateData['personalInformation'] = personalInformation;
    }
    if (education) {
        updateData['education'] = education;
    }
    if (experience) {
        updateData['experience'] = experience;
    }
    if (portfolio) {
        updateData['portfolio'] = portfolio;
    }

    try {
        const updatedResume = await ResumeSchema.findOneAndUpdate(
            { StudentId: studentId },
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedResume) {
            return res.status(404).json({ message: "StudentId not found" });
        }

        res.status(200).json({ message: "Student Profile Updated Successfully", updatedResume });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});


// DELETE ROUTE 
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedResume = await ResumeSchema.findByIdAndDelete(id);
        if (!deletedResume) {
            return res.status(404).json({ message: "Resume ID Not Found" });
        }
        res.status(200).json({ message: "Resume Deleted Successfully" });
    } catch (e) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router