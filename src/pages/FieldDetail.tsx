import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFieldById } from '../services/api';
import { FieldConfiguration } from '../types/field';
import { Star, MapPin, Clock, DollarSign, Users } from 'lucide-react';
import FieldGallery from '../components/field-detail/FieldGallery';
import FieldHeader from '../components/field-detail/FieldHeader';
import FieldAmenities from '../components/field-detail/FieldAmenities';
import FieldDescription from '../components/field-detail/FieldDescription';
import FieldAvailability from '../components/field-detail/FieldAvailability';
import FieldReviews from '../components/field-detail/FieldReviews';
import FieldMap from '../components/field-detail/FieldMap';
import BookingPanel from '../components/field-detail/BookingPanel';

const FieldDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [field, setField] = useState<FieldConfiguration | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchField = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await getFieldById(id);
        setField(data);
      } catch (err) {
        console.error('Erreur lors de la récupération du terrain:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchField();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du terrain...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!field) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Terrain non trouvé</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête avec image */}
      <div className="relative h-96">
        <img
          src={field.images[0] || '/images/placeholder.jpg'}
          alt={field.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex items-end pb-12">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{field.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{field.location.city}, {field.location.postalCode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>{field.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{field.reviews.length} avis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{field.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Sports disponibles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {field.sports.map(sport => (
                  <div key={sport.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">{sport.sport}</span>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-medium">{sport.price}€/h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Équipements</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(field.amenities).map(([key, value]) => (
                  value && (
                    <div key={key} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Photos</h2>
              <div className="grid grid-cols-2 gap-4">
                {field.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${field.name} - Photo ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetail;
