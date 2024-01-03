const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    filename: String,
    path: String,
    serviceImage: String,
    servicePDF: String,
    pdfPath: String,
    serviceName : String,
})

const ImageUpload = mongoose.model('ImageUpload', ImageSchema)

module.exports = ImageUpload;