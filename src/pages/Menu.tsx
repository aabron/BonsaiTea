import React from 'react';

const Menu: React.FC = () => {
  const menuImages = [
    '/images/menu1.jpg',
    '/images/menu2.jpg',
    // Add more menu image paths as needed
  ];

  return (
    <section id="menu" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuImages.map((image, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`Menu page ${index + 1}`} 
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg mt-8 text-center">
          <strong className="block mb-2">Allergy Notice:</strong>
          <p className="italic text-gray-700">
            Some of our teas contain caffeine, nuts, and other potential allergens. 
            Please let us know if you have any allergies or concerns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;