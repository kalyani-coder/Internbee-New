// const mongoose = require('mongoose');

// const StudentDetailsSchema = new mongoose.Schema({

//   // student_id: String,
//   firstName: String,
//   lastName: String,
//   email: String,
//   birthdate: String,

//   permanent_address : String,
//   city: String,
//   district: String,
//   country: String,

//   current_address : String,
//   current_city: String,
//   current_district :String,
//   current_country : String,



//   education: String,
//   instituteName: String,
//   stream: String,
//   passOutYear: String,

//   // keySkills: String,
//   // languages: String,
//   // experience: String,
//   // salaryExpectations: String,
//   // projectName: String,
//   // projectSummary: String,

//   // students_resume: String,
//   // certification: String,
//   // profile_picture: String,
 
// });

// const StudentDetailsModel = mongoose.model('StudentDetails', StudentDetailsSchema);

// module.exports = StudentDetailsModel;


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
  permanent_address: String,
  city: String,
  district: String,
  country: String,
  current_address: String,
  current_city: String,
  current_district: String,
  current_country: String,

  // Educational Details
  education: String,
  instituteName: String,
  stream: String,
  passOutYear: String,

  // Technical Details 
  keySkills: String,
  languages: String,
  experience: String,
  salaryExpectations: String,
  projectName: String,
  projectSummary: String,

 
});

const StudentDetailsModel = mongoose.model('StudentDetails', StudentDetailsSchema);

module.exports = StudentDetailsModel;