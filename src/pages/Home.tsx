import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player';

const pluginWrapper = () => {
  require('../statics/fullpage.offsetSections.min');
};

const licenseKey = "RMO27-QG3YH-MKI6I-J7366-JLTXN";
const offsetSections = "ECE341DE-8A78483C-87D14684-B4C9CC70";

interface DrinkInfo {
  name: string;
  image: string;
  description: string;
  tea: string;
  sugar: string;
  flavor: string;
  price: string;
}

const featuredDrinks: DrinkInfo[] = [
  {
    name: "BONSAI TEA",
    image: "/images/bonsaiImages/BonsaiTea.png",
    description: "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine",
    tea: "Jasmine",
    sugar: "Medium",
    flavor: "Fruity, Floral",
    price: "$8.75"
  },
  {
    name: "PASSION BURST",
    image: "/images/bonsaiImages/PassionBurst.png",
    description: "Passion Fruit, Lemon, Jasmine",
    tea: "Jasmine",
    sugar: "Medium",
    flavor: "Fruity, Tangy",
    price: "$8.50"
  },
  {
    name: "MANGO CHILI LOCO",
    image: "/images/bonsaiImages/MangoChiliLoco.png",
    description: "Mango, Lemon, Kumquat, Chili, Salt, Jasmine",
    tea: "Jasmine",
    sugar: "Low",
    flavor: "Spicy, Fruity",
    price: "$8.75"
  },
  {
    name: "PINK MATCHA",
    image: "/images/bonsaiImages/PinkMatcha.png",
    description: "Ceremonial Matcha, Strawberry, Milk",
    tea: "Matcha",
    sugar: "Medium",
    flavor: "Fruity, Creamy",
    price: "$8.75"
  },
  {
    name: "SHAY'S TARO",
    image: "/images/bonsaiImages/TaroMilkTea.png",
    description: "Taro, Avocado, Milk, Earl Grey",
    tea: "Earl Grey",
    sugar: "Medium",
    flavor: "Nutty, Creamy",
    price: "$8.75"
  },
  {
    name: "CHERRY BLOSSOM",
    image: "/images/bonsaiImages/CherryBlossom.png",
    description: "Strawberry, Avocado, Milk, Earl Grey",
    tea: "Earl Grey",
    sugar: "Medium",
    flavor: "Fruity, Creamy",
    price: "$8.75"
  },
  {
    name: "PEACH LOVE & HAPPINESS",
    image: "/images/bonsaiImages/PeachLove&Happiness.png",
    description: "Strawberry, Peach, Rose, Jasmine",
    tea: "Jasmine",
    sugar: "Medium",
    flavor: "Fruity, Floral",
    price: "$8.75"
  },
  {
    name: "MANGO TANGO",
    image: "/images/bonsaiImages/MangoTango.png",
    description: "Mango, Lemon, Kumquat, Chili, Salt, Jasmine",
    tea: "Jasmine",
    sugar: "Low",
    flavor: "Spicy, Fruity",
    price: "$8.75"
  },
  {
    name: "LYCHEE DELIGHT",
    image: "/images/bonsaiImages/LycheeDelight.png",
    description: "Lychee, Lemon, Jasmine",
    tea: "Jasmine",
    sugar: "Medium",
    flavor: "Fruity, Floral",
    price: "$8.50"
  },
];

const teaBlends: DrinkInfo[] = [
  {
    name: "CHINA ROSE PETAL",
    image: "/images/bonsaiImages/ChinaRosePetal.png",
    description: "Black Tea, Rose Petal, Rose Water",
    tea: "Black Tea",
    sugar: "Low",
    flavor: "Floral, Refreshing",
    price: "$8.75"
  },
  {
    name: "BLOOD ORANGE",
    image: "/images/bonsaiImages/BloodOrange.png",
    description: "Rooibos, Saffron, Rose, Orange Peel, Hibiscus",
    tea: "Rooibos",
    sugar: "Low",
    flavor: "Citrusy, Floral",
    price: "$8.75"
  },
  {
    name: "Butterfly Pea Flower",
    image: "/images/bonsaiImages/ButterflyPeaFlower.png",
    description: "Rooibos, Kardadé, Hibiscus, Red Apple, Blackberry",
    tea: "Rooibos",
    sugar: "Low",
    flavor: "Fruity, Floral",
    price: "$8.75"
  },
  {
    name: "China Rose Petal",
    image: "/images/bonsaiImages/ChinaRosePetal.png",
    description: "Rhubarb, Raspberry, Hibiscus, Apple",
    tea: "Rooibos",
    sugar: "Low",
    flavor: "Fruity, Tangy",
    price: "$8.75"
  },
  {
    name: "Prosecco",
    image: "/images/bonsaiImages/Prosecco.png",
    description: "Apple, Pear, Nectarine, Prosecco, Osmanthus, Coconut, Rose",
    tea: "Rooibos",
    sugar: "Low",
    flavor: "Fruity, Floral",
    price: "$8.75"
  },
];

const headerImages = [
  "/images/bonsaiImages/AmarettoMilkTea.png",
  "/images/bonsaiImages/MangoMilkTea.png",
  "/images/bonsaiImages/PassionBurst.png",
  "/images/bonsaiImages/PeachLove&Happiness.png",
  "/images/bonsaiImages/PinkMatcha.png",
]

const aboutSections = [
  {
    title: "Our Story",
    image: "/images/bonsaiImages/TeamPicture.png",
    description: "",
  },
  {
    title: "A Picture of Our Bonsai Troops",
    image: "/images/bonsaiImages/TeamPicture.png",
    description: "",
  },
]

const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentAboutPage, setCurrentAboutPage] = useState(0);
  const questionsPerPage = isMobile ? 2 : 3;
  const totalPages = Math.ceil(featuredDrinks.length / questionsPerPage);
  const validCurrentPage = Math.min(Math.max(currentPage, 0), totalPages - 1);
  const startIndex = validCurrentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const [currentTeaPage, setCurrentTeaPage] = useState(0);
  const questionsPerTeaPage = isMobile ? 2 : 3;
  const totalTeaPages = Math.ceil(teaBlends.length / questionsPerTeaPage);
  const validCurrentTeaPage = Math.min(Math.max(currentTeaPage, 0), totalTeaPages - 1);
  const teaStartIndex = validCurrentTeaPage * questionsPerTeaPage;
  const teaEndIndex = teaStartIndex + questionsPerTeaPage;
  const currentDrinks = featuredDrinks.slice(startIndex, endIndex);
  const currentTeaDrinks = teaBlends.slice(teaStartIndex, teaEndIndex);
  const questionsPerAboutPage = 1;
  const totalAboutPages = Math.ceil(aboutSections.length / questionsPerAboutPage);
  const validCurrentAboutPage = Math.min(Math.max(currentAboutPage, 0), totalAboutPages - 1);
  const aboutStartIndex = validCurrentAboutPage * questionsPerAboutPage;
  const aboutEndIndex = aboutStartIndex + questionsPerAboutPage;
  const currentAboutSections = aboutSections.slice(aboutStartIndex, aboutEndIndex);
  const [hoveredDrink, setHoveredDrink] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState('');
  const [animationClassTea, setAnimationClassTea] = useState('');
  const [animationClassAbout, setAnimationClassAbout] = useState('');

  console.log(currentPage)

  React.useEffect(() => {
    setAnimationClass('');
  }, [currentPage]);

  const handleNextPage = () => {
    setAnimationClass('fade-out');
    setTimeout(() => {
      if (currentPage === (featuredDrinks.length / questionsPerPage) - 1) {
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
      if (currentPage === 0) {
        setCurrentPage((featuredDrinks.length / questionsPerPage) - 1);
      } else {
        setCurrentPage((prevPage) => prevPage - 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };

  const handleNextTeaPage = () => {
    setAnimationClassTea('fade-out-tea');
    setTimeout(() => {
      if (currentTeaPage === (teaBlends.length / questionsPerTeaPage) - 1) {
        setCurrentTeaPage(0);
      } else {
        setCurrentTeaPage((prevPage) => prevPage + 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };
  console.log(animationClass)

  const handlePrevTeaPage = () => {
    setAnimationClassTea('fade-out-tea');
    setTimeout(() => {
      if (currentTeaPage === 0) {
        setCurrentTeaPage((teaBlends.length / questionsPerTeaPage) - 1);
      } else {
        setCurrentTeaPage((prevPage) => prevPage - 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };

  const handleNextAboutPage = () => {
    setAnimationClassAbout('fade-out-about');
    setTimeout(() => {
      if (currentAboutPage === (aboutSections.length / questionsPerAboutPage) - 1) {
        setCurrentAboutPage(0);
      } else {
        setCurrentAboutPage((prevPage) => prevPage + 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };
  console.log(animationClass)

  const handlePrevAboutPage = () => {
    setAnimationClassAbout('fade-out-about');
    setTimeout(() => {
      if (currentAboutPage === 0) {
        setCurrentAboutPage((aboutSections.length / questionsPerAboutPage) - 1);
      } else {
        setCurrentAboutPage((prevPage) => prevPage - 1);
      }
      // setAnimationClass('fade-in');
    }, 400);
  };
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === headerImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [headerImages]);

  const prevSlide = React.useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? headerImages.length - 1 : prevIndex - 1
    );
  }, [headerImages]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className='animated-background'>
      <ReactFullpage
        licenseKey={licenseKey}
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        credits={{ enabled: false }}
        afterLoad={(origin, destination) => {
          setCurrentSection(destination.index);
        }}
        offsetSections={true}
        offsetSectionsKey={offsetSections}
        pluginWrapper={pluginWrapper}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section bg-cream -z-20" data-percentage={isMobile ? "100" : "100"}>
              <div className='w-full mx-auto flex justify-center items-center'>
                {!isMobile ? <div className='absolute'><ReactPlayer url='bonsaiVideo.mp4' playing={true} controls={false} muted={true} loop={true} width='100%' height='100%'/></div> : headerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-[92%] mt-28 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-500`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="md:w-full md:h-full w-full h-full"
                    />
                  </div>
                ))}
                <div className="bg-black bg-opacity-70 p-8 rounded-lg z-20 mx-12 md:mt-0 mt-8">
                  <h1 className="md:text-5xl text-2xl text-cream mb-4">Welcome to Bonsai Tea</h1>
                  <p className="md:text-2xl text-lg text-cream">Discover the art of tea in Winter Park, Florida</p>
                </div>
              </div>
            </div>
            <div className="section bg-cream md:p-20">
              <h2 className="md:text-5xl text-2xl text-primary mb-2 font-bold flex flex-col items-center justify-center px-4 md:mt-0 mt-16">Featured Drinks</h2>
              <div className={`flex justify-center items-center`}>
                <button className="ml-12 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handlePrevPage}> {" < "} </button>
                <div className={`grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-2 max-w-8xl mx-auto ${animationClass}`}>

                  {currentDrinks.map((drink) => (
                    <div
                      key={drink.name}
                      className="text-center relative"
                      onMouseEnter={() => setHoveredDrink(drink.name)}
                      onMouseLeave={() => setHoveredDrink(null)}
                    >
                      <div className="bg-cream p-2 rounded-lg shadow-lg relative w-[180px] md:w-full md:h-[440px] h-[210px] border-2 border-black flex flex-col justify-center items-center">
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
                          className="w-[60%] h-[7rem] object-cover rounded-lg md:mb-4 mb-1 md:w-full md:h-80"
                        />
                        <h3 className="md:text-xl text-sm font-bold text-primary md:mb-2 mb-2">{drink.name}</h3>
                        <p className="md:text-sm text-xs text-primary">{drink.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mr-12 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handleNextPage}> {" > "} </button>
              </div>
              {!isMobile && <div className="flex justify-center items-center mt-4">
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentPage === 0 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentPage === 1 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentPage === 2 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
              </div>}
              <div className='flex justify-between items-center md:mt-12 mt-6 md:px-32 px-4'>
                <Link
                  to="/menu"
                  className="inline-block bg-primary text-cream font-bold md:py-3 py-2 md:px-6 px-3 rounded-full hover:bg-secondary transition-colors duration-300 text-center text-lg"
                >
                  View Full Menu
                </Link>
                <Link
                  to="https://www.grubhub.com/restaurant/bonsai-tea-519-s-park-ave-winter-park/7367424"
                  className="bg-primary text-cream font-bold md:py-3 py-2 md:px-6 px-3 rounded-full hover:bg-secondary transition-colors duration-300 text-lg"
                >
                  Order Now
                </Link>
              </div>
            </div>
            <div className="section bg-cream md:p-28 md:py-0">
            <h2 className="md:text-5xl text-2xl font-bold text-primary mb-2 text-center md:mt-0 mt-16">Tea Blends</h2>
              <div className="flex justify-center items-center md:mt-12 mt-1">
              
                <button className="ml-12 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handlePrevTeaPage}> {" < "} </button>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 max-w-8xl mx-auto ${animationClassTea}`}>
                  {currentTeaDrinks.map((drink) => (
                    <div
                      key={drink.name}
                      className="text-center relative"
                      onMouseEnter={() => setHoveredDrink(drink.name)}
                      onMouseLeave={() => setHoveredDrink(null)}
                    >
                      <div className="bg-cream p-2 rounded-lg shadow-lg relative w-[180px] md:w-full md:h-[75%] h-[200px] border-2 border-black flex flex-col justify-center items-center">
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
                          className="w-[70%] h-24 object-cover rounded-lg md:mb-4 mb-1 md:w-full md:h-[70%]"
                        />
                        <h3 className="md:text-xl text-sm font-bold text-primary md:mb-2 mb-2">{drink.name}</h3>
                        <p className="md:text-sm text-sm text-primary">{drink.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mr-12 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handleNextTeaPage}> {" > "} </button>
              </div>
              {!isMobile && <div className="flex justify-center items-center mt-4">
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentTeaPage === 0 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentTeaPage === 1 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`w-3 h-3 rounded-full mx-2 bg-black ${currentTeaPage === 2 ? 'w-4 h-4 transition-all duration-300 ease-in-out' : ''}`}></div>
              </div>}
              <div className='flex justify-between items-center md:mt-1 mt-6 md:px-32 px-4'>
                <Link
                  to="/menu"
                  className="inline-block bg-primary text-cream font-bold md:py-3 py-2 md:px-6 px-3 rounded-full hover:bg-secondary transition-colors duration-300 text-center text-lg"
                >
                  View Full Menu
                </Link>
                <Link
                  to="https://www.grubhub.com/restaurant/bonsai-tea-519-s-park-ave-winter-park/7367424"
                  className="bg-primary text-cream font-bold md:py-3 py-2 md:px-6 px-3 rounded-full hover:bg-secondary transition-colors duration-300 text-lg"
                >
                  Order Now
                </Link>
              </div>
            </div>
            <div className="section md:px-12 px-1 overflow-hidden ">
              {/* <h1 className="text-3xl font-bold text-cream mb-2 text-center">About Bonsai Tea</h1> */}
              <div className="max-w-8xl mx-auto md:px-12 px-1 flex items-center justify-center -mb-1 overflow-hidden">
              { isMobile && <button className="md:mr-10 mr-2 md:mt-0 mt-56 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handlePrevAboutPage}> {" < "} </button>}
                {currentAboutSections.map((section) => (
                  section.title === "Our Story" ? (
                    <div key={section.title} className={`overflow-hidden md:space-y-5 space-y-1 md:mt-0 mt-16 text-cream md:text-[15px] text-[8px] font-bold md:font-normal flex flex-col justify-center items-center ${animationClassAbout}`}>
                      <h1 className="md:text-3xl text-lg font-bold text-cream mb-2 text-center">About Bonsai Tea</h1>
                      {!isMobile && <img src={section.image} alt={section.title} className="rounded-lg w-[60%] h-[68%] absolute -z-10 opacity-60 overflow-hidden" />}
                      <p>
                        In 2022, Bonsai Tea began as a small dream shared by a group of friends who wanted to bring the artistry and tranquility of bonsai to the world of tea. Like the careful pruning and nurturing of a bonsai tree, we started small, tending to every detail with patience and love.
                      </p>
                      <p>
                        Our journey hasn't always been smooth. In the early days, we faced challenges that tested our resolve. There were late nights perfecting recipes, early mornings setting up shop, and countless cups of tea shared as we brainstormed and problem-solved together. But with each obstacle, our roots grew deeper, and our branches reached higher.
                        As word spread about our unique blends and welcoming atmosphere, our little tea shop began to flourish. Customers became friends, and friends became family. We've watched as first-time visitors became regulars, bringing their friends and family to share in the experience. Each familiar face that walks through our door reminds us of why we started this journey.
                      </p>
                      <p>
                        Our team, which we affectionately call the "Bonsai Tea Troops," has grown from a handful of dreamers to a diverse group of passionate individuals. Each member brings their unique flavor to our blend, much like the carefully selected ingredients in our teas. We've celebrated birthdays, comforted each other through losses, and cheered each other on through personal and professional milestones.
                        As we've grown, we've remained true to our roots. We still source our ingredients with the same care, craft each drink with the same attention to detail, and greet each customer with the same warmth as we did on day one. Our commitment to quality and community has never wavered.
                      </p>
                      <p>
                        Looking back, we're filled with gratitude for every person who has been part of our story - from our dedicated staff to our loyal customers. Each of you has helped shape Bonsai Tea into what it is today: not just a tea shop, but a home away from home for many.
                      </p>
                      <p>
                        As we look to the future, we're excited to continue growing, learning, and serving our community. Like a well-tended bonsai, we believe that with care, patience, and love, beautiful things can flourish in even the smallest spaces.
                      </p>
                      <p>
                        Thank you for being part of our journey. We invite you to come, sip, and grow with us.
                      </p>
                    </div>
                  ) : (
                    <div className={`md:w-[50%] w-[70%] object-cover  mb-2 ${animationClassAbout}`}>
                      <h1 className="text-3xl font-bold text-cream mb-2 text-center">{section.title}</h1>
                      <img src={section.image} alt={section.title} className="rounded-lg " />
                    </div>
                  )
                ))}
                { isMobile && <button className="md:ml-10 ml-2 md:mt-0 mt-56 text-2xl px-2 py-5 border-2 bg-primary text-white rounded-xl hover:scale-105 duration-300 ease-in-out transition-all" onClick={handleNextAboutPage}> {" > "} </button>}
              </div>

              {isMobile && <div className="flex justify-center items-center mt-4">
                <div className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-2 bg-black ${currentAboutPage === 0 ? 'md:w-4 md:h-4 w-3 h-3 transition-all duration-300 ease-in-out' : ''}`}></div>
                <div className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-2 bg-black ${currentAboutPage === 1 ? 'md:w-4 md:h-4 w-3 h-3 transition-all duration-300 ease-in-out' : ''}`}></div>
              </div>}
            </div>
            <div className="section  ">
              <div className="max-w-4xl mx-auto mt-12">
                

                <div className=" p-2 rounded-lg">


                  <address className="not-italic mb-1 grid grid-cols-2 gap-x-2 md:gap-x-0">
                    <div className='flex flex-col justify-center'>
                    <h1 className="md:text-3xl text-lg font-bold text-cream text-left pb-2">Contact Us</h1>
                      <h2 className="md:text-2xl text-sm font-semibold text-cream md:mb-4 mr-4">Visit us at our Winter Park location:</h2>
                      <p className="md:mb-2 md:text-lg text-sm">519 S Park Ave</p>
                      <p className="md:mb-2 md:text-lg text-sm">Winter Park, FL 32789</p>
                      <p className="md:mb-2 md:text-lg text-sm">
                        <span className="font-semibold md:text-lg text-sm">Phone:</span> (407) 555-0123
                      </p>
                      <p>
                        <span className="font-semibold md:text-lg text-sm">Email:</span> <a href="mailto:info@bonsaitea.com" className="text-primary hover:underline">info@bonsaitea.com</a>
                      </p>
                    </div>
                    {isMobile ? (
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1986310911143!2d-81.35346818736318!3d28.59381737558449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7712af2be970d%3A0xcdfb5998fe733e74!2sBonsai%20Tea!5e0!3m2!1sen!2sus!4v1725481140466!5m2!1sen!2sus" width="190" height="170" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    ) : (
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1986310911143!2d-81.35346818736318!3d28.59381737558449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7712af2be970d%3A0xcdfb5998fe733e74!2sBonsai%20Tea!5e0!3m2!1sen!2sus!4v1725481140466!5m2!1sen!2sus" width="400" height="350" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    )}
                    

                  </address>
                  <div className="mt-1">
                    <h3 className="md:text-xl text-sm font-semibold text-cream mb-4">Hours of Operation</h3>
                    <ul className="md:space-y-2 space-y-0">
                      <li className="md:text-lg text-xs"><span className="font-semibold md:text-lg text-xs">Monday - Friday:</span> 8:00 AM - 9:00 PM</li>
                      <li className="md:text-lg text-xs"><span className="font-semibold md:text-lg text-xs">Saturday:</span> 9:00 AM - 10:00 PM</li>
                      <li className="md:text-lg text-xs"><span className="font-semibold md:text-lg text-xs">Sunday:</span> 10:00 AM - 8:00 PM</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h3 className="md:text-xl text-lg font-semibold text-cream mb-4">Get in Touch</h3>
                    <p className="mb-2 md:text-lg text-xs">
                      Have questions or feedback? We'd love to hear from you! Feel free to reach out via phone, email, or visit us in person.
                    </p>
                    <p>
                      For the latest updates and behind-the-scenes content, follow us on social media:
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a href="https://www.instagram.com/bonsaiteawinterpark/" className="hover:text-cream flex flex-row items-center"><FaInstagram className='mr-2' />Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Home;