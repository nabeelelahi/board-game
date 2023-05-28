const mongoose = require('mongoose');
const { connection } = require('../../config/db');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    time_taken: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        default: `${new Date().getTime().toString() + Math.ceil(Math.random() * 999)}`
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: new Date().getTime().toString()
    },
    updated_at: {
        type: Date,
        default: null
    },
    deleted_at: {
        type: Date,
        default: null
    }
});

const Scores  = connection.model('scores', schema);

module.exports = Scores;