import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}