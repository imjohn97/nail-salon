import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-light mb-2">Glamour Nails</h3>
            <p className="text-sm">Elevating your nail care experience</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-light mb-2">Contact</h3>
            <p className="text-sm">123 Beauty Lane, Nail City, NC 12345</p>
            <p className="text-sm">Phone: (555) 123-4567</p>
            <p className="text-sm">Email: info@glamournails.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-light mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Glamour Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;