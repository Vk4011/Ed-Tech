import React from 'react';

const assessmentsData = [
  { title: 'byteXL Certification Assignment', description: 'Future Class Benchmark Test', link: '#' },
  { title: 'byteXL Coding Challenge', description: 'Weekly Challenge', link: '#' },
  { title: 'Verbal', description: "Practice (MCQ'S)", link: '#' },
  { title: 'QIS', description: 'Assessments', link: '#' },
];

const Assessment = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6" style={{ height: '600px' }}>
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Assessments Groups</h1>
      <div className="overflow-x-auto h-full">
        <div className="bg-gray-800 shadow rounded-lg h-60%">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-blue-300">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-blue-300">Description</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-blue-300">Go to Assessments</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {assessmentsData.map((assessment, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{assessment.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{assessment.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={assessment.link} className="text-blue-500 hover:text-blue-300 transition-colors duration-200">
                      Open
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
