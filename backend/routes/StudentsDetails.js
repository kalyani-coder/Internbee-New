const express = require("express");
const router = express.Router();
const StudentDetailsModel = require("../models/StudentsDetails"); // Adjust the path accordingly
const User = require("../models/user");
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

router.patch("/userId/:id", async (req, res) => {
  const { id } = req.params;
  const updateData = req.body; // Assuming the updated data is sent in the request body

  try {
    const updatedStudent = await StudentDetailsModel.findOneAndUpdate(
      { userId: id },
      updateData,
      { new: true, runValidators: true } // To return the updated document and run schema validators
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
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
    console.log("body data ", req.body);
    try {
      const existingProfile = await StudentDetailsModel.find({
        userId: req.body.userId,
      });
      console.log("existing profile ", existingProfile);
      if (existingProfile.length > 0) {
        console.log("inloop", existingProfile.length > 0);

        return res.status(400).json({ error: "User already has a profile" });
      }

      console.log("files ", req.files, req.files.image, req.files.pdf, req.files.pdf2);

      const publicImageUrl = `http://localhost:8000/public/uploads/${req.files.image[0].filename}`;
      const publicPdfUrl = `http://localhost:8000/public/uploads/${req.files.pdf[0].filename}`;
      let publicPdfUrl2 = null;
      if (req.files.pdf2) {
        publicPdfUrl2 = `http://localhost:8000/public/uploads/${req.files.pdf2[0].filename}`;
      }

      const fileData = new StudentDetailsModel({
        filename: req.files.image[0].originalname,
        path: req.files.image[0].path,
        pdfPath: req.files.pdf[0].path,
        certificatePath: req.files.pdf2 ? req.files.pdf2[0].path : null,
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
        currentstate: req.body.currentstate,
        currentcountry: req.body.currentcountry,
        contact: req.body.contact,
        education: req.body.education,
        instituteName: req.body.instituteName,
        stream: Array.isArray(req.body.stream) ? req.body.stream.join(", ") : req.body.stream,
        passOutYear: req.body.passOutYear,
        percentage: req.body.percentage,
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
        keySkills: req.body.keySkills,
        languages: req.body.languages,
        experience: req.body.experience,
        salaryExpectations: req.body.salaryExpectations,
        projectName: req.body.projectName,
        projectSummary: req.body.projectSummary,
        userId: req.body.userId,
        gender: req.body.gender,
      });
      console.log("fileData", fileData);

      await fileData.save();
      res.status(200).json(fileData);
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
