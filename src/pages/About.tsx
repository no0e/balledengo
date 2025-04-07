const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">À propos de SportSpot</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
          <p className="text-gray-700 mb-6">
            SportSpot est né d'une passion commune pour le sport et le partage. Notre mission est de faciliter 
            l'accès aux terrains sportifs en mettant en relation les propriétaires de terrains avec les amateurs 
            de sport à la recherche d'un lieu pour pratiquer leur activité favorite.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
          <p className="text-gray-700 mb-6">
            Fondé en 2024, SportSpot est le fruit d'une collaboration entre passionnés de sport et experts 
            en technologie. Nous avons constaté que de nombreux terrains sportifs restaient inutilisés pendant 
            de longues périodes, alors que des sportifs cherchaient désespérément des lieux pour pratiquer.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Jean Dupont</h3>
                <p className="text-gray-600">Fondateur & CEO</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Marie Martin</h3>
                <p className="text-gray-600">Directrice Technique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 