const express = require("express");
const router = express.Router();
const StudentDetailsModel = require("../models/StudentsDetails"); // Adjust the path accordingly

// GET route
router.get("/", async (req, res) => {
  try {
    const students = await StudentDetailsModel.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentDetailsModel.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/studentId/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await StudentDetailsModel.findOne({
      student_id: studentId,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getting conflict 
// POST route
// router.post("/", async (req, res) => {
//   const studentData = req.body;
//   const studentId = studentData.student_id;

//   try {
//     // Check if a student with the same student_id already exists
//     const existingStudent = await StudentDetailsModel.findOne({
//       student_id: studentId,
//     });

//     if (existingStudent) {
//       return res
//         .status(409)
//         .json({ message: "Student with the same ID already exists" });
//     }

//     // If no existing student with the same ID, create and save the new student
//     const student = new StudentDetailsModel(studentData);
//     await student.save();
//     res.status(201).json(student);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// POST ROUTE 
router.post("/", async (req, res) => {
  const studentData = req.body;

  try {
    // Create and save the new student without checking for existing students
    const student = new StudentDetailsModel(studentData);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH route
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const student = await StudentDetailsModel.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE route
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await StudentDetailsModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully", deletedStudent });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
