import React from 'react';
import { Search, Calendar, CreditCard, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Your Field',
    description: 'Search through our selection of sports fields and filter by location, sport type, and amenities.'
  },
  {
    icon: Calendar,
    title: 'Book Your Time',
    description: 'Choose your preferred date and time slot, and instantly reserve your field.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Pay securely online with your preferred payment method.'
  },
  {
    icon: Star,
    title: 'Play & Review',
    description: 'Enjoy your game and share your experience with the community.'
  }
];

export default function HowItWorksSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Spovo Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}