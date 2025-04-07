import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Annonce {
  id: number;
  titre: string;
  description: string;
  prix: number;
  lieu: string;
  image_url: string;
  sport: string;
  created_at: string;
}

const AnnoncesList = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        const { data, error } = await supabase
          .from('annonces')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setAnnonces(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnonces();
  }, []);

  if (loading) return <div className="text-center py-4">Chargement des annonces...</div>;
  if (error) return <div className="text-red-600 text-center py-4">Erreur: {error}</div>;
  if (annonces.length === 0) return <div className="text-center py-4">Aucune annonce disponible</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {annonces.map((annonce) => (
        <div key={annonce.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={annonce.image_url || 'https://via.placeholder.com/400x300'}
            alt={annonce.titre}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{annonce.titre}</h3>
            <p className="text-gray-600 mb-2">{annonce.lieu}</p>
            <p className="text-gray-700 mb-4">{annonce.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-semibold">{annonce.prix}€/heure</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {annonce.sport}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnoncesList; 