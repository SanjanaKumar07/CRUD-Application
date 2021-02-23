const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    project: {
        type: String
    },
    pDate: {
        type: String
    },
    product: {
        type: String
    },
    contact: {
        type: String
    },
    dateC: {
        type: String
    },
    location: {
        type: String
    },
    cName: {
        type: String
    },
    followDate: {
        type: String
    },
    comments: {
        type: String
    }
});


mongoose.model('Employee', employeeSchema);