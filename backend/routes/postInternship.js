const express = require("express");
const router = express.Router();
const newInterShipSchema = require("../models/postInternship");

// Define a GET route
router.get("/", async (req, res) => {
  try {
    // Assuming you want to retrieve all internship posts from the database
    const internships = await newInterShipSchema.find();

    // Respond with the fetched data
    res.json(internships);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// post route

router.post("/", async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const {
      userId,
      empName,
      empEmail,
      empPhone,
      job_Title,
      location,
      company_Name,
      start_Date,
      end_Date,
      job_Type,
      stipend,
      skills,
      position,
      job_Description,
    } = req.body;

    // Create a new internship post instance
    const newInternship = new newInterShipSchema({
      userId,
      job_Title,
      empName,
      empEmail,
      empPhone,
      location,
      company_Name,
      start_Date,
      end_Date,
      job_Type,
      stipend,
      skills,
      position,
      job_Description,
    });

    // Save the new internship post to the database
    const savedInternship = await newInternship.save();

    // Respond with the saved data
    res.json(savedInternship);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PATCH route (update)
router.patch("/:id", async (req, res) => {
  try {
    const internshipId = req.params.id;
    const updatedData = req.body;

    const updatedInternship = await newInterShipSchema.findByIdAndUpdate(
      internshipId,
      updatedData,
      { new: true }
    );

    if (!updatedInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }

    res.json(updatedInternship);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE route
router.delete("/:id", async (req, res) => {
  try {
    const internshipId = req.params.id;

    const deletedInternship = await newInterShipSchema.findByIdAndDelete(
      internshipId
    );

    if (!deletedInternship) {
      return res.status(404).json({ error: "Internship not found" });
    }

    res.json({ message: "Internship deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/userId/:id" , async (req,res) => {
    
    const id = req.params.id;
try {
    

    const internship = await newInterShipSchema.find({ userId: id });

    res.json(internship);
    
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });

    
}






})

module.exports = router;
