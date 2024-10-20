import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ed-tech-hsnl.onrender.com/api/auth/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-300 flex flex-col items-center p-4 sm:p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-12 text-blue-400"
      >
        User Data
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="overflow-hidden rounded-lg shadow-lg w-full max-w-full sm:max-w-5xl overflow-x-auto"
      >
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full table-auto border-collapse bg-gray-800 text-left"
        >
          <thead>
            <tr>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">SI</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">Username</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">Email</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">Phone</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">Date of Birth</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">College</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-green-800 text-blue-300">State</th>
            </tr>
          </thead>
          <motion.tbody>
            {data.map((user, index) => (
              <motion.tr
                key={user._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, backgroundColor: '#234e52', transition: { duration: 0.3 } }}
                className="cursor-pointer transition-all"
              >
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{index + 1}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{user.username}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{user.email}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{user.phone}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{new Date(user.dob).toLocaleDateString()}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{user.college}</td>
                <td className="border border-green-600 p-2 sm:p-4 text-green-200">{user.state}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </motion.div>
    </div>
  );
};

export default Data;
