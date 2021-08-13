const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },    
})
module.exports = new mongoose.model("category",CategorySchema)