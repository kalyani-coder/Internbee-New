const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const EmployerAuth = require("../models/EmployerAuth");
// const EmployerAuth = require("../models/employerAuth");
const EmployerAuth = require('../models/employerAuth')

const router = express.Router();
const jwtKey = "amar";

router.post("/signup", async (req, res) => {
  const { empName, email, number, password, companyAddress, Description, 
    paymentStatus, accountHolderName, packagePrice, purchacepackageEndDate, 
    purchacepackageDate,searches,
    internshipEnquiry,
    verifiedApplication,
    ResumeView,
    dedicatedCRM ,
    internshipCounter} =
    req.body;

  try {
    const existingempName = await EmployerAuth.findOne({ empName });
    const existingUser = await EmployerAuth.findOne({ email });
    const existingNumber = await EmployerAuth.findOne({ number });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else if (existingNumber) {
      return res.status(409).json({ error: "Number already exists" });
    } else if (existingempName) {
      return res.status(409).json({ error: "Comapany Name already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmpAuth = new EmployerAuth({
      empName: empName,
      email: email,
      number: number,
      password: hashedPassword,
      companyAddress: companyAddress,
      Description: Description,
      paymentStatus: paymentStatus,
      accountHolderName: accountHolderName,
      packagePrice: packagePrice,
      purchacepackageEndDate: purchacepackageEndDate,
      purchacepackageDate: purchacepackageDate,
      searches: searches,
      internshipEnquiry: internshipEnquiry,
      verifiedApplication: verifiedApplication,
      ResumeView: ResumeView,
      dedicatedCRM: dedicatedCRM,
      internshipCounter : internshipCounter,
    });

    const createdEmpAuth = await newEmpAuth.save();
    // const token = jwt.sign({ email: createdEmpAuth.email }, jwtKey);

    // Return the token and created user's ID in the response
    res.json({
      userId: createdEmpAuth._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const empAuth = await EmployerAuth.findOne({ email });

    if (!empAuth) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, empAuth.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email }, jwtKey);

    res.json({
      userId: empAuth._id,
      empName: empAuth.empName,
      email: empAuth.email,
      number: empAuth.number,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const empAuth = await EmployerAuth.findById(id);
    res.status(200).json(empAuth);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedEmpAuth = await EmployerAuth.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmpAuth);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const empAuth = await EmployerAuth.findByIdAndDelete(id);
    res.status(200).json({ message: "Employer Delete Successfully" });

  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
})

router.get("/", async (req, res) => {
  try {
    const employerAuth = await EmployerAuth.find();
    res.status(200).json(employerAuth);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});





module.exports = router;






