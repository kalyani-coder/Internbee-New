const express = require("express");
const router = express.Router();
const ExpiredInternship = require("../models/ExpiredInternship");

router.get("/", async (req, res) => {
  try {
    const expiredInternships = await ExpiredInternship.find();
    res.json(expiredInternships);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
