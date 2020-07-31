//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const patientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
});

//creating the DB model
const patients = mongoose.model('patients',patientsSchema);

module.exports = patients;