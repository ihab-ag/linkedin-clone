const mongoose = require('mongoose');

const CvSchema = mongoose.Schema({
    bio: {
        type: String,
        default: 'no expirence'
    },
    experience: {
        type: Array,
        default: []
    }
})

const Cv = mongoose.model('Cv', CvSchema)

module.exports= {
    Cv,
    CvSchema
}