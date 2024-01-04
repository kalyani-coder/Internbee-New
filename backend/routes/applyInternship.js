const express = require("express");
const appliedInternshipModel = require("../models/appliedInternship");
const PostInternship = require("../models/postInternship");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const foundInternships = await appliedInternshipModel.find();
    res.status(200).json(foundInternships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/internId/:InternId", async (req, res) => {
  const { InternId } = req.params;

  try {
    const internApplied = await appliedInternshipModel.find({
      InternId: InternId,
    });

    res.status(200).json(internApplied);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { postId, InternId } = req.body;

    // Get data from PostInternship based on postId
    const existingPost = await PostInternship.findById(postId);

    if (!existingPost) {
      return res.status(404).json({ message: "PostID not found" });
    }

    const existingUser = await User.findById(InternId);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const endDateParts = existingPost.end_Date.split("/"); // Splitting the date string
    const formattedEndDate = `${endDateParts[2]}-${endDateParts[1]}-${endDateParts[0]}`; // Rearranging in YYYY-MM-DD format

    const endDate = new Date(formattedEndDate); // Creating a Date object from formatted date
    const currentDate = new Date();

    if (endDate < currentDate) {
      return res.status(400).json({ message: "Internship has expired" });
    }

    const formattedEndDateString = `${endDate.getDate()}/${
      endDate.getMonth() + 1
    }/${endDate.getFullYear()}`;

    const appliedDateString = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;

    const newAppliedInternship = new appliedInternshipModel({
      postId,
      InternId,
      status: "pending",
      end_Date: formattedEndDateString,
      appliedDate: appliedDateString,
      InternName: existingUser.fullName,
      InternEmail: existingUser.email,
      InternNumber: existingUser.number,
      empName: existingPost.company_Name,
      location: existingPost.location,
      job_Description: existingPost.job_Description,
      position: existingPost.position,
      skills: existingPost.skills,
      stipend: existingPost.stipend,
      job_Title: existingPost.job_Title,
    });

    const savedInternship = await newAppliedInternship.save();
    res.status(201).json(savedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const updatedInternship = await appliedInternshipModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundInternship = await appliedInternshipModel.findById(
      req.params.id
    );
    res.status(200).json(foundInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

router.get("/postId/:id", async (req, res) => {
  try {
    const foundInternship = await appliedInternshipModel.find({
      postId: req.params.id,
    });
    res.status(200).json(foundInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedInternship = await appliedInternshipModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
