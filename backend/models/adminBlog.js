const mongoose = require('mongoose')

const adminBlogSchema = new mongoose.Schema({

    title : String,
    description : String,
    blogimage : String,
    path : String,
    filename : String,

    
})

const adminBlog = mongoose.model('adminBlog',adminBlogSchema)

module.exports = adminBlog;