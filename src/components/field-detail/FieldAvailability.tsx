import React from 'react';
import { Calendar } from 'lucide-react';

export default function FieldAvailability() {
  const timeSlots = Array.from({ length: 14 }, (_, i) => i + 8); // 8AM to 10PM
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Availability</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-200 rounded-full"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-200 rounded-full"></div>
            <span className="text-sm text-gray-600">Booked</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b"></th>
              {days.map(day => (
                <th key={day} className="py-2 px-4 border-b text-gray-600">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(hour => (
              <tr key={hour}>
                <td className="py-2 px-4 border-b text-gray-600 whitespace-nowrap">
                  {hour}:00
                </td>
                {days.map(day => (
                  <td key={`${day}-${hour}`} className="py-2 px-4 border-b">
                    <div className={`w-full h-6 rounded ${
                      Math.random() > 0.3 ? 'bg-green-200' : 'bg-red-200'
                    }`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}