import React from 'react';
import { MapPin, Filter } from 'lucide-react';

export default function FindField() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find a Field</h1>
      
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </h2>
            {/* Filter controls will go here */}
          </div>
        </div>
        
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-600">Search results will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}