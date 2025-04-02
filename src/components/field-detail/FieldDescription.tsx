import React from 'react';

export default function FieldDescription() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">About this field</h2>
      <div className="prose text-gray-600">
        <p>
          Welcome to our state-of-the-art sports complex featuring multiple zones for different sports:
        </p>
        <ul className="mt-4 space-y-2">
          <li>Main soccer field with professional turf (Zone A)</li>
          <li>2 basketball courts with premium flooring (Zone B)</li>
          <li>3 tennis courts with night lighting (Zone C)</li>
        </ul>
        <p className="mt-4">
          Our facility is perfect for both casual games and professional training sessions. 
          The field is maintained daily and equipped with professional-grade equipment.
        </p>
        <p className="mt-4">
          We offer flexible booking options and can accommodate multiple sports simultaneously 
          in different zones. Each zone is carefully designed to ensure optimal playing conditions 
          and player safety.
        </p>
      </div>
    </div>
  );
}