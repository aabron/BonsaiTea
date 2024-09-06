import React, { useState } from 'react';
import { drinkCategories } from '../utils/arrays';

const Menu: React.FC = () => {
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null);
  const menuImages = [
    '/images/menu1.jpg',
    '/images/menu2.jpg',
    // Add more menu image paths as needed
  ];

  interface DrinkInfo {
    name: string;
    image: string;
    description: string;
    tea: string;
    sugar: string;
    flavor: string;
  }

  return (
    <section id="menu" className="py-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary mt-16">Our Menu</h1>
        <h1 className="text-xl font-bold text-primary mt-5">Hover Over or click a drink to see more information</h1>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuImages.map((image, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Menu page ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div> */}

        <div className={`max-w-6xl mx-auto mt-12`}>
          {Object.entries(drinkCategories).map(([category, drinks]) => (
            <>
              <h1 className="text-2xl font-bold text-primary mt-5 text-center">{category + " " + drinks[0].price} </h1>
              <div className={`grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-12`}>

                {drinks.map((drink) => (
                  <div
                    key={drink.name}
                    className="text-center relative"
                    onMouseEnter={() => setHoveredDrink(drink.name)}
                    onMouseLeave={() => setHoveredDrink(null)}
                  >
                    <div className="bg-cream p-4 rounded-lg shadow-xl relative h-[400px] border-2 border-black">
                      <div
                        className={`absolute left-0 right-0 bottom-full mb-2 bg-cream p-4 rounded-lg shadow-lg text-primary transition-all duration-300 ease-in-out z-50  ${hoveredDrink === drink.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}
                        style={{
                          maxWidth: '100%',
                          width: '250px',
                          left: '50%',
                          transform: hoveredDrink === drink.name ? 'translateX(-50%) translateY(100%)' : 'translateX(-50%) translateY(10px)',
                        }}
                      >
                        <h4 className="font-bold mb-2">{drink.name}</h4>
                        <p><strong>Tea:</strong> {drink.tea}</p>
                        <p><strong>Sugar:</strong> {drink.sugar}</p>
                        <p><strong>Flavor Profile:</strong> {drink.flavor}</p>
                        <p><strong>Price:</strong> {drink.price}</p>
                      </div>
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-bold text-primary mb-2">{drink.name}</h3>
                      <p className="text-primary">{drink.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
        {/* <button className="mr-12 text-2xl px-2 py-5 border-2 bg-cream rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handleNextPage}> {" > "} </button> */}

        <div className="bg-white p-4 rounded-lg mt-8 text-center">
          <strong className="block mb-2">Allergy Notice:</strong>
          <p className="italic text-gray-700">
            Some of our teas contain caffeine, nuts, and other potential allergens.
            Please let us know if you have any allergies or concerns.
          </p>
        </div>
      </div>
    </section >
  );
};

export default Menu;