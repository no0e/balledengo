import { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('annonces');

  // Données fictives pour l'exemple
  const userData = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '06 12 34 56 78',
    listings: [
      {
        id: 1,
        title: 'Terrain de football',
        location: 'Paris, 75015',
        price: '25€/heure',
        image: 'https://via.placeholder.com/400x300',
      },
      {
        id: 2,
        title: 'Court de tennis',
        location: 'Paris, 75016',
        price: '30€/heure',
        image: 'https://via.placeholder.com/400x300',
      },
    ],
    reservations: [
      {
        id: 1,
        title: 'Terrain de basketball',
        date: '15/04/2023',
        time: '14:00 - 16:00',
        status: 'Confirmée',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête du profil */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-3xl text-gray-500">JD</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-gray-600">{userData.phone}</p>
            </div>
          </div>
        </div>

        {/* Onglets */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'annonces'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('annonces')}
              >
                Mes annonces
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'reservations'
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reservations')}
              >
                Mes réservations
              </button>
            </nav>
          </div>
        </div>

        {/* Contenu des onglets */}
        {activeTab === 'annonces' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.listings.map((listing) => (
              <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                  <p className="text-gray-600 mb-2">{listing.location}</p>
                  <p className="text-green-600 font-semibold">{listing.price}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                      Modifier
                    </button>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reservations' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Terrain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Horaire
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userData.reservations.map((reservation) => (
                  <tr key={reservation.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {reservation.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{reservation.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{reservation.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {reservation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 