const express = require("express");
const moment = require("moment");
const EnquirySchema = require("../models/Enquiry");
const postInternship = require("../models/postInternship");

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
      StudentPhone,
      EmployerId,
      postId,
      Enquiry,
      EnquiryStatus,
      EnquiryReply,
    } = req.body;

    const formattedCurDate = moment().format("DD/MM/YYYY");

    const existingEnquiry = await EnquirySchema.findOne({
      StudentId: StudentId,
      postId: postId,
      EmployerId: EmployerId,
    });
    if (existingEnquiry) {
      return res
        .status(409)
        .json({ message: "You have already sent an enquiry." });
    }

    const NewEnquiry = {
      StudentName,
      StudentEmail,
      StudentId,
      EmployerId,
      StudentPhone,
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

router.get("/employerId/:id", async (req, res) => {
  try {
    const foundEnquiry = await EnquirySchema.find({
      EmployerId: req.params.id,
    });

    

    if (!foundEnquiry) {
      res.status(404).json({ message: "No enquiry found" });
    }
    res.status(200).json(foundEnquiry);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
