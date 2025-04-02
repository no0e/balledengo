import React from 'react';

export default function HowItWorksHero() {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Sports field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transforming Sports Facilities
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Join us in creating better sports opportunities for our community
        </p>
      </div>
    </div>
  );
}