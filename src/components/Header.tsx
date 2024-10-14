import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-light text-gray-800">
          <Scissors className="mr-2 w-6 h-6" />
          Glamour Nails
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="text-gray-600 hover:text-gray-800 transition-colors">Gallery</Link></li>
            <li><Link to="/booking" className="text-gray-600 hover:text-gray-800 transition-colors">Book Now</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;