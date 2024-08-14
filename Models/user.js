const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user_schema = new schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const user_model = mongoose.model('users', user_schema);

module.exports = user_model;