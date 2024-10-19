  
const express = require('express');
const router = express.Router();
const { register, login, sendOtp, resetPassword } = require('../controllers/authController');

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Send OTP for password reset
router.post('/send-otp', sendOtp);

// Reset password
router.post('/reset-password', resetPassword);

module.exports = router;
