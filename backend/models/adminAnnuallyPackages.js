const mongoose = require('mongoose');

const adminAnnuallyPackageSchema = new mongoose.Schema({

    annuallyPackage_Price : Number,
    searches : String,
    internship_enquiry : String,
    verified_appication : String,
    resume_view : String,
    dedicated_crm : String,

})

const newAdminAnnuallyPackage = mongoose.model('AnnuallyPackages',adminAnnuallyPackageSchema);

module.exports = newAdminAnnuallyPackage;