const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'name is needed'],
        maxLength: 100
    },
    lastName: {
        type: String,
        required: [true, 'last name is needed'],
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'password is needed'],
        maxlength: [255, 'Password cannot exceed 255 characters'], // Maximum length validation
    }
}, {collection: 'users'})

module.exports = mongoose.model('user', userSchema)