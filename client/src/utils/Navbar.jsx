import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Updated for Heroicons v2
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      className="bg-black text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl font-bold"
            >
              <Link to="/">
                <span className="text-blue-400">JB</span>
                <span className="text-purple-500">Tech</span>
              </Link>
            </motion.div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { name: "Home", to: "/" },
              { name: "Courses", to: "/courses" },
              { name: "Explore", to: "/explore" },
              { name: "Contact", to: "/contact" },
              { name: "About", to: "/about" },
              { name: "Tutorials", to: "/tutorials" },
            ].map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Link to={item.to} className="text-gray-300 hover:text-white">
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg"
              >
                Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black text-white"
        >
          <div className="flex flex-col space-y-4 p-4">
            {[
              { name: "Home", to: "/" },
              { name: "Courses", to: "/courses" },
              { name: "Explore", to: "/explore" },
              { name: "Contact", to: "/contact" },
              { name: "About", to: "/about" },
              { name: "Tutorials", to: "/tutorials" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:text-white text-lg"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/signup">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full">
                Login
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
