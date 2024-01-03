const express = require("express");
const appliedInternshipModel = require("../models/appliedInternship");
const PostInternship = require("../models/postInternship");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const foundInternships = await appliedInternshipModel.find();
    res.status(200).json(foundInternships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { postId, InternId, Resume } = req.body;

    const existingPost = await PostInternship.findById(postId);
    const alreadyApplied = await appliedInternshipModel.findOne({
      postId,
      InternId,
    });

    if (!existingPost) {
      return res.status(404).json({ message: "PostID not found" });
    }

    if (alreadyApplied) {
      return res
        .status(400)
        .json({ message: "You already applied to this internship" });
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

    const newAppliedInternship = new appliedInternshipModel({
      postId,
      InternId,
      status: "pending",
      end_Date: formattedEndDateString,
      Resume,
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

router.delete("/:id", async (req, res) => {
  try {
    const deletedInternship = await appliedInternshipModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;
