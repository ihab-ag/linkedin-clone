const mongoose = require('mongoose');
const { CvSchema } = require('./cv.model')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    cv: CvSchema
})

const User = mongoose.model(userSchema, 'User')

module.exports = User