import React from 'react';

const services = [
  { name: 'Manicure', price: 25 },
  { name: 'Pedicure', price: 35 },
  { name: 'Gel Polish', price: 30 },
  { name: 'Acrylic Full Set', price: 45 },
  { name: 'Nail Art (per nail)', price: 5 },
  { name: 'Spa Package', price: 80 },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light text-gray-800 mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-light text-gray-800 mb-2">{service.name}</h2>
            <p className="text-gray-600">Starting at ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;