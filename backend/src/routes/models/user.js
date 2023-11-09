const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* Hindi pa final, hindi pa kasi ako sure kung anong mga
    document/field ang pwede sa database */
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
