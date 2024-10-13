import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PasswordModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-zinc-900 rounded-lg p-6 w-full max-w-sm shadow-xl relative">
        <div className="absolute top-3 right-3">
          <motion.button 
            whileHover={{ rotate: 90 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-all"
          >
            ✕
          </motion.button>
        </div>

        <h2 className="text-lg font-bold text-center text-white mb-6">Login to your account</h2>
        <label className="block text-gray-400 mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-full mb-4 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm mb-4 block text-right">
          Forgot Password
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white p-3 rounded-full"
        >
          Login
        </motion.button>
        <p className="text-center text-gray-500 text-sm mt-4">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="text-blue-400 hover:underline">Terms & Conditions</Link> 
          &{' '}
          <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default PasswordModal;
