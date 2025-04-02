import React from 'react';
import { Bath, DoorOpen, Droplet, Car, Lightbulb, Package } from 'lucide-react';

const amenities = [
  { icon: Bath, label: 'Showers', available: true },
  { icon: DoorOpen, label: 'Locker Room', available: true },
  { icon: Droplet, label: 'Water Fountain', available: true },
  { icon: Car, label: 'Parking', available: true },
  { icon: Lightbulb, label: 'Lighting', available: true },
  { icon: Package, label: 'Equipment Rental', available: false }
];

export default function FieldAmenities() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map(({ icon: Icon, label, available }) => (
          <div
            key={label}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              available ? 'text-gray-900' : 'text-gray-400'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}