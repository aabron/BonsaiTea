import React, { useState } from 'react';
import { questions, drinkCategories, DrinkInfo } from '../utils/arrays';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<DrinkInfo | null>(null);
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null);

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const randomIndex = Math.floor(Math.random() * drinkCategories["Signature Tea"].length);
      setResult(drinkCategories["Signature Tea"][randomIndex]);
      setShowResult(true);
    }
  };

  return (
    <section id="quiz" className="py-[6rem] px-4 bg-cream min-h-[90vh]">
      <div className="max-w-2xl mx-auto mt-12">
        <h1 className="text-3xl font-bold text-primary text-center">Find Your Perfect Surprise Tea</h1>
        <div className="md:text-xl text-lg flex justify-center items-center text-center mb-8">
          <div className="w-1/2">
            <p>Get a random tea from the menu for you to try!</p>
          </div>
        </div>
        {!showResult ? (

                <button
                  onClick={handleAnswer}
                  className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-green-700 transition duration-300"
                >
                  Get Tea
                </button>

        ) : (
          <div className=" p-6 rounded-lg text-center ">
            <div
                    key={result?.name}
                    className="text-center relative"
                    onMouseEnter={() => setHoveredDrink(result?.name || "")}
                    onMouseLeave={() => setHoveredDrink(null)}
                  >
                    <div className="bg-cream p-4 rounded-lg shadow-lg relative border-black">
                      <div
                        className={`absolute left-0 right-0 bottom-full mb-2 bg-cream p-4 rounded-lg shadow-lg text-primary transition-all duration-300 ease-in-out z-50 ${hoveredDrink === result?.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}
                        style={{
                          maxWidth: '100%',
                          width: '250px',
                          left: '50%',
                          transform: hoveredDrink === result?.name ? 'translateX(-50%) translateY(100%)' : 'translateX(-50%) translateY(10px)',
                        }}
                      >
                        <h4 className="font-bold mb-2">{result?.name}</h4>
                        <p><strong>Tea:</strong> {result?.tea}</p>
                        <p><strong>Sugar:</strong> {result?.sugar}</p>
                        <p><strong>Flavor Profile:</strong> {result?.flavor}</p>
                        <p><strong>Price:</strong> {result?.price}</p>
                      </div>
                      <img
                        src={result?.image}
                        alt={result?.name}
                        className="md:w-full w-full h-64 md:h-max object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-primary mb-2">{result?.name}</h3>
                      <p className="text-primary">{result?.description}</p>
                    </div>
                  </div>
            <button
              onClick={handleAnswer}
              className=" mt-10 py-2 px-4 bg-primary text-white rounded hover:bg-green-700 transition duration-300"
            >
              Get Another Tea
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;