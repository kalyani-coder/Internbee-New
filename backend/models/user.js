const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
  },
  number:{
    type : String,
    required : true,
    maxLength : 10,

  },
 
  signupotp : {
    type : String,
    default : ""
  },
  verified: { type: Boolean, default: false},
 
 freePackage : {
  package_type: {
    type: String,
    default: "free",
  },
  freePackagePrice: {
    type: String,
    default: "", 
  },
  searches: {
    type: Number,
    default: "", 
  },
  verified_application: {
    type: String,
    default: "", 
  },
  dedicated_crm: {
    type: String,
    default: "", 
  },
  opportunities: {
    type: Number,
    default: "", 
  },
  opportunities_Counter : {
    type: Number,
  },
 },



  monthlyPackage: {
    package_type: {
      type: String,
      default: "monthly",
    },
    monthlyPackage_Price: {
      type: Number,
      default: "",
    },
    searches: {
      type: Number,
      default: "",
    },
    verified_application: {
      type: String,
      default: "",
    },
    dedicated_crm: {
      type: String,
      default: "",
    },
    monthlyOpportunities: {
      type: Number,
      default: "",
      
    },
    accountHolderName : {
      type : String,
      default : "",
    }
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
