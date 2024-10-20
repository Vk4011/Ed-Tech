import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 shadow-lg">
      {/* Middle Section: Search Input */}
      <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-600 bg-gray-700 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>

      {/* Right Section: Profile and Logout */}
      <div className="flex items-center space-x-4">
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_v/19136.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <span className="text-white text-lg font-medium">jb</span>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
          transition={{ duration: 0.3 }}
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
