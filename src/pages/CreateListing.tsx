import { useState } from 'react';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    sport: '',
    address: '',
    city: '',
    price: '',
    images: [] as File[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Créer une nouvelle annonce</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre de l'annonce
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                rows={4}
                required
              />
            </div>

            {/* Sport */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de sport
              </label>
              <select
                value={formData.sport}
                onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              >
                <option value="">Sélectionnez un sport</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="padel">Padel</option>
                <option value="rugby">Rugby</option>
              </select>
            </div>

            {/* Adresse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>

            {/* Ville */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ville
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>

            {/* Prix */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix par heure (€)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                required
              />
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos du terrain
              </label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                accept="image/*"
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Publier l'annonce
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateListing; 