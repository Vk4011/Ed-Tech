import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import FiMenu

// Import your components
import Home from "../components/Home";
import Assessment from "../components/Assessment";
import Editor from "../components/Editor";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar state

  return (
    <Router>
      <div className="flex h-screen relative">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <div className="flex-grow p-6 bg-black">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/editor" element={<Editor />} />
              {/* Add other routes */}
              <Route
                path="/mycourses"
                element={<h1 className="text-2xl font-bold text-blue-600">My Courses Page</h1>}
              />
              <Route
                path="/courses"
                element={<h1 className="text-2xl font-bold text-blue-600">Courses Page</h1>}
              />
            </Routes>
          </div>
        </div>

        {/* Toggle Button to Open the Sidebar when it's closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 left-4 bg-gray-100 p-2 rounded-full shadow-md z-50"
          >
            <FiMenu className="text-2xl" />
          </button>
        )}
      </div>
    </Router>
  );
};

export default Main;
