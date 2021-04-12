const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    age: {
        type: String,
        required: true,
        min: 1,
        max: 3
    },
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    location: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    profession: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    health: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('User', userSchema);