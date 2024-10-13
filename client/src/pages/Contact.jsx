import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your message"
              />
            </div>

            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Right Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-600 p-8 rounded-lg shadow-lg flex flex-col justify-between text-white"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg">For inquiries, reach us at:</p>
            <p className="mt-4 flex items-center">
              <span className="mr-2">📧</span> support@JB.in
            </p>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" aria-label="Telegram" className="text-white hover:text-gray-300">
              <i className="fab fa-telegram-plane text-2xl"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" aria-label="Discord" className="text-white hover:text-gray-300">
              <i className="fab fa-discord text-2xl"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
