import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OtpModal = ({ onClose }) => {
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

        <h2 className="text-lg font-bold text-center text-white mb-6">Verify OTP</h2>
        <label className="block text-gray-400 mb-2">Enter OTP</label>
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-full mb-4 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <div className="bg-green-200 text-gray-900 p-2 rounded-lg mb-4">
          We've sent an OTP to your phone/email
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white p-3 rounded-full"
        >
          Submit
        </motion.button>
        <p className="text-center text-gray-400 text-sm mt-4">
          Request new OTP in 25 seconds
        </p>
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

export default OtpModal;
