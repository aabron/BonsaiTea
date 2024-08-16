import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Contact Us</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">Visit us at our Winter Park location:</h2>
          
          <address className="not-italic mb-6">
            <p className="mb-2">519 S Park Ave</p>
            <p className="mb-2">Winter Park, FL 32789</p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> (407) 555-0123
            </p>
            <p>
              <span className="font-semibold">Email:</span> <a href="mailto:info@bonsaitea.com" className="text-primary hover:underline">info@bonsaitea.com</a>
            </p>
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
              <a href="#" className="text-primary hover:underline">Facebook</a>
              <a href="#" className="text-primary hover:underline">Instagram</a>
              <a href="#" className="text-primary hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;