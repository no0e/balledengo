import React from 'react';
import { Heart, Users, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Support Local Sports',
    description: 'Revenue generated from field rentals directly funds youth sports equipment and programs.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Help maintain and improve local sports facilities while creating opportunities for young athletes.',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  },
  {
    icon: Trophy,
    title: 'Invest in Future Champions',
    description: 'Your bookings contribute to providing better sports equipment and facilities for the next generation.',
    image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  }
];

export default function CommunityBenefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Community Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}