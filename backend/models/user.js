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
 
 
});

const User = mongoose.model("User", userSchema);
module.exports = User;
