import { Link } from 'react-router-dom';
import SupabaseTest from '../components/SupabaseTest';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Balle dengo - Trouvez le terrain sportif parfait
          </h1>
          <p className="text-xl mb-8">
            Louez des terrains sportifs entre particuliers facilement et rapidement
          </p>
          <Link
            to="/search"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Commencer la recherche
          </Link>
        </div>
      </section>

      {/* Test de connexion Supabase */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <SupabaseTest />
        </div>
      </section>

      {/* Section Terrains en vedette */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Terrains en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exemple de terrain */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Terrain de football"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Terrain de football</h3>
                <p className="text-gray-600 mb-4">Paris, 75015</p>
                <p className="text-green-600 font-semibold">25€/heure</p>
                <Link
                  to="/listing/1"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
            {/* Ajoutez d'autres terrains ici */}
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comment ça marche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Trouvez un terrain</h3>
              <p className="text-gray-600">
                Recherchez parmi nos terrains disponibles selon vos critères
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Réservez</h3>
              <p className="text-gray-600">
                Choisissez votre créneau et effectuez votre réservation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Jouez</h3>
              <p className="text-gray-600">
                Profitez de votre séance de sport sur le terrain choisi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;