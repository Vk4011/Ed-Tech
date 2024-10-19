const express = require('express');
const router = express.Router();
const { register, login, sendOtp, resetPassword, getUserData } = require('../controllers/authController');

// Existing routes
router.post('/register', register);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.post('/reset-password', resetPassword);

// New route to get all users' data
router.get('/data', getUserData);

module.exports = router;
