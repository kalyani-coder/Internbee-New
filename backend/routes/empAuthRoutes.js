const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const EmployerAuth = require("../models/EmployerAuth");

const router = express.Router();
const jwtKey = "amar";

router.post("/signup", async (req, res) => {
  const { empName, email, number, password } = req.body;

  try {
    const existingUser = await EmployerAuth.findOne({ email });
    const existingNumber = await EmployerAuth.findOne({ number });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else if (existingNumber) {
      return res.status(409).json({ error: "Number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmpAuth = new EmployerAuth({
      empName: empName,
      email: email,
      number: number,
      password: hashedPassword,
    });

    const createdEmpAuth = await newEmpAuth.save();
    const token = jwt.sign({ email: createdEmpAuth.email }, jwtKey);

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

    // Include user data in the response with modified userId (_id)
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

router.get("/", async (req, res) => {
  try {
    const allEmpAuth = await EmployerAuth.find();
    res.json(allEmpAuth);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;