


// src/auth/Login.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Google from "../icons/google.png";
import Github from "../icons/github.png";
import { Link } from 'react-router-dom';

const Signin = ({ onLogin }) => { // Receive onLogin as a prop
  // State to store email, password, and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login process
  const handleLoginClick = () => {
    // Predefined credentials
    const validEmail = 'jb@gmail.com';
    const validPassword = 'admin@123';

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (email !== validEmail) {
      setError('Invalid email address.');
      return;
    }

    if (password !== validPassword) {
      setError('Invalid password.');
      return;
    }

    // Clear the error if input is valid
    setError('');

    // Call onLogin to update authentication state
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-gray-900/20 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-white font-semibold mb-6">Secure Access Made Simple</h2>
        <p className="text-gray-400 mb-4">Accessing your account is easy. Pick your preferred login method.</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mb-4 bg-white text-gray-900 p-3 rounded-lg flex items-center justify-center space-x-2"
        >
          <img src={Google} alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mb-6 bg-gray-800 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
        >
          <img src={Github} alt="GitHub" className="w-5 h-5" />
          <span>Continue with GitHub</span>
        </motion.button>
        
        <p className="text-center text-gray-500 mb-4">OR Register/Login with Gmail</p>
        
        {/* Email Input Field */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Capture input value
          placeholder="Enter your Gmail address"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
        />

        {/* Password Input Field */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Capture password
          placeholder="Enter your password"
          className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-purple-600 text-white p-3 rounded-lg"
          onClick={handleLoginClick} // Trigger login process
        >
          Login
        </motion.button>
        
        <p className="text-center text-gray-500 mt-4">
          Don't have an account? <Link to="/signup" className="text-purple-500">Register</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;
