import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { username, email } = location.state || {}; // Get username and email from state

  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call)
    console.log({ username, email, phone, state, password });
    // Navigate to a success or login page after submission
    navigate('/success'); // Example redirect
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-gray-900/20 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-white font-semibold mb-6">Complete Your Registration</h2>
        
        <p className="text-gray-400 mb-4">Fill in the details below to create your account.</p>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 placeholder-gray-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubmit} // Handle registration submission
          className="w-full bg-purple-600 text-white p-3 rounded-lg"
        >
          Complete Registration
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RegisterDetails;
