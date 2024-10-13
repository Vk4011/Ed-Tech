import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Sample data for instructors
const instructors = [
  {
    name: 'Chiythanaya',
    title: 'CEO, Flutter App Development Instructor',
    description:
      'Chiythanaya is the CEO and a seasoned Flutter app development instructor. With years of experience in building cross-platform mobile applications, he has helped many developers master Flutter. His teaching style is highly appreciated for simplifying complex concepts.',
    image: 'https://4kwallpapers.com/images/walls/thumbs/17833.jpg', // Replace with actual image path
  },
  {
    name: 'Muhammad Vali',
    title: 'Founder, Java Fullstack Instructor',
    description:
      'Muhammad Vali is the founder and a highly skilled Java Fullstack instructor. He is known for his expertise in backend and frontend development, with a strong focus on Java technologies. He has mentored numerous students and working professionals to become proficient in full-stack Java development.',
    image: 'https://4kwallpapers.com/images/walls/thumbs/19004.jpg', // Replace with actual image path
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-poppins">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Instructors</h2>
      <h4 className="text-lg font-light mb-8 text-gray-400 text-center">
        Discover brilliance in code with our expert instructors. Passionate mentors dedicated to fueling your coding journey at JB.
      </h4>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/20 rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-2/5 text-center"
      >
        <motion.img
          src={instructors[currentIndex].image}
          alt={instructors[currentIndex].name}
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg shadow-purple-500/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-2xl font-semibold mb-2">{instructors[currentIndex].name}</h3>
        <p className="text-md font-medium mb-4 text-gray-300">{instructors[currentIndex].title}</p>
        <p className="text-gray-400">{instructors[currentIndex].description}</p>
      </motion.div>

      <div className="flex items-center justify-center space-x-6 mt-8">
        <motion.button
          onClick={handlePrev}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-700 p-4 rounded-full focus:outline-none hover:bg-gray-600"
        >
          <FaArrowLeft className="text-white text-lg" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gray-700 p-4 rounded-full focus:outline-none hover:bg-gray-600"
        >
          <FaArrowRight className="text-white text-lg" />
        </motion.button>
      </div>
    </div>
  );
};

export default About;
