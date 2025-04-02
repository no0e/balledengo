import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterLegal() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Legal</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/cookies" className="hover:text-white transition-colors">
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}