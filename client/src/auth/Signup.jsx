import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Navigate to RegisterDetails component with username and email
    navigate('/register-details', { state: { username, email } });
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
        <p className="text-gray-400 mb-4">Accessing your account is easy. Please register with your details.</p>
        
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
          className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleRegister} // Navigate to RegisterDetails on click
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
