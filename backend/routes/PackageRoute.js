const express = require("express");
const router = express.Router();
const packageSchemaNew = require("../models/PackagesModel"); // Adjust the path accordingly





// GET route
// GET route for checking if a package exists for a given empId
router.get("/", async (req, res) => {
  try {
    const { empId } = req.query;

    if (!empId) {
      return res.status(400).json({ message: "empId parameter is required" });
    }

    const existingPackage = await packageSchemaNew.findOne({ empId });

    if (existingPackage) {
      return res.json(existingPackage);
    } else {
      return res.json({ message: "Package not found for this empId" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { empId, package_monthly, package_annually } = req.body;

  try {
    // Check if a package with the same empId already exists
    const existingPackage = await packageSchemaNew.findOne({ empId });

    if (existingPackage) {
      // If a package with the same empId exists, return a message indicating it
      return res.status(400).json({ message: "Package already exists for this empId" });
    }

    // Create a new package with only the provided fields
    const newPackage = new packageSchemaNew({
      empId,
      package_monthly,
      package_annually,
    });

    // Save the new package
    const savedPackage = await newPackage.save();

    res.status(201).json(savedPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
    const packageId = req.params.id;
  
    try {
      const updatedPackage = await packageSchemaNew.findByIdAndUpdate(
        packageId,
        {
          $set: req.body, // Use the request body to update fields
        },
        { new: true }
      );
  
      if (!updatedPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
  
      res.json(updatedPackage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.delete("/:id", async (req, res) => {
    const packageId = req.params.id;
  
    try {
      const deletedPackage = await packageSchemaNew.findByIdAndRemove(packageId);
      if (!deletedPackage) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json({ message: "Package deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
