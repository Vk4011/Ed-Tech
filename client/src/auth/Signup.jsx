import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authURL from '../api/authapi';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [college, setCollege] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // Validate the form inputs
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!username || !email || !phone || !dob || !college || !state || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Send POST request to the backend API
      const response = await axios.post(`${authURL}/api/auth/register`, {
        username,
        email,
        phone,
        dob,
        college,
        state,
        password
      });

      if (response.status === 201) {
        // If registration is successful, navigate to the login page
        alert('Registration successful!');
        navigate('/login');
      } else {
        console.error('Registration failed:', response.data.message);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-gray-900/20 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-white font-semibold mb-6">Create Your Account</h2>
        <p className="text-gray-400 mb-4">Please fill in your details to create an account.</p>
        
        {/* Username Input Field */}
        <input
          type="text"
          placeholder="User Name"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Phone Number Input Field */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Date of Birth Input Field */}
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        {/* College Name Input Field */}
        <input
          type="text"
          placeholder="College Name"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        {/* State Input Field */}
        <input
          type="text"
          placeholder="State"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        {/* Password Input Field */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password Input Field */}
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleRegister}
          className="w-full bg-purple-600 text-white p-3 rounded-lg"
        >
          Register
        </motion.button>
        
        <p className="text-center text-gray-500 mt-4">
          Already have an account? <Link to="/login" className="text-purple-500">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
