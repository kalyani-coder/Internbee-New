const mongoose = require("mongoose");

const appliedInternship = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  InternId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  end_Date: {
    type: String,
    required: true,
  },
  InternName: {
    type: String,
    required: true,
  },
  InternEmail: {
    type: String,
    required: true,
  },
  InternNumber: {
    type: String,
    required: true,
  },
  empName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  job_Description: {
    type: String,
  },
  position: {
    type: String,
  },
  skills: {
    type: String,
  },
  stipend: {
    type: String,
  },
  job_Title: {
    type: String,
  },
  appliedDate:{
    type:String,
    required:true,
  }
});

const appliedInternshipModel = mongoose.model(
  "appliedInternship",
  appliedInternship
);

module.exports = appliedInternshipModel;
