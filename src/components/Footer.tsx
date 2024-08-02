import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="animated-background text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">Bonsai Tea</p>
          <p>123 Park Avenue, Winter Park, FL 32789</p>
          <p>Phone: (407) 555-0123</p>
        </div>
        
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaFacebook className='mr-2' />Facebook</a>
            <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaInstagram className='mr-2' />Instagram</a>
            <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaTwitter className='mr-2' />Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p>&copy; {currentYear} Bonsai Tea. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;