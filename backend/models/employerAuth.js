// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const EmpAuthSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6, // Example: Minimum length for the password
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
    validate: {
      validator: function (v) {
        // You can use a regex or any other method for email validation
        return /\S+@\S+\.\S+/.test(v);
      },
      message: "Please enter a valid email address",
    },
  },
  number: {
    type: String,
    required: true,
    maxLength: 10,
    validate: {
      validator: function (v) {
        // Example: Check if it's a valid 10-digit phone number
        return /^\d{10}$/.test(v);
      },
      message: "Please enter a valid 10-digit phone number",
    },
  },
  companyAddress: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  otp : {
    type : String,
    default : ""
  },
  signupotp : {
    type : String,
    default : ""
  },
  verified: {
    type: Boolean,
    default: false, 
  },
  purchacepackageDate : String,
  purchacepackageEndDate : String,
  packagePrice : String,
  accountHolderName : String,
  paymentStatus : String,
  searches : Number,
  internshipEnquiry : Number,
  verifiedApplication : String,
  ResumeView : String,
  dedicatedCRM : String,
  internshipCounter :Number,
  Privacy_policy : String,
  resumeDownloadCounter : Number,
  company_Website_URL : String,
  enter_CIN_Number : String,
  filename: String,
  path: String,
  emp_image : String,




});

const EmployerAuth = mongoose.model("EmpAuth", EmpAuthSchema);
module.exports = EmployerAuth;





