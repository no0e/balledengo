import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterSupport() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/help" className="hover:text-white transition-colors">
            Help Center
          </Link>
        </li>
      </ul>
    </div>
  );
}