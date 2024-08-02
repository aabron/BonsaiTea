import React, { useState } from 'react';
import { questions, recommendations, Question, Recommendation } from '../utils/arrays';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // For simplicity, we're just choosing a random recommendation
      // In a real app, you'd use the answers to determine the best recommendation
      const randomIndex = Math.floor(Math.random() * recommendations.length);
      setResult(recommendations[randomIndex]);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-[6rem] px-4 bg-gray-50 min-h-max">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-primary text-center">Find Your Perfect Boba Tea</h1>
        <div className="md:text-xl text-lg flex justify-center items-center text-center mb-8">
          <div className="w-1/2">
            <p>Use our quiz to find out what kind of boba tea is best for you.</p>
          </div>
        </div>
        {!showResult ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={handleAnswer}
                  className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-green-700 transition duration-300"
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">Your Recommended Drink:</h2>
            <p className="text-xl mb-2">{result?.name}</p>
            <p className="text-gray-600 mb-6">{result?.description}</p>
            <button
              onClick={restartQuiz}
              className="py-2 px-4 bg-primary text-white rounded hover:bg-green-700 transition duration-300"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;