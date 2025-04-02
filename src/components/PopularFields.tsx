import React from 'react';
import { Star } from 'lucide-react';

const popularFields = [
  {
    id: '1',
    name: 'Central Soccer Field',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Soccer',
    rating: 4.8,
    price: 50
  },
  {
    id: '2',
    name: 'Downtown Tennis Court',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Tennis',
    rating: 4.6,
    price: 35
  },
  {
    id: '3',
    name: 'Riverside Basketball Court',
    image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'Basketball',
    rating: 4.9,
    price: 40
  }
];

export default function PopularFields() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Fields</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {popularFields.map((field) => (
            <div key={field.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={field.image}
                  alt={field.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{field.name}</h3>
                <p className="text-gray-600">{field.type}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-700">{field.rating}</span>
                  </div>
                  <span className="text-green-600 font-semibold">${field.price}/hour</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}