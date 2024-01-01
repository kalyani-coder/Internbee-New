const mongoose = require("mongoose");

// Schema for Personal Information
const PersonalInfoSchema = new mongoose.Schema({
    Student_Id : String , 
  firstname: String,
  lastname: String,
  emailaddress: String,
  address: String,
  phonenumber: String,
  gender: { type: String, enum: ["male", "female", "other"] },
  age: String,
  currentSalary: String,
  expectation: String,
  birthDate: String,
  careerProfile: String,
  skills: [String], // Array of skills
  level: { type: String, enum: ["beginner", "intermediate", "advanced"] },
});

// Schema for Education
const EducationSchema = new mongoose.Schema({
  name: String,
  degree: String,
  institute: String,
  passOutYear: String,
});

// Schema for Experience
const ExperienceSchema = new mongoose.Schema({
  companyname: String,
  designation: String,
  startFrom: String,
  endOn: String,
  location: String,
  aboutcompany: String,
});

// Schema for Portfolio
const PortfolioSchema = new mongoose.Schema({
  projectname: String,
  startdate: String,
  enddate: String,
  projectdescription: String,
});

// Main Schema combining all the sub-schemas
const ResumeSchema = new mongoose.Schema({
  personalInformation: PersonalInfoSchema,
  education: [EducationSchema], // Array of education details
  experience: [ExperienceSchema], // Array of experience details
  portfolio: [PortfolioSchema], // Array of portfolio details
});

module.exports = mongoose.model("Resume", ResumeSchema);
