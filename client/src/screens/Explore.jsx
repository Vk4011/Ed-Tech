import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Explore = () => {
  // State to handle language selection
  const [selectedLanguage, setSelectedLanguage] = useState('C++');
  const [codeSnippet, setCodeSnippet] = useState(`#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello world!" << endl;\n  return 0;\n}`);

  // Language options with default code snippets
  const languageOptions = {
    'C++': `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello world!" << endl;\n  return 0;\n}`,
    'Python': `print("Hello world!")`,
    'JavaScript': `console.log("Hello world!");`,
    'Java': `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello world!");\n  }\n}`,
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    setCodeSnippet(languageOptions[lang]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <h1 className="text-4xl font-bold">Code Editor</h1>
        <p className="text-gray-400">Write and run your code below</p>
      </motion.div>

      {/* Language Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <label htmlFor="language" className="mr-4 text-lg">Select Language:</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="bg-gray-800/60 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(languageOptions).map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </motion.div>

      {/* Code Editor Section */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        {/* Code Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/60 p-4 rounded-lg shadow-lg col-span-2"
        >
          <h2 className="text-lg font-semibold mb-2 text-blue-400">Source - {selectedLanguage} Code</h2>
          <textarea
            className="w-full h-64 bg-gray-900/50 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your code here..."
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
          />
        </motion.div>

        {/* Input and Output Section */}
        <div className="flex flex-col space-y-4">
          {/* Input Section (STDIN) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/60 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-2 text-purple-400">STDIN</h2>
            <textarea
              className="w-full h-32 bg-gray-900/50 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your input goes here..."
            />
          </motion.div>

          {/* Output Section (STDOUT) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/60 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-2 text-green-400">STDOUT</h2>
            <div className="w-full h-32 bg-gray-900/50 text-gray-400 p-4 rounded-lg border border-gray-700">
              Your output will be displayed here...
            </div>
          </motion.div>
        </div>
      </div>

      {/* Run Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
      >
        Run Code
      </motion.button>
    </div>
  );
};

export default Explore;
