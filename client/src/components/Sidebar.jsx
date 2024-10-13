// src/components/Sidebar.jsx
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
  ];

  return (
    <>
      <motion.div
        initial={{ width: isOpen ? "16rem" : "4rem" }}
        animate={{ width: isOpen ? "16rem" : "4rem" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-slate-900 shadow-md h-screen z-40 relative flex flex-col"
        style={{ overflow: "hidden" }}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-gray-700 p-2 rounded-full shadow-md z-50"
            aria-label="Close Sidebar"
          >
            <FiX className="text-2xl text-white" />
          </button>
        )}

        <ul className="space-y-4 p-4 mt-16">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex items-center space-x-3 cursor-pointer rounded-md p-2 ${
                  isActive ? "bg-gray-700" : ""
                }`}
              >
                <Link
                  to={item.to}
                  className="flex items-center w-full text-gray-300 hover:text-blue-500"
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-content={!isOpen ? item.label : ""}
                >
                  <div className="text-gray-300 hover:text-blue-500">
                    {item.icon}
                  </div>
                  {isOpen && (
                    <span className="ml-3 text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </Link>
                {/* Tooltip for Icons when Sidebar is Collapsed */}
                {!isOpen && (
                  <Tooltip
                    id={`tooltip-${index}`}
                    place="right"
                    effect="solid"
                    className="bg-gray-700 text-white"
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

export default Sidebar;
