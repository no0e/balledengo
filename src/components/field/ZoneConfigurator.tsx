import React from 'react';
import { Zone } from '../../types/field';
import { Plus } from 'lucide-react';

interface ZoneConfiguratorProps {
  zones: Zone[];
  onZoneChange: (zones: Zone[]) => void;
}

export default function ZoneConfigurator({ zones, onZoneChange }: ZoneConfiguratorProps) {
  const addZone = () => {
    const newZone: Zone = {
      id: `zone-${zones.length + 1}`,
      name: `Zone ${zones.length + 1}`,
      conflicts: []
    };
    onZoneChange([...zones, newZone]);
  };

  const updateZoneConflicts = (zoneId: string, conflictId: string, isConflicting: boolean) => {
    const updatedZones = zones.map(zone => {
      if (zone.id === zoneId) {
        return {
          ...zone,
          conflicts: isConflicting 
            ? [...zone.conflicts, conflictId]
            : zone.conflicts.filter(id => id !== conflictId)
        };
      }
      return zone;
    });
    onZoneChange(updatedZones);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Field Zones</h3>
        <button
          type="button"
          onClick={addZone}
          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Zone
        </button>
      </div>

      <div className="grid gap-4">
        {zones.map(zone => (
          <div key={zone.id} className="border rounded-lg p-4">
            <input
              type="text"
              value={zone.name}
              onChange={(e) => {
                const updatedZones = zones.map(z =>
                  z.id === zone.id ? { ...z, name: e.target.value } : z
                );
                onZoneChange(updatedZones);
              }}
              className="w-full px-3 py-2 border rounded-md mb-3"
              placeholder="Zone name"
            />
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Conflicts with:</p>
              {zones
                .filter(z => z.id !== zone.id)
                .map(otherZone => (
                  <label key={otherZone.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={zone.conflicts.includes(otherZone.id)}
                      onChange={(e) => updateZoneConflicts(zone.id, otherZone.id, e.target.checked)}
                      className="rounded text-green-600"
                    />
                    <span>{otherZone.name}</span>
                  </label>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}