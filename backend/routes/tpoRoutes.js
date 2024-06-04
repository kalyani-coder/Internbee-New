const express = require("express");
const router = express.Router();
const TpoModel = require("../models/TpoModel");

// Get all TPOs
router.get("/", async (req, res) => {
  try {
    const tpos = await TpoModel.find();
    res.json(tpos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get TPO by ID
router.get("/:id", async (req, res) => {
  try {
    const tpo = await TpoModel.findById(req.params.id);
    if (tpo) {
      res.json(tpo);
    } else {
      res.status(404).json({ message: "TPO not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new TPO
router.post("/", async (req, res) => {
  const tpo = new TpoModel({
    name: req.body.name,
    collage: req.body.collage,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    numberOfIntern: req.body.numberOfIntern,
    educationField: req.body.educationField,
    remark: req.body.remark,
  });

  try {
    const newTpo = await tpo.save();
    res.status(201).json(newTpo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update TPO by ID
router.put("/:id", async (req, res) => {
  try {
    const tpo = await TpoModel.findById(req.params.id);
    if (tpo) {
      tpo.name = req.body.name || tpo.name;
      tpo.collage = req.body.collage || tpo.collage;
      tpo.contactNumber = req.body.contactNumber || tpo.contactNumber;
      tpo.email = req.body.email || tpo.email;
      tpo.numberOfIntern = req.body.numberOfIntern || tpo.numberOfIntern;
      tpo.educationField = req.body.educationField || tpo.educationField;
      tpo.remark = req.body.remark || tpo.remark;

      const updatedTpo = await tpo.save();
      res.json(updatedTpo);
    } else {
      res.status(404).json({ message: "TPO not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete TPO by ID
router.delete("/:id", async (req, res) => {
  try {
    const tpo = await TpoModel.findById(req.params.id);
    if (tpo) {
      await tpo.remove();
      res.json({ message: "TPO deleted successfully" });
    } else {
      res.status(404).json({ message: "TPO not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
