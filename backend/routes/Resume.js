const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types; // Add this line
const router = require("express").Router();
const Resume = require("../models/resume");

router.get("/", async (req, res) => {
  try {
    const resume = await Resume.find();
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const resume = req.body;
  const studentId = resume.personalInformation.Student_Id;
  try {
    const existingStudent = await Resume.findOne({
      "personalInformation.Student_Id": studentId,
    });
    if (existingStudent) {
      return res
        .status(409)
        .json({ message: "Student with the same ID already exists" });
    }

    const newResume = new Resume(resume);
    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id/experience", async (req, res) => {
  const { id } = req.params;
  const updatedExperience = req.body.experience;

  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { $set: { experience: updatedExperience } },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id/experience/:experienceId", async (req, res) => {
  const { id, experienceId } = req.params;
  const updateFields = req.body.experience[0];

  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: id, "experience._id": experienceId },
      { $set: { "experience.$": updateFields } },
      { new: true }
    );

    if (!updatedResume) {
      return res
        .status(404)
        .json({ message: "Resume or experience item not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id/education", async (req, res) => {
  const { id } = req.params;
  const updatedEducation = req.body.education;

  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { $set: { education: updatedEducation } },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id/education/:educationId", async (req, res) => {
  const { id, educationId } = req.params;
  const updateFields = req.body.education[0];

  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: id, "education._id": educationId },
      { $set: { "education.$": updateFields } },
      { new: true }
    );

    if (!updatedResume) {
      return res
        .status(404)
        .json({ message: "Resume or education item not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id/portfolio", async (req, res) => {
  const { id } = req.params;
  const updatedPortfolio = req.body.portfolio;

  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { $set: { portfolio: updatedPortfolio } },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.patch("/:id/portfolio/:portfolioId", async (req, res) => {
  const { id, portfolioId } = req.params;
  const updateFields = req.body.portfolio[0];

  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: id, "portfolio._id": portfolioId },
      { $set: { "portfolio.$": updateFields } },
      { new: true }
    );

    if (!updatedResume) {
      return res
        .status(404)
        .json({ message: "Resume or portfolio item not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedResume = await Resume.findByIdAndDelete(id);

    if (!deletedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json({
      message: "Resume deleted successfully",
      deletedResumeId: deletedResume._id,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/student/:studentId", async (req, res) => {
  const { studentId } = req.params;

  try {
    const resumes = await Resume.find({
      "personalInformation.Student_Id": studentId,
    });

    if (!resumes || resumes.length === 0) {
      return res
        .status(404)
        .json({ message: "No resumes found for the given Student_Id" });
    }

    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
