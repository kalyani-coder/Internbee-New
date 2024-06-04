const mongoose = require("mongoose")


const tpoSchema = new mongoose.Schema({

    name : {
        type : String ,
        required : true 
    },
    collage : {
        type : String ,
        required : true 
    },
    contactNumber : {
        type : String ,
        required : true 
    },
    email : {
        type : String ,
        required : true 
    },
    numberOfIntern : {
        type : String ,
        required : true 
    },
    educationField : {
        type : String ,
        required : true 
    } , 
    remark : {
        type : String ,
        // required : true 
    }

})

const tpoModel = mongoose.model("tpo" , tpoSchema) ; 

module.exports = tpoModel ; 
