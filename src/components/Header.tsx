import React from 'react';
import { User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left section */}
          <div className="flex items-center w-1/4">
            <Link to="/how-it-works" className="text-2xl font-bold text-green-600">
              Spovo
            </Link>
          </div>

          {/* Center section - Search Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/"
              className="hidden md:flex items-center px-8 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              <Search className="w-5 h-5" />
              <span className="font-medium">Find a Field</span>
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4 w-1/4 justify-end">
            <Link 
              to="/"
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Link>
            <Link 
              to="/list-field"
              className="hidden md:block px-4 py-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              List Your Field
            </Link>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 flex items-center gap-2"
            >
              <User className="w-5 h-5 text-gray-600" />
              <span className="hidden md:inline text-gray-600">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
