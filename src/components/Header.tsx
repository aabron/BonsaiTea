import React, { useState } from 'react';
import { IoHome, IoInformationCircleOutline, IoMenuOutline, IoFastFood } from 'react-icons/io5';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b-2 border-primary p-6 flex justify-between items-center z-50">
            <div className="relative">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-primary focus:outline-none"
                >
                    <FaBars className="h-8 w-8" />
                </button>
                {isMenuOpen && (
                    <nav className="absolute top-full left-0 bg-white p-6 rounded-lg shadow-lg mt-2 w-[16rem]">
                        <ul className="space-y-4">
                            <li><Link to="/menu" className="text-primary font-bold flex items-center text-xl hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}><IoMenuOutline className='mr-3 text-2xl' />Full Menu</Link></li>
                            <li><Link to="/contact" className="text-primary font-bold flex items-center text-xl hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}><FaPhoneAlt className='mr-3 text-2xl' />Contact</Link></li>
                            <li><Link to="/surprise_suggestion" className="text-primary font-bold flex items-center text-xl hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}><IoFastFood className='mr-3 text-2xl' />Tea Suggestion</Link></li>
                            <li><Link to="/about" className="text-primary font-bold flex items-center text-xl hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}><IoInformationCircleOutline className='mr-3 text-2xl' />About Us</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/">
                    <img src="/images/logo.webp" alt="Bonsai Tea Logo" className="h-20 w-auto" />
                </Link>
            </div>
            <Link
                to="https://www.grubhub.com/restaurant/bonsai-tea-519-s-park-ave-winter-park/7367424"
                className="bg-primary text-white font-bold md:py-3 py-2 md:px-6 px-1 rounded-full hover:bg-secondary transition-colors duration-300 text-lg"
            >
                Order Now
            </Link>
        </header>
    );
};

export default Header;