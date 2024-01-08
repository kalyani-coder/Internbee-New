const mongoose = require('mongoose');
const validator = require('validator');

const adminModelSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    maxLength: 100,
    validate: {
      validator: function (v) {
        return validator.isEmail(v);
      },
      message: "Please enter a valid email address",
    },
  },
});

const adminSchema = mongoose.model('adminModel', adminModelSchema);
module.exports = adminSchema;
