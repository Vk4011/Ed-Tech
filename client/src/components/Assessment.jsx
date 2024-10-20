import React, { useState } from 'react';
import test from './text.json'; 
const Assessment = () => {
  const [questions] = useState(test); // Use the imported test questions directly
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-black min-h-screen">
      <h1 className="text-3xl text-center text-green-400 mb-8">Quiz Assignment</h1>
      {score === null ? (
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-green-300">{index + 1}. {question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mt-2">
                  <label className="text-green-100 flex items-center">
                    <input
                      type="radio"
                      id={`q${index}_o${optionIndex}`}
                      name={`question_${index}`}
                      value={optionIndex}
                      checked={answers[index] === optionIndex}
                      onChange={() => handleAnswerChange(index, optionIndex)}
                      className="mr-2 text-blue-500"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl text-green-300">Your Score: {score}/{questions.length}</h2>
          <button
            onClick={() => setScore(null)}
            className="w-full mt-4 p-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-200"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Assessment;
