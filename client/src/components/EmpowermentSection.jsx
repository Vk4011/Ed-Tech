import React from 'react';

const EmpowermentSection = () => {
  return (
    <div className="bg-black text-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Empowering Coders, Enabling Innovation
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8 text-base sm:text-lg">
            Discover the limitless possibilities of coding with JBTech, a community-driven platform 
            designed to upskill coders of all experience levels. Learn from the best and take your 
            career to new heights.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-purple-700 transition-all">
            Let's Connect
          </button>
        </div>

        {/* Right Side Features */}
        <div className="flex flex-col space-y-6 md:space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-3 md:space-x-4">
            <div className="flex items-center justify-center bg-green-500 rounded-full h-10 w-10 md:h-12 md:w-12">
              <i className="fas fa-rocket text-white"></i>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Grow Your Career</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Leverage our expertly designed courses to grow your skillset and advance your career
                in the tech industry.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-3 md:space-x-4">
            <div className="flex items-center justify-center bg-orange-500 rounded-full h-10 w-10 md:h-12 md:w-12">
              <i className="fas fa-laptop-code text-white"></i>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Hands-On Learning</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Engage in practical, real-world projects designed by industry experts to give you
                the hands-on experience you need.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex items-start space-x-3 md:space-x-4">
            <div className="flex items-center justify-center bg-blue-500 rounded-full h-10 w-10 md:h-12 md:w-12">
              <i className="fas fa-chart-line text-white"></i>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Achieve Career Success</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Our platform is built to guide you through every step of your learning journey, 
                ensuring your success in the competitive tech field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentSection;
