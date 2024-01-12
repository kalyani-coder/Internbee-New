const express = require("express");
const moment = require("moment");
const EnquirySchema = require("../models/Enquiry");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const enquiry = await EnquirySchema.find();
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      StudentName,
      StudentEmail,
      StudentId,
      EmployerId,
      postId,
      Enquiry,
      EnquiryStatus,
      EnquiryReply,
    } = req.body;

    const formattedCurDate = moment().format("DD/MM/YYYY");

    const NewEnquiry = {
      StudentName,
      StudentEmail,
      StudentId,
      EmployerId,
      postId,
      Enquiry,
      EnquiryStatus,
      EnquiryDate: formattedCurDate,
      EnquiryReply,
    };

    const createdEnquiry = await new EnquirySchema(NewEnquiry).save();
    res.status(200).json(createdEnquiry);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedEnquiry = await EnquirySchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEnquiry);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
