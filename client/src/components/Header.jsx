// src/components/Header.js
import React from "react";
import { motion } from "framer-motion"; // Optional: For animations
import { useNavigate } from 'react-router-dom'; // To navigate on logout

const Header = ({ onLogout }) => { // Receive onLogout as a prop
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the onLogout function passed from Main.js (which is from AuthContext)
    onLogout();

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
      {/* Left Section: Welcome Message */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
      </div>

      {/* Middle Section: Search Input */}
      <div className="w-1/3 px-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-600 bg-gray-700 text-white rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Right Section: Profile and Logout */}
      <div className="flex items-center space-x-4">
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_v/19136.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-500 shadow-sm"
        />
        <span className="text-white text-lg font-medium">jb</span>
        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleLogout} // Trigger logout on click
          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
