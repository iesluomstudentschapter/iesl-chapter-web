var mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        default: "on-going",
        required: true
    },
    filter: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema);