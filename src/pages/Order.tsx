import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';

const Order: React.FC = () => {
  return (
    <section id="order" className="h-screen bg-gray-100">
      {!isMobile && (
        <iframe 
          src="https://www.grubhub.com/restaurant/bonsai-tea-519-s-park-ave-winter-park/7367424"
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </section>
  );
};

export default Order;