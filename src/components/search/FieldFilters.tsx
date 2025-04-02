import React from 'react';
import { Slider } from '../../components/ui/slider';

interface FiltersProps {
  filters: {
    sports: string[];
    location: string;
    priceRange: {
      min: number;
      max: number;
    };
    rating: number;
  };
  onFilterChange: (filters: FiltersProps['filters']) => void;
}

const sports = [
  { id: 'football', name: 'Football' },
  { id: 'basketball', name: 'Basketball' },
  { id: 'tennis', name: 'Tennis' }
];

export default function FieldFilters({ filters, onFilterChange }: FiltersProps) {
  const handleSportToggle = (sportId: string) => {
    const newSports = filters.sports.includes(sportId)
      ? filters.sports.filter(id => id !== sportId)
      : [...filters.sports, sportId];
    
    onFilterChange({
      ...filters,
      sports: newSports
    });
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      location: event.target.value
    });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      priceRange: {
        min: value[0],
        max: value[1]
      }
    });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      rating: value[0]
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="space-y-6">
        {/* Sports */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sports</h3>
          <div className="space-y-2">
            {sports.map(sport => (
              <label key={sport.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.sports.includes(sport.id)}
                  onChange={() => handleSportToggle(sport.id)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-gray-700">{sport.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Localisation */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Localisation</h3>
          <input
            type="text"
            value={filters.location}
            onChange={handleLocationChange}
            placeholder="Entrez une ville ou un code postal"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Prix */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Prix par heure</h3>
          <div className="px-2">
            <Slider
              defaultValue={[filters.priceRange.min, filters.priceRange.max]}
              max={1000}
              step={10}
              onValueChange={handlePriceChange}
              className="my-6"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{filters.priceRange.min}€</span>
              <span>{filters.priceRange.max}€</span>
            </div>
          </div>
        </div>

        {/* Note minimale */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Note minimale</h3>
          <div className="px-2">
            <Slider
              defaultValue={[filters.rating]}
              max={5}
              step={0.5}
              onValueChange={handleRatingChange}
              className="my-6"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{filters.rating} étoiles minimum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 