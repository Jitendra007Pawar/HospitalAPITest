//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const doctorsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//creating the DB model
const doctors = mongoose.model('doctors',doctorsSchema);

module.exports = doctors;