import React, { useState } from 'react';
import { Calendar, Clock, Users, Shield } from 'lucide-react';
import { calculateInsurance, formatPrice } from '../../utils/pricing';

export default function BookingPanel() {
  const [selectedSport, setSelectedSport] = useState('soccer');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);
  const [includeInsurance, setIncludeInsurance] = useState(false);

  const sports = {
    soccer: { price: 80, maxPlayers: 22 },
    basketball: { price: 40, maxPlayers: 10 },
    tennis: { price: 30, maxPlayers: 4 }
  };

  const basePrice = sports[selectedSport as keyof typeof sports].price * duration;
  const insuranceAmount = calculateInsurance(basePrice);
  const totalPrice = basePrice + (includeInsurance ? insuranceAmount : 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        {/* Existing sport selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Sport
          </label>
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            {Object.entries(sports).map(([sport, { price }]) => (
              <option key={sport} value={sport}>
                {sport.charAt(0).toUpperCase() + sport.slice(1)} - ${price}/hour
              </option>
            ))}
          </select>
        </div>

        {/* Existing date selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline-block mr-2" />
            Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border rounded-lg"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Existing time selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4 inline-block mr-2" />
            Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select time</option>
            {Array.from({ length: 14 }, (_, i) => i + 8).map((hour) => (
              <option key={hour} value={`${hour}:00`}>
                {hour}:00
              </option>
            ))}
          </select>
        </div>

        {/* Existing duration selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (hours)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-3 border rounded-lg"
          >
            {[1, 2, 3, 4].map((hours) => (
              <option key={hours} value={hours}>
                {hours} {hours === 1 ? 'hour' : 'hours'}
              </option>
            ))}
          </select>
        </div>

        {/* New Insurance Option */}
        <div className="border-t pt-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={includeInsurance}
              onChange={(e) => setIncludeInsurance(e.target.checked)}
              className="mt-1 rounded text-green-600 focus:ring-green-500"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-medium">Insurance Coverage</span>
                <span className="text-sm text-gray-600">(+${formatPrice(insuranceAmount)})</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Protect your booking against accidents and injuries during your sports activity
              </p>
            </div>
          </label>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Base price</span>
            <span className="font-medium">${formatPrice(basePrice)}</span>
          </div>
          {includeInsurance && (
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Insurance (7%)</span>
              <span className="font-medium">+${formatPrice(insuranceAmount)}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t border-gray-100">
            <span>Total</span>
            <span>${formatPrice(totalPrice)}</span>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
          Book Now
        </button>

        <div className="text-center text-sm text-gray-500">
          <Users className="w-4 h-4 inline-block mr-1" />
          Maximum {sports[selectedSport as keyof typeof sports].maxPlayers} players
        </div>
      </div>
    </div>
  );
}