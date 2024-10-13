import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';
import OtpModal from './OtpModal';
import RecoverPasswordModal from './RecoverPasswordModal';

const ProfessionalLogin = () => {
  const navigate = useNavigate();

  // State to manage modals visibility
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isRecoverPasswordModalOpen, setIsRecoverPasswordModalOpen] = useState(false);

  // Framer Motion variants for smooth closing animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-zinc-950 p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="max-w-md w-full bg-gray-900/20 p-6 rounded-lg shadow-lg"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <motion.button 
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
            onClick={() => navigate(-1)} // Navigate back on close
          >
            ✕
          </motion.button>
        </div>

        {/* Title */}
        <h2 className="text-xl text-white font-bold mb-4 text-center">Login to your account</h2>

        {/* Buttons */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mb-4 bg-blue-600 text-white p-3 rounded-lg"
          onClick={() => setIsPasswordModalOpen(true)} // Open Password Modal
        >
          Login with Password
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mb-6 bg-blue-500 text-white p-3 rounded-lg"
          onClick={() => setIsOtpModalOpen(true)} // Open OTP Modal
        >
          Login with OTP
        </motion.button>

        {/* Forgot Password */}
        <div className="text-center mb-4">
          <button onClick={() => setIsRecoverPasswordModalOpen(true)} className="text-blue-400 hover:underline">
            Forgot Password
          </button>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-gray-500 text-sm mt-4">
          By signing up, you agree to our{' '}
          <Link to="/terms" className="text-blue-400 hover:underline">Terms & Conditions</Link> 
          &{' '}
          <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
        </p>
      </motion.div>

      {/* Modals */}
      {isPasswordModalOpen && <PasswordModal onClose={() => setIsPasswordModalOpen(false)} />}
      {isOtpModalOpen && <OtpModal onClose={() => setIsOtpModalOpen(false)} />}
      {isRecoverPasswordModalOpen && <RecoverPasswordModal onClose={() => setIsRecoverPasswordModalOpen(false)} />}
    </div>
  );
};

export default ProfessionalLogin;
