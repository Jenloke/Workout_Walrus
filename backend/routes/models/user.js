const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* Hindi pa final, hindi pa kasi ako sure kung anong mga
    document/field ang pwede sa database */
    name: String,
    birthday: String,
    username: String,
    password: String,
    height: Number,
    weight: Number

});

userSchema.set('collection', 'users')

const User = mongoose.model('User', userSchema);

module.exports = User;
