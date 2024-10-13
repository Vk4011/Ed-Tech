import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-white text-lg font-semibold">About JBTech</h2>
          <p className="text-sm">
            JBTech is your gateway to mastering coding challenges and technical skills. Join us to excel in Web, App development, and beyond.
          </p>
        </div>

        {/* Section 2: Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-white text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { name: 'Home', to: '/' },
              { name: 'Courses', to: '/courses' },
              { name: 'Explore', to: '/explore' },
              { name: 'Contact', to: '/contact' },
              { name: 'About', to: '/about' }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.to} className="hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-white text-lg font-semibold">Contact Us</h2>
          <p className="text-sm">Email: support@jbtech.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              Facebook
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              Twitter
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} JBTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
