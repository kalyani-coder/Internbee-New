const mongoose = require('mongoose');

const adminMonthlyPackageSchema = new mongoose.Schema({

    monthlyPackage_Price : Number,
    internship_enquiry : String,
    searches : String,
    verified_appication : String,
    resume_view : String,
    dedicated_crm : String,

})

const newAdminMonthlyPackage = mongoose.model('adminMonthlyPackage',adminMonthlyPackageSchema);

module.exports = newAdminMonthlyPackage;