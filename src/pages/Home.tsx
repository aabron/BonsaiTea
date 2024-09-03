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
    image: "/images/Bonsai-Black.jpg",
    description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
    tea: "Black Tea",
    sugar: "50% sweetness",
    flavor: "Fruity, Floral, Balanced"
  },
  {
    name: "Yucha Green",
    image: "/images/Yucha-Green.png",
    description: "Yuzu, Green Tea, Lemon, Honey",
    tea: "Green Tea",
    sugar: "30% sweetness",
    flavor: "Citrusy, Fresh, Slightly Sweet"
  },
  {
    name: "Passion Burst",
    image: "/images/Passion-Burst.png",
    description: "Passion Fruit, Lemon, Jasmine",
    tea: "Jasmine Tea",
    sugar: "25% sweetness",
    flavor: "Tangy, Floral, Refreshing"
  },{
    name: "Bonsai ",
    image: "/images/Bonsai-Black.jpg",
    description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
    tea: "Black Tea",
    sugar: "50% sweetness",
    flavor: "Fruity, Floral, Balanced"
  },
  {
    name: "Yucha ",
    image: "/images/Yucha-Green.png",
    description: "Yuzu, Green Tea, Lemon, Honey",
    tea: "Green Tea",
    sugar: "30% sweetness",
    flavor: "Citrusy, Fresh, Slightly Sweet"
  },
  {
    name: "Passion ",
    image: "/images/Passion-Burst.png",
    description: "Passion Fruit, Lemon, Jasmine",
    tea: "Jasmine Tea",
    sugar: "25% sweetness",
    flavor: "Tangy, Floral, Refreshing"
  },
  {
    name: " Black",
    image: "/images/Bonsai-Black.jpg",
    description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
    tea: "Black Tea",
    sugar: "50% sweetness",
    flavor: "Fruity, Floral, Balanced"
  },
  {
    name: " Green",
    image: "/images/Yucha-Green.png",
    description: "Yuzu, Green Tea, Lemon, Honey",
    tea: "Green Tea",
    sugar: "30% sweetness",
    flavor: "Citrusy, Fresh, Slightly Sweet"
  },
  {
    name: " Burst",
    image: "/images/Passion-Burst.png",
    description: "Passion Fruit, Lemon, Jasmine",
    tea: "Jasmine Tea",
    sugar: "25% sweetness",
    flavor: "Tangy, Floral, Refreshing"
  }
];

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 3;
  const totalPages = Math.ceil(featuredDrinks.length / questionsPerPage);
  const validCurrentPage = Math.min(Math.max(currentPage, 0), totalPages - 1);
  const startIndex = validCurrentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentDrinks = featuredDrinks.slice(startIndex, endIndex);
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState('');

  console.log(currentPage)

  React.useEffect(() => {
    setAnimationClass('');
  }, [currentPage]);

  const handleNextPage = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      if(currentPage === (featuredDrinks.length / questionsPerPage) - 1) {
        setCurrentPage(0);
      } else {
        setCurrentPage((prevPage) => prevPage + 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };
  console.log(animationClass)

  const handlePrevPage = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      if(currentPage === 0) {
        setCurrentPage((featuredDrinks.length / questionsPerPage) - 1);
      } else {
        setCurrentPage((prevPage) => prevPage - 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };

  return (
    <>
      <ReactFullpage
        licenseKey={licenseKey}
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        credits={{ enabled: false }}
        afterLoad={(origin, destination) => {
          setCurrentSection(destination.index);
        }}
        fitToSection={true}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section bg-primary -z-20">
            <img src="/images/header2.jpg" alt="header" className="w-[2000px] h-[1200px] object-cover absolute top-0 -z-10" />
              <div className="bg-black bg-opacity-70 p-8 rounded-lg z-20 mx-12">
                <h1 className="text-5xl  text-cream mb-4">Welcome to Bonsai Tea</h1>
                <p className="text-2xl text-cream">Discover the art of tea in Winter Park, Florida</p>
              </div>
            </div>
            <div className="section bg-primary">
              <h2 className="text-4xl text-cream mb-8 flex flex-col items-center justify-center px-4">Featured Drinks</h2>
              <div className="flex justify-center items-center">
                <button className="ml-12 text-2xl px-2 py-5 border-2 bg-cream rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handlePrevPage}> {" < "} </button>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ${animationClass}`}>
                  {currentDrinks.map((drink) => (
                    <div
                      key={drink.name}
                      className="text-center relative"
                      onMouseEnter={() => setHoveredDrink(drink.name)}
                      onMouseLeave={() => setHoveredDrink(null)}
                    >
                      <div className="bg-cream p-4 rounded-lg shadow-lg relative w-[350px] md:w-full">
                        <div
                          className={`w-[250px] max-w-full left-[50%] absolute right-0 bottom-full mb-2 bg-cream p-4 rounded-lg shadow-lg text-primary transition-all duration-300 ease-in-out z-50 ${hoveredDrink === drink.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                            }`}
                          style={{
                            transform: hoveredDrink === drink.name ? 'translateX(-50%) translateY(100%)' : 'translateX(-50%) translateY(10px)',
                          }}
                        >
                          <h4 className="font-bold mb-2">{drink.name}</h4>
                          <p><strong>Tea:</strong> {drink.tea}</p>
                          <p><strong>Sugar:</strong> {drink.sugar}</p>
                          <p><strong>Flavor Profile:</strong> {drink.flavor}</p>
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
                <button className="mr-12 text-2xl px-2 py-5 border-2 bg-cream rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handleNextPage}> {" > "} </button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className={`w-3 h-3 rounded-full mx-2 bg-cream ${currentPage === 0 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-cream ${currentPage === 1 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-cream ${currentPage === 2 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
              </div>
            </div>
            <div className="section bg-cream flex flex-col items-center justify-center h-full px-4">
              <h2 className="text-4xl  text-primary mb-8">Explore Our Menu</h2>
              <Link
                to="/menu"
                className="inline-block bg-primary text-cream font-bold py-3 px-6 rounded-full hover:bg-secondary transition-colors duration-300"
              >
                View Full Menu
              </Link>
            </div>
            <div className="section bg-secondary flex flex-col items-center justify-center h-full px-4">
              <h2 className="text-4xl text-cream mb-8 ">Not Sure What To Order?</h2>
              <p className="text-cream mb-6">Get Surprised With A Random Drink From Our Curated Menu!</p>
              <Link
                to="/surprise_suggestion"
                className="inline-block bg-primary text-cream font-bold py-3 px-6 rounded-full hover:bg-cream hover:text-primary transition-colors duration-300"
              >
                Surprise Me!
              </Link>
            </div>
            <div className="section bg-cream">
              <div className="max-w-3xl mx-auto text-primary">
                <h2 className="text-4xl  mb-6 ">Our Story</h2>
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