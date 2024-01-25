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
 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
