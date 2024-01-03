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
  Resume: {
    type: String,
    required: true,
  },
});

const appliedInternshipModel = mongoose.model(
  "appliedInternship",
  appliedInternship
);

module.exports = appliedInternshipModel;
