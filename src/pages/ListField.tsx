import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FieldConfiguration } from '../types/field';
import ZoneConfigurator from '../components/field/ZoneConfigurator';
import SportConfigurator from '../components/field/SportConfigurator';
import { useAuth } from '../contexts/AuthContext';
import { createField } from '../services/fieldService';

export default function ListField() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [fieldConfig, setFieldConfig] = useState<FieldConfiguration>({
    id: '',
    name: '',
    sports: [],
    zones: [],
    amenities: {
      locker_room: false,
      showers: false,
      water_fountain: false,
      parking: false,
      lighting: false,
      equipment_rental: false
    },
    images: [],
    description: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFieldConfig(prev => ({
        ...prev,
        images: [...prev.images, ...filesArray].slice(0, 5)
      }));
    }
  };

  const removeFile = (index: number) => {
    setFieldConfig(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('Vous devez être connecté pour lister un terrain');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      
      await createField(fieldConfig);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la création du terrain');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Connexion Requise</h2>
          <p className="text-gray-600">
            Vous devez être connecté pour lister un terrain. Veuillez vous connecter ou créer un compte.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lister Votre Terrain</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <p className="text-lg text-gray-600 mb-8">
          Partagez votre terrain de sport avec les athlètes de votre région et commencez à gagner.
        </p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom du Terrain
            </label>
            <input
              type="text"
              value={fieldConfig.name}
              onChange={(e) => setFieldConfig(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="ex: Complexe Sportif du Centre-ville"
              required
            />
          </div>

          <ZoneConfigurator
            zones={fieldConfig.zones}
            onZoneChange={(zones) => setFieldConfig(prev => ({ ...prev, zones }))}
          />

          <SportConfigurator
            sports={fieldConfig.sports}
            zones={fieldConfig.zones}
            onSportChange={(sports) => setFieldConfig(prev => ({ ...prev, sports }))}
          />

          {/* Section Upload de Photos */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Photos du Terrain (Max 5)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="flex flex-wrap gap-4">
                {fieldConfig.images.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Aperçu ${index + 1}`}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {fieldConfig.images.length < 5 && (
                  <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded cursor-pointer hover:border-green-500">
                    <Upload className="w-6 h-6 text-gray-400" />
                    <span className="text-sm text-gray-500">Upload</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                      multiple
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Section Équipements */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Équipements
            </label>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(fieldConfig.amenities).map(([key, value]) => (
                <label key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) =>
                      setFieldConfig((prev) => ({
                        ...prev,
                        amenities: {
                          ...prev.amenities,
                          [key]: e.target.checked,
                        },
                      }))
                    }
                    className="rounded text-green-600 focus:ring-green-500"
                  />
                  <span>{key.replace("_", " ")}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description Supplémentaire
            </label>
            <textarea
              value={fieldConfig.description}
              onChange={(e) => setFieldConfig(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              placeholder="Décrivez votre terrain, ses caractéristiques spéciales, les règles, etc."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Création en cours...' : 'Lister Votre Terrain'}
          </button>
        </form>
      </div>
    </div>
  );
}