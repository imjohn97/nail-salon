import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-light text-gray-800 mb-4">Welcome to Glamour Nails</h1>
        <p className="text-xl text-gray-600">Elevate your style with our expert nail care</p>
      </section>
      
      <section className="mb-16">
        <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Nail Salon" className="w-full h-96 object-cover rounded-lg shadow-md" />
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-2">Our Services</h2>
          <p className="text-gray-600 mb-4">Discover our range of nail care services.</p>
          <Link to="/services" className="text-gray-800 hover:text-gray-600 transition-colors">View Services →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-2">Gallery</h2>
          <p className="text-gray-600 mb-4">Explore our latest nail designs.</p>
          <Link to="/gallery" className="text-gray-800 hover:text-gray-600 transition-colors">View Gallery →</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-light text-gray-800 mb-2">Book Now</h2>
          <p className="text-gray-600 mb-4">Schedule your next appointment.</p>
          <Link to="/booking" className="text-gray-800 hover:text-gray-600 transition-colors">Book Appointment →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;