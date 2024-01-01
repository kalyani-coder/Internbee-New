
const mongoose = require('mongoose')

const PostInternshipSchema = new mongoose.Schema({
    userId : String , 
    empName : String,
    empEmail : String,
    empPhone : String,
    job_Title : String,
    location : String,
    company_Name : String,
    start_Date : String,
    end_Date : String,
    job_Type : String,
    stipned : String,
    skills : String,
    position : String,
    job_Description : String,
    stipend : String,
    

})

const newInterShipSchema = new mongoose.model('PostIntership' , PostInternshipSchema)

module.exports = newInterShipSchema;