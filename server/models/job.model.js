const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    desc: {
        type: String
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Job = mongoose.model(jobSchema, "Job")

module.exports = Job