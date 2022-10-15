const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
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
        select: false
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
})

const Company = mongoose.model("Company", companySchema)

module.exports = Company