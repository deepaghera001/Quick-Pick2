const mongoose = require('mongoose');

const register_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    shop_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        minlength: 3
    },
    area: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    pincode: {
        type: Number,
        default: ''
    },
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const register_detail = mongoose.model('register_detail', register_schema);

module.exports = register_detail;