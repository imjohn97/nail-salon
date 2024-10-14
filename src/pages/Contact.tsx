import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-light text-gray-800 mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-light text-gray-800 mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center text-gray-600">
              <MapPin className="mr-2 text-gray-800" />
              123 Beauty Lane, Nail City, NC 12345
            </p>
            <p className="flex items-center text-gray-600">
              <Phone className="mr-2 text-gray-800" />
              (555) 123-4567
            </p>
            <p className="flex items-center text-gray-600">
              <Mail className="mr-2 text-gray-800" />
              info@glamournails.com
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-light text-gray-800 mb-2">Business Hours</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-light text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-light mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-light mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-light mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" required></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white font-light py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;