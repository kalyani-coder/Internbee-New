const mongoose = require("mongoose");

const EnquirySchema_student = new mongoose.Schema({
  StudentName: {
    type: String,
  },
  StudentEmail: {
    type: String,
  },
  StudentId: {
    type: String,
  },
  StudentPhone:{
    type:String,
  },
  EmployerId: {
    type: String,
  },

  postId: {
    type: String,
  },
  Enquiry: {
    type: String,
  },
  EnquiryStatus: {
    type: String,
  },
  EnquiryDate: {
    type: String,
  },
  EnquiryReply: {
    type: String,
  },
});

const EnquirySchema = mongoose.model("Enquiry", EnquirySchema_student);

module.exports = EnquirySchema;
