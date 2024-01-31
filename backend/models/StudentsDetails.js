
const mongoose = require('mongoose');

const StudentDetailsSchema = new mongoose.Schema({
  // Personal Details
  userId : String,
  user_email: String ,
  user_number : String,
  firstName: String,
  lastName: String,
  email: String,
  birthdate: String,
  permanentaddress: String,
  city: String,
  district: String,
  country: String,
  currentaddress: String,
  currentcity: String,
  currentdistrict: String,
  currentcountry: String,
  contact : String,

  // Educational Details
  education: String,
  instituteName: String,
  stream: String,
  passOutYear: String,
  percentage : String,

  // 12th education details 
  education_12 : String,
  instituteName_12 : String,
  stream_12 : String,
  passOutYear_12 : String,
  percentage_12 : String,

  // 10th details 
  education_10 : String,
  instituteName_10 : String,
  stream_10 : String,
  passOutYear_10 : String,
  percentage_10 : String,



  // Technical Details 
  keySkills: String,
  languages: String,
  experience: String,
  salaryExpectations: String,
  projectName: String,
  projectSummary: String,

  // resume 
  filename: String,
  path: String,
  profile_pic: String,
  student_PDF: String,
  pdfPath: String,
  student_certificate : String,
  certificatePath : String,

 
});

const StudentDetailsModel = mongoose.model('StudentDetails', StudentDetailsSchema);

module.exports = StudentDetailsModel;