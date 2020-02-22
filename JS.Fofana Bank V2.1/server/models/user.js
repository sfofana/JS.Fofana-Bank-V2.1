const mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: { type: String },
    password: { type: String },
    checking: { type: Number }
});

module.exports = { User };