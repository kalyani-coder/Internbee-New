const mongoose = require('mongoose');   



const ExpiredInternshipSchema  = new mongoose.Schema({
  userId: { type: String, required: true },
  empName: { type: String, required: true },
  empEmail: { type: String, required: true },
  empPhone: { type: String, required: true },
  job_Title: String,
  location: String,
  company_Name: String,
  start_Date: String,
  end_Date: String,
  job_Type: String,
  stipned: String,
  skills: String,
  position: String,
  job_Description: String,
  stipend: String,
});


module.exports = mongoose.model('ExpiredInternship', ExpiredInternshipSchema);