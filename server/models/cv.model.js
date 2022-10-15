const mongoose = require('mongoose');

export const CvSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
    },
    bio: {
        type: String,
    },
    url: {
        type: String,
        required: 'url is required',
    }
})

export const Cv = mongoose.model(CvSchema, 'Cv')