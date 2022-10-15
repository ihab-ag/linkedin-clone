const mongoose = require('mongoose')

const followingSchema= mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }]
})

const Following = mongoose.model("Following", followingSchema)

module.exports = Following