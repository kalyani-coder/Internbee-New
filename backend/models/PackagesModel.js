
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    empId : String,
    package_monthly : String,
    package_annually : String,

})

const packageSchemaNew = mongoose.model('packageSchemaNew', packageSchema);

module.exports = packageSchemaNew;