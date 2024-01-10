const express = require('express');
const router = express.Router();
const adminSchema = require('../models/adminModel');
const validator = require('validator');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  try {
    const admin = await adminSchema.find();
    res.json(admin);
  } catch (e) {
    res.status(404).send({ message: "Can not find" });
  }
});

router.post('/', async (req, res) => {
    const { empName, password, email } = req.body;
  
    // Check email validation using the validator library
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" });
    }
  
    try {
      // Check if the user with the provided email already exists
      const existingAdmin = await adminSchema.findOne({ email });
  
      if (existingAdmin) {
        return res.status(400).json({ error: "User already exists with this email" });
      }
  
      const newAdmin = new adminSchema({ empName, password, email });
      const savedAdmin = await newAdmin.save();
      res.status(201).json(savedAdmin);
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation errors
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });

//   admin login route 
router.post('/login', async (req, res) => {
    const { password, email } = req.body;

    // Check email validation using the validator library
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" });
    }
  
    try {
      // Check if the user with the provided email exists
      const existingAdmin = await adminSchema.findOne({ email });
  
      if (!existingAdmin || existingAdmin.password !== password) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      // Generate JWT token upon successful login
      const token = jwt.sign({ email: existingAdmin.email, empName: existingAdmin.empName }, 'amar');
  
      // Include the token in the response
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//   patch route for admin login 

router.patch('/:adminId', async (req, res) => {
    const adminId = req.params.adminId;
    const { empName, password, email } = req.body;
  
    // Check email validation using the validator library
    if (email && !validator.isEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" });
    }
  
    try {
      // Find the admin by ID
      const existingAdmin = await adminSchema.findById(adminId);
  
      if (!existingAdmin) {
        return res.status(404).json({ error: "Admin not found" });
      }
  
      // Update admin information
      existingAdmin.empName = empName || existingAdmin.empName;
      existingAdmin.password = password || existingAdmin.password;
      existingAdmin.email = email || existingAdmin.email;
  
      // Save the updated admin
      const updatedAdmin = await existingAdmin.save();
      res.json(updatedAdmin);
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation errors
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });

module.exports = router;

