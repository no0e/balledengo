import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300 transition">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300 transition">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300 transition">
                  Notre équipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="hover:text-gray-300 transition">
                  Informations légales
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-gray-300 transition">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-gray-300 transition">
                  Protection des données
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="hover:text-gray-300 transition">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-gray-300 transition">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-gray-300 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Réseaux sociaux</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/social" className="hover:text-gray-300 transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/social" className="hover:text-gray-300 transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/social" className="hover:text-gray-300 transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="/social" className="hover:text-gray-300 transition">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 SportSpot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;