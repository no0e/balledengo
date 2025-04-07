import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Listing {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image_url: string;
  sport_type: string;
  created_at: string;
}

const AnnoncesList = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Nous utiliserons la table appropriée une fois que nous connaîtrons la structure
        const { data, error } = await supabase
          .from('listings') // À remplacer par le nom de votre table
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setListings(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <div className="text-center py-4">Chargement des annonces...</div>;
  if (error) return <div className="text-red-600 text-center py-4">Erreur: {error}</div>;
  if (listings.length === 0) return <div className="text-center py-4">Aucune annonce disponible</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={listing.image_url || 'https://via.placeholder.com/400x300'}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
            <p className="text-gray-600 mb-2">{listing.location}</p>
            <p className="text-gray-700 mb-4">{listing.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-semibold">{listing.price}€/heure</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                {listing.sport_type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnoncesList; 