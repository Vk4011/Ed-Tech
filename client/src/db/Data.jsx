import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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

  // Function to export data as Excel file
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'UserData');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(dataBlob, 'UserData.xlsx');
  };

  // Function to export data as PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('User Data', 14, 22);
    const tableData = data.map((user, index) => [
      index + 1,
      user.username,
      user.email,
      user.phone,
      new Date(user.dob).toLocaleDateString(),
      user.college,
      user.state,
    ]);
    doc.autoTable({
      head: [['SI', 'Username', 'Email', 'Phone', 'Date of Birth', 'College', 'State']],
      body: tableData,
      startY: 30,
    });
    doc.save('UserData.pdf');
  };

  return (
    <div className="min-h-screen bg-black text-green-300 flex flex-col items-center p-4 sm:p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-12 text-green-400"
      >
        User Data
      </motion.h1>
      <div className="flex gap-4 mb-8">
        <button 
          onClick={exportToExcel}
          className="bg-green-500 text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-400 transition-all"
        >
          Download Excel
        </button>
        <button 
          onClick={exportToPDF}
          className="bg-green-500 text-black font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-400 transition-all"
        >
          Download PDF
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="overflow-hidden rounded-lg shadow-lg w-full max-w-full sm:max-w-5xl overflow-x-auto bg-opacity-20 bg-green-900 backdrop-blur-lg border border-green-500"
      >
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full table-auto border-collapse bg-black text-left"
        >
          <thead>
            <tr>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">SI</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">Username</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">Email</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">Phone</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">Date of Birth</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">College</th>
              <th className="border border-green-500 p-2 sm:p-4 bg-opacity-30 bg-green-800 text-green-300">State</th>
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
