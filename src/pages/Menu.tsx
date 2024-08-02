import React from 'react';
import { menuData, MenuSection, MenuItem } from '../utils/arrays';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Menu</h1>
        
        {menuData.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">{section.title}</h2>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{item.name}</span>
                  {item.price && <span className="font-bold">{item.price}</span>}
                </div>
                {item.description && (
                  <p className="text-gray-600 italic">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="bg-gray-200 p-4 rounded-lg mt-8">
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