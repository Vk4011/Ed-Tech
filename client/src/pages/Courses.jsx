import React from 'react';
import { motion } from 'framer-motion';
import mern from "../images/MERN.webp"; // Correctly importing the image
import Java from "../images/JavaFs.png";
import Dsa from "../images/Dsa.jpg";
import Flutter from "../images/flutter.jpg";
import py from "../images/python.png";
import ReactNative from "../images/react.png";
const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Data Structures & Algorithms BootCamp',
      price: '₹8499',
      originalPrice: '₹15000',
      discount: '50% off',
      imgSrc: Dsa, // Use the correct image path
      tag: 'New',
    },
    {
      id: 2,
      title: 'Java Full Stack BootCamp',
      price: '₹21999',
      originalPrice: '₹28000',
      discount: '57% off',
      imgSrc: Java,
    },
    {
      id: 3,
      title: 'Web Development Master Course',
      price: '₹24999',
      originalPrice: '₹29999',
      discount: '50% off',
      imgSrc: mern, // Directly using the imported image
    },
    {
      id: 4,
      title: 'Flutter BootCamp',
      price: '₹21999',
      originalPrice: '₹28000',
      discount: '57% off',
      imgSrc: Flutter, // Directly using the imported image
    },
    {
      id: 5,
      title: 'React Native',
      price: '₹21999',
      originalPrice: '₹28000',
      discount: '57% off',
      imgSrc: ReactNative, // Directly using the imported image
    },
    {
      id: 6,
      title: 'Python Full Stack',
      price: '₹21999',
      originalPrice: '₹28000',
      discount: '57% off',
      imgSrc: py, // Directly using the imported image
    },
    




  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-sans">
      <h1 className="text-4xl font-bold mt-8 mb-12 text-center">What would you like to <span className="text-blue-400">learn?</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl shadow-lg w-full max-w-sm mx-auto bg-gray-800/40 backdrop-blur-lg"
          >
            {course.tag && (
              <div className="bg-purple-500 text-xs text-white px-2 py-1 rounded-full absolute top-4 left-4">
                {course.tag}
              </div>
            )}
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-400 line-through">{course.originalPrice}</p>
            <p className="text-2xl font-bold">{course.price}</p>
            <div className="text-green-400 font-semibold mt-2">{course.discount}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
