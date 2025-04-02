import React from 'react';
import { MapPin } from 'lucide-react';

export default function FieldMap() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647951865164!5m2!1sen!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-4">
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-gray-600 mt-1" />
          <div>
            <p className="font-medium">Central Sports Complex</p>
            <p className="text-gray-600">123 Sports Avenue</p>
            <p className="text-gray-600">Downtown, City, 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}