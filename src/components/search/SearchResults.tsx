import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const sampleFields = [
  {
    id: '1',
    name: 'Central Soccer Field',
    description: 'Professional soccer field with modern amenities',
    address: '123 Sports Avenue, Downtown',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sports: ['soccer'],
    price: 50,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Downtown Tennis Court',
    description: 'Premium tennis courts with lighting',
    address: '456 Tennis Lane, Westside',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sports: ['tennis'],
    price: 35,
    rating: 4.6
  },
  {
    id: '3',
    name: 'Riverside Basketball Court',
    description: 'Indoor basketball courts',
    address: '789 Court Street, Riverside',
    image: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    sports: ['basketball'],
    price: 40,
    rating: 4.9
  }
];

interface SearchResultsProps {
  selectedSports: string[];
}

export default function SearchResults({ selectedSports }: SearchResultsProps) {
  const filteredFields = selectedSports.length === 0
    ? sampleFields
    : sampleFields.filter(field => 
        field.sports.some(sport => selectedSports.includes(sport))
      );

  if (filteredFields.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">
          {selectedSports.length > 0 
            ? 'No fields found for the selected sports.'
            : 'No fields available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredFields.map(field => (
        <Link 
          key={field.id} 
          to={`/field/${field.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <img
              src={field.image}
              alt={field.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
              From ${field.price}/hour
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{field.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-gray-700">{field.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-3">{field.address}</p>
            
            <div className="flex flex-wrap gap-2">
              {field.sports.map(sport => (
                <span 
                  key={sport}
                  className="px-2 py-1 bg-green-50 text-green-700 text-sm rounded-full capitalize"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}