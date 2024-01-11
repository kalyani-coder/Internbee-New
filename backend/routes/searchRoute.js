const express = require("express");
const StudentDetailsModel = require("../models/StudentsDetails");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { skill } = req.body;

    // Use .find() or .exec() to fetch data from the database
    const students = await StudentDetailsModel.find({});

    const results = students.filter((student) => {
      // Check if student has keySkills and it is a string
      if (student.keySkills && typeof student.keySkills === "string") {
        const skillsArray = student.keySkills
          .split(" ")
          .map((skill) => skill.trim());
        return skillsArray.includes(skill);
      }
      return false; // If keySkills is not present or not a string, exclude the student
    });

    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
