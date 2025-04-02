import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          List your sports facility today and help us create better opportunities for young athletes in our community.
        </p>
        <Link
          to="/list-field"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
        >
          List Your Field
        </Link>
      </div>
    </section>
  );
}