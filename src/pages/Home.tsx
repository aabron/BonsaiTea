import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear"
  };

  const bannerImages = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
  ];

  return (
    <section id="home">
      <div className="relative h-[50vh] overflow-hidden hero-slider">
        <Slider {...sliderSettings} className="h-full">
          {bannerImages.map((image, index) => (
            <div key={index} className="h-full bg-gray-200 flex items-center justify-center">
              <div 
                className="h-full w-full bg-cover bg-center"
                style={{backgroundImage: `url(${image})`}}
              >
                {/* Debugging text */}
                <p className="text-black bg-white p-2">Image {index + 1}: {image}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Bonsai Tea</h1>
            <p className="text-xl md:text-2xl">Discover the art of tea in Winter Park, Florida</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
        <p className="text-gray-700">
          Bonsai Tea brings the tranquility and precision of bonsai art to your cup. 
          Founded in 2022, we craft unique tea creations that delight the senses.
        </p>
      </div>

      <div className="mt-12 px-4">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Bonsai Black', 'Yucha Green', 'Passion Burst'].map((drink, index) => (
            <div key={index} className="text-center">
              <img 
                src={`/images/${drink.toLowerCase().replace(' ', '-')}.jpg`} 
                alt={drink} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-primary mb-2">{drink}</h3>
              <p className="text-gray-600">
                {index === 0 && "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine"}
                {index === 1 && "Yuzu, Green Tea, Lemon, Honey"}
                {index === 2 && "Passion Fruit, Lemon, Jasmine"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Explore Our Menu</h2>
        <a 
          href="#menu" 
          className="inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          View Full Menu
        </a>
      </div>

      <div className="bg-gray-100 text-center mt-12 py-12 px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">Not Sure What to Try?</h2>
        <p className="mb-6">Take our quick quiz and get a personalized drink suggestion!</p>
        <a 
          href="#quiz" 
          className="inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Take the Quiz
        </a>
      </div>
    </section>
  );
};

export default Home;