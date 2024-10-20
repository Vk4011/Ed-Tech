import React from "react";
import { motion } from "framer-motion";
import { FiX, FiHome, FiBook, FiList, FiEdit, FiFileText } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    { label: "Home", to: "/", icon: <FiHome size={20} /> },
    { label: "My Courses", to: "/mycourses", icon: <FiBook size={20} /> },
    { label: "Courses", to: "/courses", icon: <FiList size={20} /> },
    { label: "Editor", to: "/editor", icon: <FiEdit size={20} /> },
    { label: "Assessments", to: "/assessment", icon: <FiFileText size={20} /> },
    { label: "Data", to: "/data", icon: <FiFileText size={20} /> } // Changed to lowercase "/data"
    
  ];

  return (
    <motion.div
      initial={{ width: isOpen ? "16rem" : "4rem" }}
      animate={{ width: isOpen ? "16rem" : "4rem" }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-slate-900 shadow-lg h-screen z-40 relative flex flex-col"
      style={{ overflow: "visible" }}
    >
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full shadow-md z-50 hover:bg-gray-600"
          aria-label="Close Sidebar"
        >
          <FiX className="text-2xl text-white" />
        </button>
      )}

      <div className="flex flex-col justify-center flex-grow">
        <ul className="space-y-6 p-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "#2563eb", color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-center space-x-3 cursor-pointer rounded-md p-2 transition-all duration-300 ${
                  isActive ? "bg-blue-600 text-white" : ""
                }`}
              >
                <Link
                  to={item.to}
                  className="flex items-center w-full text-gray-300 hover:text-white"
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-content={!isOpen ? item.label : ""}
                >
                  <div className="text-gray-300 hover:text-white">
                    {item.icon}
                  </div>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="ml-3 text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </Link>
                {!isOpen && (
                  <Tooltip
                    id={`tooltip-${index}`}
                    place="right"
                    effect="solid"
                    className="bg-gray-700 text-white z-50"
                    offset={[10, 0]}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
