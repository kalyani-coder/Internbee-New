const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const _ = require('underscore');


const router = express.Router();
const jwtKey = "amar";

router.post("/signup", async (req, res) => {
  const { fullName, email, number, password, freePackagePrice, searches,
    verified_application,
    dedicated_crm,
    opportunities,
    opportunities_Counter,
    monthlyPackage_Price,
    monthlySearches,
    monthlyVerifiedApplication,
    monthlyDedicatedCRM,
    monthlyOpportunities,
    accountHolderName, } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    const existingnumber = await User.findOne({ number });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    } else if (existingnumber) {
      return res.status(409).json({ error: "Number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName: fullName,
      email: email,
      number: number,
      password: hashedPassword,
      freePackagePrice: freePackagePrice,
      searches: searches,
      verified_application: verified_application,
      dedicated_crm: dedicated_crm,
      opportunities: opportunities,
      opportunities_Counter : opportunities_Counter,

      monthlyPackage: {
        package_type: 'monthly',
        monthlyPackage_Price,
        searches: monthlySearches,
        verified_application: monthlyVerifiedApplication,
        dedicated_crm: monthlyDedicatedCRM,
        monthlyOpportunities: monthlyOpportunities,
        accountHolderName : accountHolderName
      },

    });

    const createdUser = await newUser.save();
    const token = jwt.sign({ email: createdUser.email }, jwtKey);

    // Return the token and created user's email in the response
    res.json({
      userId: createdUser._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


// router.patch("/:id", async (req, res) => {
//   try {
//     const updatedEmpAuth = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedEmpAuth);
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


router.patch("/:id", async (req, res) => {
  try {
    // Step 1: Validate and sanitize input
    const allowedFields = ["monthlyPackage"];
    const updates = Object.keys(req.body).filter((field) =>
      allowedFields.includes(field)
    );

    // Step 2: Check if the document with the provided ID exists
    const existingUser = await User.findById(req.params.id);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Step 3: Perform the update
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: _.pick(req.body, updates) },
      { new: true }
    );

    // Step 4: Respond with the updated user
    res.status(200).json(updatedUser);
  } catch (error) {
    // Step 5: Handle errors
    console.error("Error during user update:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email }, jwtKey);

    // Include user data in the response with modified userId (_id)
    res.json({
      userId: user._id,
      email: user.email,
      Number: user.number,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const user = await User.findByIdAndDelete(studentId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
