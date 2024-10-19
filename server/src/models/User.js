const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    college: { type: String, required: true },
    state: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String } // Add this field to store the OTP
}, { timestamps: true }); // Automatically add `createdAt` and `updatedAt` fields

module.exports = mongoose.model('User', UserSchema);
