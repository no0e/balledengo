import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchHero from '../components/SearchHero';
import FieldFilters from '../components/search/FieldFilters';
import { getFields } from '../services/api';
import { FieldConfiguration } from '../types/field';

const Home: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [fields, setFields] = useState<FieldConfiguration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    sports: [] as string[],
    location: '',
    priceRange: { min: 0, max: 1000 },
    rating: 0
  });

  useEffect(() => {
    const fetchFields = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Récupération des terrains avec les filtres:', filters);
        const data = await getFields(filters);
        console.log('Terrains reçus:', data);
        setFields(data);
      } catch (err) {
        console.error('Erreur lors de la récupération des terrains:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchFields();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Terrains disponibles
          </h2>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            <span>Filtres</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtres */}
          <div className={`lg:block ${isFiltersOpen ? 'block' : 'hidden'}`}>
            <FieldFilters
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {/* Liste des terrains */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Chargement des terrains...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
              </div>
            ) : fields.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Aucun terrain trouvé</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {fields.map(field => (
                  <Link
                    key={field.id}
                    to={`/field/${field.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <img
                        src={field.images && field.images.length > 0 ? field.images[0] : '/images/placeholder.jpg'}
                        alt={field.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold text-lg">{field.name}</h3>
                        <p className="text-white/90 text-sm">{field.location.city}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                        À partir de {Math.min(...field.sports.map(s => s.price))}€/h
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {field.sports.map(sport => (
                          <span
                            key={sport.id}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {sport.sport}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center">
                            <span className="text-yellow-400">★</span>
                            <span className="ml-1 text-gray-600">{field.rating.toFixed(1)}</span>
                          </div>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-gray-600">{field.reviews.length} avis</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;