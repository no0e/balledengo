import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Données fictives pour l'exemple
  const listing = {
    id: 1,
    title: 'Terrain de football',
    description: 'Terrain de football synthétique de qualité professionnelle, idéal pour les matchs entre amis ou les entraînements. Éclairage disponible pour les matchs en soirée.',
    location: 'Paris, 75015',
    address: '123 Rue du Sport',
    price: '25€/heure',
    images: [
      'https://via.placeholder.com/800x600',
      'https://via.placeholder.com/800x600',
      'https://via.placeholder.com/800x600',
    ],
    amenities: [
      'Vestiaires',
      'Douches',
      'Parking',
      'Éclairage',
      'Bancs de touche',
    ],
    owner: {
      name: 'Jean Dupont',
      phone: '06 12 34 56 78',
      email: 'jean.dupont@example.com',
    },
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de réservation
    console.log({ selectedDate, selectedTime });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="lg:col-span-2">
            {/* Galerie d'images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-96 object-cover"
              />
              <div className="grid grid-cols-2 gap-2 p-4">
                {listing.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${listing.title} ${index + 2}`}
                    className="w-full h-32 object-cover rounded"
                  />
                ))}
              </div>
            </div>

            {/* Informations détaillées */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
              <p className="text-gray-600 mb-4">{listing.location}</p>
              <p className="text-2xl font-semibold text-green-600 mb-6">{listing.price}</p>
              
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 mb-6">{listing.description}</p>

              <h2 className="text-xl font-semibold mb-4">Équipements</h2>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {listing.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Propriétaire:</span> {listing.owner.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Téléphone:</span> {listing.owner.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {listing.owner.email}
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de réservation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Réserver ce terrain</h2>
              <form onSubmit={handleReservation} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horaire
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionnez un horaire</option>
                    <option value="09:00">09:00 - 10:00</option>
                    <option value="10:00">10:00 - 11:00</option>
                    <option value="11:00">11:00 - 12:00</option>
                    <option value="14:00">14:00 - 15:00</option>
                    <option value="15:00">15:00 - 16:00</option>
                    <option value="16:00">16:00 - 17:00</option>
                    <option value="17:00">17:00 - 18:00</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  Réserver maintenant
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails; 