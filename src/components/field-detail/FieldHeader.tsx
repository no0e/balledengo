import React from 'react';
import { MapPin, Share2, Heart } from 'lucide-react';

export default function FieldHeader() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Central Sports Complex</h1>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>123 Sports Avenue, Downtown, City</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Soccer
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Basketball
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Tennis
        </span>
      </div>
    </div>
  );
}