import React, { useState } from 'react';
import { motion } from 'framer-motion';
import questionsData from '../components/text.json';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questionsData[currentQuestion];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setSelectedOption(null);
      setCurrentQuestion((prev) => (prev + 1) % questionsData.length);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        className="max-w-md w-full p-8 bg-gray-900 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-lg mb-4 font-semibold">
          Question {currentQuestion + 1}/{questionsData.length}
        </div>
        <div className="text-xl mb-6">{question.question}</div>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full p-4 rounded-lg border border-blue-500 ${
                selectedOption === index
                  ? 'bg-blue-600'
                  : 'bg-gray-800 hover:bg-blue-700'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showAnswer ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {showAnswer &&
            (selectedOption === question.answer ? (
              <span className="text-green-400">Correct!</span>
            ) : (
              <span className="text-red-400">Wrong Answer</span>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Test;
