const express = require('express');
const appliedInternshipModel = require('../models/appliedInternship');



const router = express.Router();



router.get("/", async (req, res) => {
  try {
    // Use await for asynchronous operations like find()
    const foundInternships = await appliedInternshipModel.find();
    res.status(200).json(foundInternships); // Send the foundInternships as response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;