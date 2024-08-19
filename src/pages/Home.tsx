import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';

const licenseKey = 'YOUR_LICENSE_KEY'; // Replace with your actual license key if you have one

interface DrinkInfo {
  name: string;
  image: string;
  description: string;
  tea: string;
  sugar: string;
  flavor: string;
}

const featuredDrinks: DrinkInfo[] = [
  {
    name: "Bonsai Black",
    image: "/images/bonsai-black.jpg",
    description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
    tea: "Black Tea",
    sugar: "50% sweetness",
    flavor: "Fruity, Floral, Balanced"
  },
  {
    name: "Yucha Green",
    image: "/images/yucha-green.png",
    description: "Yuzu, Green Tea, Lemon, Honey",
    tea: "Green Tea",
    sugar: "30% sweetness",
    flavor: "Citrusy, Fresh, Slightly Sweet"
  },
  {
    name: "Passion Burst",
    image: "/images/passion-burst.png",
    description: "Passion Fruit, Lemon, Jasmine",
    tea: "Jasmine Tea",
    sugar: "25% sweetness",
    flavor: "Tangy, Floral, Refreshing"
  }
];

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null);

  return (
    <>
      <ReactFullpage
        licenseKey={licenseKey}
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        credits={{ enabled: true, label: 'Made with fullPage.js', position: 'right' }}
        afterLoad={(origin, destination) => {
          setCurrentSection(destination.index);
        }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section bg-cover bg-center" style={{backgroundImage: 'url("/images/hero-bg.jpg")'}}>
              <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-5xl font-serif text-cream mb-4">Welcome to Bonsai Tea</h1>
                <p className="text-2xl text-cream">Discover the art of tea in Winter Park, Florida</p>
              </div>
            </div>
            <div className="section bg-primary">
              <h2 className="text-4xl font-serif text-cream mb-8">Featured Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredDrinks.map((drink) => (
                  <div 
                    key={drink.name} 
                    className="text-center relative"
                    onMouseEnter={() => setHoveredDrink(drink.name)}
                    onMouseLeave={() => setHoveredDrink(null)}
                  >
                    <img 
                      src={drink.image}
                      alt={drink.name} 
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-cream mb-2">{drink.name}</h3>
                    <p className="text-cream">{drink.description}</p>
                    <div 
                      className={`absolute top-0 left-full ml-4 bg-white p-4 rounded-lg shadow-lg text-primary w-64 transition-opacity duration-300 ease-in-out ${
                        hoveredDrink === drink.name ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <h4 className="font-bold mb-2">{drink.name}</h4>
                      <p><strong>Tea:</strong> {drink.tea}</p>
                      <p><strong>Sugar:</strong> {drink.sugar}</p>
                      <p><strong>Flavor Profile:</strong> {drink.flavor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="section bg-cream">
              <h2 className="text-4xl font-serif text-primary mb-8">Explore Our Menu</h2>
              <Link 
                to="/menu" 
                className="inline-block bg-primary text-cream font-bold py-3 px-6 rounded-full hover:bg-secondary transition-colors duration-300"
              >
                View Full Menu
              </Link>
            </div>
            <div className="section bg-secondary">
              <h2 className="text-4xl font-serif text-cream mb-8">Find Your Perfect Tea</h2>
              <p className="text-cream mb-6">Take our quick quiz and get a personalized drink suggestion!</p>
              <Link 
                to="/quiz" 
                className="inline-block bg-primary text-cream font-bold py-3 px-6 rounded-full hover:bg-cream hover:text-primary transition-colors duration-300"
              >
                Take the Quiz
              </Link>
            </div>
            <div className="section bg-cream">
              <div className="max-w-3xl mx-auto text-primary">
                <h2 className="text-4xl font-serif mb-6">Our Story</h2>
                <p className="text-lg mb-4">
                  Bonsai Tea brings the tranquility and precision of bonsai art to your cup. 
                  Founded in 2022, we craft unique tea creations that delight the senses.
                </p>
                <p className="text-lg">
                  Our journey is one of passion, dedication, and a deep appreciation for the 
                  ancient art of tea making. Every cup we serve is a testament to our commitment 
                  to quality and the rich traditions we honor.
                </p>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default Home;