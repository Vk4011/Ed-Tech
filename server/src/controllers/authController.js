  
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

// JWT token generation
const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Register a new user
exports.register = async (req, res) => {
    const { username, email, phone, dob, college, state, password } = req.body;
    try {
        const user = new User({ username, email, phone, dob, college, state, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Send OTP for password reset
exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // Save OTP temporarily (this is just for demo purposes)
        user.otp = otp;
        await user.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is ${otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.json({ message: 'OTP sent to email' });
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Verify OTP and reset password
exports.resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.otp !== otp) {
            return res.status(400).json({ error: 'Invalid OTP' });
        }

        user.password = newPassword;
        user.otp = undefined; // Clear OTP after use
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
