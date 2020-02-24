const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    accounts: {
        checking: { type: Number },
        saving: { type: Number }
        }
});

const User = mongoose.model('Account', userSchema);

module.exports = { User };