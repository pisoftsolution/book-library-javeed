const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },    
})
module.exports = new mongoose.model("Books",BookSchema)