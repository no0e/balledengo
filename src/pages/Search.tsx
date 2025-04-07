import { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const sports = ['Football', 'Basketball', 'Tennis', 'Padel', 'Rugby'];
  const locations = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filtres de recherche */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recherche
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un terrain..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sport
              </label>
              <select
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option value="">Tous les sports</option>
                {sports.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localisation
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              >
                <option value="">Toutes les villes</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de résultat */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Terrain de football"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Terrain de football</h3>
              <p className="text-gray-600 mb-2">Paris, 75015</p>
              <p className="text-green-600 font-semibold mb-4">25€/heure</p>
              <Link
                to="/listing/1"
                className="block w-full text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Voir les détails
              </Link>
            </div>
          </div>
          {/* Ajoutez d'autres résultats ici */}
        </div>
      </div>
    </div>
  );
};

export default Search; 