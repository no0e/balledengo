import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Location {
  location_id: number;
  name: string;
  address: string;
  city: string;
  description: string;
  status: 'active' | 'inactive' | 'maintenance';
  phone_number?: string;
  website?: string;
  postal_code?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

interface Sport {
  sport_id: number;
  name: string;
  description: string;
  icon_url: string;
}

interface SportZone {
  zone_id: number;
  name: string;
  total_area: number;
  indoor: boolean;
  surface_type: string;
  max_capacity: number;
}

interface ZoneSportConfiguration {
  config_id: number;
  court_type: 'full' | 'half' | 'quarter';
  court_length: number;
  court_width: number;
  max_courts_possible: number;
  default_courts: number;
  price_per_hour: number;
  sport: Sport;
}

interface Court {
  court_id: number;
  court_number: string;
  status: 'available' | 'maintenance' | 'booked';
  current_sport: Sport;
}

interface LocationWithDetails extends Location {
  sport_zones: (SportZone & {
    zone_sport_configurations: (ZoneSportConfiguration & {
      courts: Court[];
    })[];
  })[];
  primary_image?: string;
  minPrice: number;
  maxPrice: number;
  sports: Sport[];
}

export default function AnnoncesList() {
  const [locations, setLocations] = useState<LocationWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationWithDetails | null>(null);
  const [rawData, setRawData] = useState<any[]>([]);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    async function fetchLocations() {
      try {
        console.log("Début de la récupération des lieux...");
        
        // Récupérer les lieux actifs avec leurs zones, configurations et courts
        const { data: locationsData, error: locationsError } = await supabase
          .from('locations')
          .select(`
            *,
            sport_zones (
              *,
              zone_sport_configurations (
                *,
                sport:sports (*),
                courts (*)
              )
            ),
            location_images (
              image_url,
              is_primary
            )
          `)
          .eq('status', 'active')
          .order('location_id', { ascending: false });

        if (locationsError) {
          console.error("Erreur lors de la requête Supabase:", locationsError);
          throw locationsError;
        }

        console.log("Données brutes reçues:", locationsData);
        setRawData(locationsData || []);
        
        if (!locationsData || locationsData.length === 0) {
          console.warn("Aucune donnée reçue de la table locations");
          setLocations([]);
          setLoading(false);
          return;
        }

        // Transformer les données
        const transformedLocations = locationsData.map(location => {
          // Trouver l'image principale
          const primaryImage = location.location_images?.find((img: any) => img.is_primary)?.image_url;
          
          // Extraire tous les prix des configurations
          const prices = location.sport_zones
            ?.flatMap((zone: any) => 
              zone.zone_sport_configurations
                ?.map((config: any) => config.price_per_hour)
                .filter(Boolean)
            ) || [];

          // Calculer le prix minimum et maximum
          const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
          const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;

          // Extraire tous les sports uniques
          const sports = Array.from(new Set(
            location.sport_zones
              ?.flatMap((zone: any) => 
                zone.zone_sport_configurations
                  ?.map((config: any) => config.sport)
                  .filter(Boolean)
              )
          ));

          return {
            ...location,
            primary_image: primaryImage,
            sports,
            minPrice,
            maxPrice
          };
        });

        console.log("Données transformées:", transformedLocations);
        setLocations(transformedLocations);
        
        // Extraire les villes uniques
        const uniqueCities = Array.from(new Set(transformedLocations.map(loc => loc.city))).sort();
        setCities(uniqueCities);
      } catch (err) {
        console.error('Erreur lors de la récupération des lieux:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);

  // Filtrer et trier les lieux
  const filteredAndSortedLocations = locations
    .filter(location => !selectedCity || location.city === selectedCity)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.minPrice - b.minPrice;
        case 'price-desc':
          return b.minPrice - a.minPrice;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  console.log("Lieux filtrés et triés:", filteredAndSortedLocations);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Une erreur est survenue lors du chargement des annonces.</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (locations.length === 0) {
    return (
      <div className="text-center text-gray-600 p-4">
        <p>Aucune annonce disponible pour le moment.</p>
        <p className="text-sm mt-2">Vérifiez que la table 'locations' contient des données avec le statut 'active'.</p>
        <button 
          onClick={() => setShowDebug(!showDebug)}
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          {showDebug ? "Masquer les données brutes" : "Afficher les données brutes"}
        </button>
        {showDebug && (
          <div className="mt-4 p-4 bg-gray-100 rounded overflow-auto max-h-60">
            <h3 className="font-semibold mb-2">Données brutes reçues de Supabase:</h3>
            <pre className="text-xs">
              {JSON.stringify(rawData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtres et tri */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Toutes les villes</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="name">Trier par nom</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
        </select>
      </div>

      {/* Liste des lieux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedLocations.map((location) => (
          <div
            key={location.location_id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedLocation(location)}
          >
            {/* Image principale */}
            {location.primary_image && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={location.primary_image}
                  alt={location.name}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-4">{location.description}</p>
              
              {/* Prix */}
              {location.minPrice > 0 && (
                <div className="mb-4">
                  <span className="text-green-600 font-semibold">
                    À partir de {location.minPrice}€/heure
                  </span>
                </div>
              )}
              
              {/* Sports disponibles */}
              {location.sports && location.sports.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Sports disponibles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.sports.map((sport) => (
                      <span
                        key={sport.sport_id}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {sport.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Adresse */}
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {location.address}, {location.postal_code} {location.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de détail */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedLocation.name}</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedLocation.primary_image && (
                <img
                  src={selectedLocation.primary_image}
                  alt={selectedLocation.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}

              <div className="space-y-4">
                <p className="text-gray-600">{selectedLocation.description}</p>

                <div>
                  <h3 className="font-semibold mb-2">Zones sportives :</h3>
                  {selectedLocation.sport_zones.map((zone) => (
                    <div key={zone.zone_id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">{zone.name}</h4>
                      <p className="text-sm text-gray-600">
                        Surface : {zone.surface_type}
                        {zone.indoor ? " (Intérieur)" : " (Extérieur)"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Capacité maximale : {zone.max_capacity} personnes
                      </p>
                      
                      {zone.zone_sport_configurations.map((config) => (
                        <div key={config.config_id} className="mt-2 pl-4 border-l-2 border-gray-200">
                          <p className="text-sm">
                            <span className="font-medium">{config.sport.name}</span> - 
                            {config.price_per_hour}€/heure
                          </p>
                          <p className="text-xs text-gray-500">
                            Terrain {config.court_type} - 
                            {config.court_length}m x {config.court_width}m
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Informations pratiques :</h3>
                  <p className="text-gray-600">
                    {selectedLocation.address}<br />
                    {selectedLocation.postal_code} {selectedLocation.city}<br />
                    {selectedLocation.country}
                  </p>
                  {selectedLocation.phone_number && (
                    <p className="text-gray-600 mt-2">
                      Téléphone : {selectedLocation.phone_number}
                    </p>
                  )}
                  {selectedLocation.website && (
                    <a
                      href={selectedLocation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      Visiter le site web
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 