import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light text-gray-800 mb-8">Our Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-sm aspect-w-1 aspect-h-1">
            <img src={image} alt={`Nail design ${index + 1}`} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;