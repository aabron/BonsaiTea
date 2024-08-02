import React from 'react';
import { IoHome, IoInformationCircleOutline, IoMenuOutline, IoFastFood } from 'react-icons/io5';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header className="bg-white border-b-2 border-primary p-4 flex justify-between items-center">
            <img src="/images/logo.webp" alt="Bonsai Tea Logo" className="w-24 h-auto" />
            <nav>
                <ul className="flex space-x-12 text-lg md:text-xl">
                    <li className='hover:scale-110 duration-300 ease-in-out'><a href="/" className="text-primary font-bold flex flex-row items-center"><IoHome className='mr-2' />Home</a></li>
                    <li className='hover:scale-110 duration-300 ease-in-out'><a href="/about" className="text-primary font-bold flex flex-row items-center"><IoInformationCircleOutline className='mr-2' />About Us</a></li>
                    <li className='hover:scale-110 duration-300 ease-in-out'><a href="/menu" className="text-primary font-bold flex flex-row items-center"><IoMenuOutline className='mr-2' />Menu</a></li>
                    <li className='hover:scale-110 duration-300 ease-in-out'><a href="/contact" className="text-primary font-bold flex flex-row items-center"><FaPhoneAlt className='mr-2' />Contact</a></li>
                    <li className='hover:scale-110 duration-300 ease-in-out'><a href="/quiz" className="text-primary font-bold flex flex-row items-center"><IoFastFood className='mr-2' />Drink Quiz</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;