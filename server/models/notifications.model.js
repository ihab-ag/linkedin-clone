const mongoose = require('mongoose')

const notificationsSchema= mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
})

const Notifications = mongoose.model("Notifications", notificationsSchema)

module.exports = Notifications