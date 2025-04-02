import React from 'react';
import { SportConfig, Zone } from '../types/field';
import { Plus, X } from 'lucide-react';

interface SportConfiguratorProps {
  sports: SportConfig[];
  zones: Zone[];
  onSportChange: (sports: SportConfig[]) => void;
}

export default function SportConfigurator({ sports, zones, onSportChange }: SportConfiguratorProps) {
  const addSport = () => {
    const newSport: SportConfig = {
      id: `sport-${sports.length + 1}`,
      sport: '',
      price: 0,
      maxConcurrent: 1,
      zones: []
    };
    onSportChange([...sports, newSport]);
  };

  const updateSport = (index: number, updates: Partial<SportConfig>) => {
    const updatedSports = sports.map((sport, i) =>
      i === index ? { ...sport, ...updates } : sport
    );
    onSportChange(updatedSports);
  };

  const removeSport = (index: number) => {
    onSportChange(sports.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Sports Configuration</h3>
        <button
          type="button"
          onClick={addSport}
          className="text-green-600 hover:text-green-700 flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Sport
        </button>
      </div>

      {sports.map((sport, index) => (
        <div key={sport.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between">
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sport Type
                  </label>
                  <select
                    value={sport.sport}
                    onChange={(e) => updateSport(index, { sport: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select a sport</option>
                    <option value="soccer">Soccer</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="badminton">Badminton</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price per Hour
                  </label>
                  <input
                    type="number"
                    value={sport.price}
                    onChange={(e) => updateSport(index, { price: Number(e.target.value) })}
                    className="w-full px-3 py-2 border rounded-md"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Concurrent Games
                </label>
                <input
                  type="number"
                  value={sport.maxConcurrent}
                  onChange={(e) => updateSport(index, { maxConcurrent: Number(e.target.value) })}
                  className="w-full px-3 py-2 border rounded-md"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Zones
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {zones.map(zone => (
                    <label key={zone.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={sport.zones.includes(zone.id)}
                        onChange={(e) => {
                          const updatedZones = e.target.checked
                            ? [...sport.zones, zone.id]
                            : sport.zones.filter(id => id !== zone.id);
                          updateSport(index, { zones: updatedZones });
                        }}
                        className="rounded text-green-600"
                      />
                      <span>{zone.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {sports.length > 1 && (
              <button
                type="button"
                onClick={() => removeSport(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}