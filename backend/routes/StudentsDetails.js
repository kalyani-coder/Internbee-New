const express = require("express");
const router = express.Router();
const StudentDetailsModel = require("../models/StudentsDetails"); // Adjust the path accordingly
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
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
// router.post("/", async (req, res) => {
//   const studentData = req.body;

//   try {
//     // Create and save the new student without checking for existing students
//     const student = new StudentDetailsModel(studentData);
//     await student.save();
//     res.status(201).json(student);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// image upload route 
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 } ,{name : 'pdf2' , maxCount : 1}]), async (req, res) => {
  try {
    if (req.files && req.files.image && req.files.pdf && req.files.pdf2) {
      const publicImageUrl = `http://localhost:8000/public/uploads/${req.files.image[0].filename}`;
      const publicPdfUrl = `http://localhost:8000/public/uploads/${req.files.pdf[0].filename}`;
      const publicPdfUrl2 = `http://localhost:8000/public/uploads/${req.files.pdf2[0].filename}`;

      const fileData = new StudentDetailsModel({
        filename: req.files.image[0].originalname, // Assuming image is required for every entry
        path: req.files.image[0].path,
        pdfPath: req.files.pdf[0].path,
        certificatePath: req.files.pdf2[0].path,
        profile_pic: publicImageUrl,
        student_PDF: publicPdfUrl,
        student_certificate : publicPdfUrl2,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        birthdate : req.body.birthdate,
        permanentaddress : req.body.permanentaddress,
        city : req.body.city, 
        district : req.body.district,
        country : req.body.country,
        currentaddress : req.body.currentaddress,
        currentcity : req.body.currentcity,
        currentdistrict : req.body.currentdistrict,
        currentcountry : req.body.currentcountry,
        passOutYear : req.body.passOutYear,
        stream: req.body.stream,
        instituteName: req.body.instituteName,
        education: req.body.education,
        keySkills : req.body.keySkills,
        languages : req.body.languages,
        experience : req.body.experience,
        salaryExpectations : req.body.salaryExpectations,
        projectName : req.body.projectName,
        projectSummary: req.body.projectSummary,
        // userId : req.body.userId,


      });

      await fileData.save();
      res.status(201).json(fileData);
    } else {
      res.status(400).json({ error: 'Image and PDF files are required' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
