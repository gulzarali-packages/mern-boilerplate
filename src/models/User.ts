const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName:   { type: String, required: true },
    email:      { type: String, required: true },
    password:   { type: String, required: true }
});

export const User = mongoose.model('User', UserSchema);