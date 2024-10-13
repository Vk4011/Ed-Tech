import React from 'react';
import EmpowermentSection from '../components/EmpowermentSection';

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Crack the Code to Success with <span className="text-purple-500">JBTech</span>
          </h1>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            Master your programming skills, solve challenges, and unlock the vast world of coding opportunities.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button
              className="bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all"
              aria-label="View Courses"
            >
              View Courses
            </button>
            <button
              className="bg-transparent border border-pink-500 text-pink-500 px-6 py-3 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center"
              aria-label="Watch Live Video"
            >
              Watch Video <span className="text-red-500 ml-2">Live</span> &rarr;
            </button>
          </div>
          {/* Student Count */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {/* Dynamic placeholder for student avatars */}
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://via.placeholder.com/40?text=${i + 1}`}
                  alt={`student-${i + 1}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm sm:text-lg">5,000+ Happy Students</span>
          </div>
        </div>
        {/* Right Side Feature Buttons */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            'Web Dev',
            'App Dev',
            'JAVA FS',
            'MERN',
            'Dev Challenges',
            'Interview Experiences',
            'Mock Tests',
            'Core CS Subjects'
          ].map((item) => (
            <button
              key={item}
              className="bg-gray-900 border border-gray-700 px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-lg font-medium rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all transform hover:scale-105"
              aria-label={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-900">
        <EmpowermentSection />
      </div>
    </div>
  );
};

export default LandingPage;
