// Get all user data
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password -otp'); // Exclude password and OTP fields for security
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
