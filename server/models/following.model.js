const mongoose = require('mongoose')

const followingSchema= mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
})

const Following = mongoose.model(followingSchema, "Following")

module.exports = Following