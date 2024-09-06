import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
      <img
          src="/images/IMG_3806.jpg"
          alt="Bonsai Tea Team"
          className="w-full h-auto rounded-lg mb-8 shadow-lg mt-24"
        />
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Contact Us</h1>
        
        <div className=" p-6 rounded-lg">

          <address className="not-italic mb-6 grid grid-cols-2">
            <div className='flex flex-col justify-center'>
              <h2 className="text-2xl font-semibold text-primary mb-4 mr-4">Visit us at our Winter Park location:</h2>
              <p className="mb-2">519 S Park Ave</p>
              <p className="mb-2">Winter Park, FL 32789</p>
              <p className="mb-2">
                <span className="font-semibold">Phone:</span> (407) 555-0123
              </p>
              <p>
                <span className="font-semibold">Email:</span> <a href="mailto:info@bonsaitea.com" className="text-primary hover:underline">info@bonsaitea.com</a>
              </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1986310911143!2d-81.35346818736318!3d28.59381737558449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7712af2be970d%3A0xcdfb5998fe733e74!2sBonsai%20Tea!5e0!3m2!1sen!2sus!4v1725481140466!5m2!1sen!2sus" width="500" height="350" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </address>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Hours of Operation</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 9:00 PM</li>
              <li><span className="font-semibold">Saturday:</span> 9:00 AM - 10:00 PM</li>
              <li><span className="font-semibold">Sunday:</span> 10:00 AM - 8:00 PM</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
            <p className="mb-4">
              Have questions or feedback? We'd love to hear from you! Feel free to reach out via phone, email, or visit us in person.
            </p>
            <p>
              For the latest updates and behind-the-scenes content, follow us on social media:
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaFacebook className='mr-2' />Facebook</a>
              <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaInstagram className='mr-2' />Instagram</a>
              <a href="#" className="hover:text-gray-300 flex flex-row items-center"><FaTwitter className='mr-2' />Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;