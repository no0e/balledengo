import React from 'react';
import { Check } from 'lucide-react';

interface Sport {
  id: string;
  name: string;
  icon?: string;
}

interface SportFilterProps {
  selectedSports: string[];
  onSportChange: (sports: string[]) => void;
}

const sports: Sport[] = [
  { id: 'soccer', name: 'Soccer' },
  { id: 'basketball', name: 'Basketball' },
  { id: 'tennis', name: 'Tennis' },
  { id: 'volleyball', name: 'Volleyball' },
  { id: 'badminton', name: 'Badminton' },
];

export default function SportFilter({ selectedSports, onSportChange }: SportFilterProps) {
  const toggleSport = (sportId: string) => {
    if (selectedSports.includes(sportId)) {
      onSportChange(selectedSports.filter(id => id !== sportId));
    } else {
      onSportChange([...selectedSports, sportId]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Sports</h3>
      <div className="space-y-2">
        {sports.map(sport => (
          <button
            key={sport.id}
            onClick={() => toggleSport(sport.id)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
              selectedSports.includes(sport.id)
                ? 'bg-green-50 text-green-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <span>{sport.name}</span>
            {selectedSports.includes(sport.id) && (
              <Check className="w-4 h-4 text-green-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}