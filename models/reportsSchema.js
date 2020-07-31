//importing mongoose
const mongoose = require('mongoose');

//declaring Schema
const reportsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctors',
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

//creating the DB model
const reports = mongoose.model('reports',reportsSchema);

module.exports = reports;