const express = require("express");
const router = express.Router();
const StudentDetailsModel = require("../models/StudentsDetails"); // Adjust the path accordingly
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
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

router.get("/userId/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const student = await StudentDetailsModel.findOne({
      userId: userId,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// patch detils by userId
router.patch("/userId/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const student = await StudentDetailsModel.findOneAndUpdate(
      { userId: userId },
      {
        $set: {
          keySkills: req.body.keySkills,
          experience: req.body.experience,
        },
      },

      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student Detils Updated Successfully" });
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
router.post("/cheak-first/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const hasCreated = await StudentDetailsModel.find({ userId: userId });
    console.log(hasCreated);

    if (hasCreated.length === 0) {
      return res.status(404).json({ message: "Profile not created" });
    } else {
      res.status(200).json({ message: "Profile already exists" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
    { name: "pdf2", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const existingProfile = await StudentDetailsModel.findOne({
        userId: req.body.userId,
      });

      if (existingProfile) {
        return res.status(400).json({ error: "User already has a profile" });
      }

      if (req.files && req.files.image && req.files.pdf && req.files.pdf2) {
        const publicImageUrl = `https://internbee-backend-apis.onrender.com/public/uploads/${req.files.image[0].filename}`;
        const publicPdfUrl = `https://internbee-backend-apis.onrender.com/public/uploads/${req.files.pdf[0].filename}`;
        const publicPdfUrl2 = `https://internbee-backend-apis.onrender.com/public/uploads/${req.files.pdf2[0].filename}`;

        const fileData = new StudentDetailsModel({
          filename: req.files.image[0].originalname,
          path: req.files.image[0].path,
          pdfPath: req.files.pdf[0].path,
          certificatePath: req.files.pdf2[0].path,
          profile_pic: publicImageUrl,
          student_PDF: publicPdfUrl,
          student_certificate: publicPdfUrl2,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          birthdate: req.body.birthdate,
          permanentaddress: req.body.permanentaddress,
          city: req.body.city,
          district: req.body.district,
          country: req.body.country,
          currentaddress: req.body.currentaddress,
          currentcity: req.body.currentcity,
          currentdistrict: req.body.currentdistrict,
          currentcountry: req.body.currentcountry,
          passOutYear: req.body.passOutYear,
          percentage: req.body.percentage,
          stream: req.body.stream,
          instituteName: req.body.instituteName,
          education: req.body.education,
          keySkills: req.body.keySkills,
          languages: req.body.languages,
          experience: req.body.experience,
          salaryExpectations: req.body.salaryExpectations,
          projectName: req.body.projectName,
          projectSummary: req.body.projectSummary,
          userId: req.body.userId,
          contact: req.body.contact,
          currentstate: req.body.currentstate,
          currentcountry: req.body.currentcountry,
          gender: req.body.gender,

          education_12: req.body.education_12,
          instituteName_12: req.body.instituteName_12,
          stream_12: req.body.stream_12,
          passOutYear_12: req.body.passOutYear_12,
          percentage_12: req.body.percentage_12,

          education_10: req.body.education_10,
          instituteName_10: req.body.instituteName_10,
          stream_10: req.body.stream_10,
          passOutYear_10: req.body.passOutYear_10,
          percentage_10: req.body.percentage_10,
        });

        await fileData.save();
        res.status(201).json(fileData);
      } else {
        res.status(400).json({ error: "Image and PDF files are required" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

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
