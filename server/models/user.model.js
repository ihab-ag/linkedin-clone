const mongoose = require('mongoose');
const { Cv, CvSchema} = require('./cv.model')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true,
        match: [/^\w+@\w+$/, 'email invalid'],
    },
    password: {
        type: String,
        required: 'password is required',
        select: false,
    },
    cv: CvSchema
})

const User = mongoose.model('User', userSchema)

module.exports = User