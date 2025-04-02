import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchHero() {
  return (
    <div className="relative bg-green-600">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="/images/hero-bg.jpg"
          alt="Terrain de sport"
        />
        <div className="absolute inset-0 bg-green-700 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Trouvez votre terrain idéal
        </h1>
        <p className="mt-6 text-xl text-green-100 max-w-3xl">
          Réservez un terrain de sport près de chez vous en quelques clics.
          Football, basketball, tennis et bien plus encore !
        </p>
        <div className="mt-10">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="w-full">
                <div className="p-4">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Où voulez-vous jouer ?"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}