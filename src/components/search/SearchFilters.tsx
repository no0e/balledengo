import React from 'react';
import { Filter as FilterIcon, X } from 'lucide-react';
import SportFilter from './SportFilter';

interface SearchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSports: string[];
  onSportChange: (sports: string[]) => void;
}

export default function SearchFilters({ 
  isOpen, 
  onClose,
  selectedSports,
  onSportChange 
}: SearchFiltersProps) {
  return (
    <div 
      className={`fixed inset-0 z-50 lg:relative lg:inset-auto ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}
    >
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      />

      {/* Filters panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:shadow-none">
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <div className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5" />
            <span className="font-medium">Filters</span>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-64px)] lg:max-h-none">
          <SportFilter 
            selectedSports={selectedSports}
            onSportChange={onSportChange}
          />
          
          {/* Add more filter sections here */}
        </div>
      </div>
    </div>
  );
}