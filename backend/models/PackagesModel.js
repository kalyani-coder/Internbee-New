
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
   
    // cvv: String,
    accountHolderName: String,
    // cardNumber: Number,
    // expiryDate: String,
    email : String,
    userId : String,
    number: String,
    empName :String,
    payment_status : String,

    



})

const packageSchemaNew = mongoose.model('packageSchemaNew', packageSchema);

module.exports = packageSchemaNew;