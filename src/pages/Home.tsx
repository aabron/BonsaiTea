import React from 'react';

const Home: React.FC = () => {
    return (
        <section id="home">
            {/* Hero Section */}
            <div className=" text-center py-16 font-montserrat animated-background">
                <h1 className="md:text-6xl text-4xl text-gray-700 mb-4">Welcome to <span className='italic'>Bonsai Tea</span></h1>
                <p className="md:text-2xl text-gray-700">Discover the art of tea in Winter Park, Florida</p>
            </div>

            {/* About Preview */}
            <div className=" md:max-w-7xl mx-auto px-4 py-3 border-primary border-t text-cent">
                <h2 className="text-2xl font-bold text-gray-700 mb-4 max-w-4xl mx-auto">Our Story</h2>
                <p className="text-gray-700 max-w-4xl mx-auto">
                    Bonsai Tea brings the tranquility and precision of bonsai art to your cup.
                    Founded in 2022, we craft unique tea creations that delight the senses.
                </p>
            </div>

            {/* Featured Drinks */}
            <div className="px-4 py-12 border-primary max-w-4xl mx-auto border-b border-t pb-12">
                <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Featured Drinks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {['img1', 'img2', 'img3'].map((drink, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={`/images/${drink.toLowerCase().replace(' ', '-')}.jpg`}
                                alt={drink}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-primary mb-2">
                                {index === 0 && "Bonsai Black"}
                                {index === 1 && "Yucha Green"}
                                {index === 2 && "Passion Burst"}
                            </h3>
                            <p className="text-gray-600">
                                {index === 0 && "Passion Fruit, Pineapple, Strawberry, Lemon, Jasmine"}
                                {index === 1 && "Yuzu, Green Tea, Lemon, Honey"}
                                {index === 2 && "Passion Fruit, Lemon, Jasmine"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Menu Preview */}
            <div className="md:max-w-7xl text-center mt-12 mx-auto border-primary pb-12 border-b">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Explore Our Menu</h2>
                <p className="mb-4">Check out our vast menu of drinks!</p>
                <a
                    href="/menu"
                    className="inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                    View Full Menu
                </a>
            </div>

            {/* Quiz Preview */}
            <div className="bg-gray-100 text-center mt-12 py-12 px-4">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Not Sure What to Try?</h2>
                <p className="mb-6">Take our quick quiz and get a personalized drink suggestion!</p>
                <a
                    href="/quiz"
                    className="animate-bounce inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                    Take the Quiz
                </a>
            </div>
        </section>
    );
};

export default Home;