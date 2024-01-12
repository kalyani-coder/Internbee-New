const mongoose = require('mongoose');

// Schema for studentsMonthlyPackage
const studentsMonthlyPackageSchema = new mongoose.Schema({
    monthlyPackage_Price: Number,
    searches: String,
    verified_application: String,
    dedicated_crm: String,
    opportunities: String,
});

// Model for studentsMonthlyPackage
const StudentsMonthlyPackage = mongoose.model('studentsMonthlyPackage', studentsMonthlyPackageSchema);

// Schema for studentsFreePackage
const studentsFreePackageSchema = new mongoose.Schema({
    freePackagePrice : String,
    searches: String,
    verified_application: String,
    dedicated_crm: String,
    opportunities: String,
});

// Model for studentsFreePackage
const StudentsFreePackage = mongoose.model('studentsFreePackage', studentsFreePackageSchema);

// Export both models
module.exports = {
    StudentsMonthlyPackage,
    StudentsFreePackage,
};
