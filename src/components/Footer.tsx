import React from 'react';
import FooterAbout from './footer/FooterAbout';
import FooterLegal from './footer/FooterLegal';
import FooterSupport from './footer/FooterSupport';
import FooterSocial from './footer/FooterSocial';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FooterAbout />
          <FooterLegal />
          <FooterSupport />
          <FooterSocial />
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SportSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}